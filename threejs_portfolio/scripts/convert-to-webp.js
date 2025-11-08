import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "../public");

// Quality settings for different image types
const qualitySettings = {
   // Photos and complex images - good quality
   photos: 85,
   // Icons and logos - maximum quality
   icons: 100,
   // Textures - good quality
   textures: 90,
};

// Files to skip (SVG files should remain as SVG)
const skipPatterns = [/\.svg$/i];

function shouldSkip(filePath) {
   return skipPatterns.some((pattern) => pattern.test(filePath));
}

async function convertToWebP(filePath) {
   try {
      if (shouldSkip(filePath)) {
         console.log(`Skipping ${filePath} - SVG file`);
         return;
      }

      const ext = path.extname(filePath).toLowerCase();
      if (![".png", ".jpg", ".jpeg"].includes(ext)) {
         return;
      }

      const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
      const fileName = path.basename(filePath);

      // Determine quality based on file type
      let quality = qualitySettings.photos;
      if (
         fileName.includes("logo") ||
         fileName.includes("icon") ||
         fileName.includes("Azure") ||
         fileName.includes("threejs") ||
         fileName.includes("nextjs") ||
         fileName.includes("tailwindcss") ||
         fileName.includes("nodejs") ||
         fileName.includes("youtube") ||
         fileName.includes("Javascript") ||
         fileName.includes("openweather") ||
         fileName.includes("typescript") ||
         fileName.includes("framer") ||
         fileName.includes("arrow") ||
         fileName.includes("star") ||
         fileName.includes("linkedin")
      ) {
         quality = qualitySettings.icons;
      } else if (filePath.includes("textures")) {
         quality = qualitySettings.textures;
      }

      // Skip if output file already exists
      if (fs.existsSync(outputPath)) {
         console.log(`Skipping ${filePath} - WebP already exists`);
         return;
      }

      await sharp(filePath).webp({ quality, effort: 6 }).toFile(outputPath);

      const originalSize = fs.statSync(filePath).size;
      const newSize = fs.statSync(outputPath).size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(
         `✓ Converted ${path.basename(filePath)} -> ${path.basename(
            outputPath
         )} (${savings}% smaller)`
      );
   } catch (error) {
      console.error(`✗ Error processing ${filePath}:`, error.message);
   }
}

async function processDirectory(dir) {
   if (!fs.existsSync(dir)) {
      console.log(`Directory ${dir} does not exist, skipping...`);
      return;
   }

   const files = fs.readdirSync(dir);

   for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
         await processDirectory(filePath);
      } else {
         await convertToWebP(filePath);
      }
   }
}

async function main() {
   console.log("🖼️  Converting images to WebP format...\n");

   const directories = [
      path.join(PUBLIC_DIR, "assets"),
      path.join(PUBLIC_DIR, "textures"),
   ];

   for (const dir of directories) {
      if (fs.existsSync(dir)) {
         console.log(`\n📁 Processing ${path.basename(dir)}/...`);
         await processDirectory(dir);
      }
   }

   console.log("\n✅ Conversion complete!");
   console.log(
      "\n📝 Next step: Update code references from .png/.jpg to .webp"
   );
}

main().catch(console.error);
