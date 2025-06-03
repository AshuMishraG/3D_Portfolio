import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "../public");

// Configuration for different image types
const config = {
   review: {
      quality: 80,
      format: "jpg",
      dir: "assets",
      pattern: /review\d+\.png/,
   },
   spotlight: {
      quality: 85,
      format: "jpg",
      dir: "assets",
      pattern: /spotlight\d+\.png/,
   },
   companyLogo: {
      quality: 85,
      format: "jpg",
      dir: "assets",
      pattern: /(agentic|ibentos|d2iTechnology)\.png/,
   },
   projectLogo: {
      quality: 85,
      format: "jpg",
      dir: "assets",
      pattern: /(AriseGym|project-logo\d+)\.png/,
   },
};

// Files that should remain as PNG
const keepAsPNG = [
   // Technology icons
   /Azure\.png/,
   /threejs\.png/,
   /nextjs\.png/,
   /tailwindcss\.png/,
   /nodejs\.png/,
   /youtube\.png/,
   /Javascript\.png/,
   /openweather\.png/,
   /typescript\.png/,
   /framer\.png/,

   // UI elements
   /arrow-up\.png/,
   /left-arrow\.png/,
   /right-arrow\.png/,
   /star\.png/,
   /linkedin\.png/,

   // Textures
   /cube\.png/,
   /rings\.png/,
   /monitor\.png/,
   /screen\.png/,

   // Grid and backgrounds
   /grid\d+\.png/,
   /terminal\.png/,
   /computer\.png/,
];

async function shouldKeepAsPNG(filePath) {
   const fileName = path.basename(filePath);
   return keepAsPNG.some((pattern) => pattern.test(fileName));
}

async function optimizeImage(filePath, options) {
   try {
      // Skip if file should remain as PNG
      if (await shouldKeepAsPNG(filePath)) {
         console.log(`Skipping ${filePath} - keeping as PNG`);
         return;
      }

      const outputPath = filePath.replace(
         /\.(png|jpg|jpeg)$/,
         `.${options.format}`
      );

      // Skip if output file already exists
      if (fs.existsSync(outputPath)) {
         console.log(`Skipping ${filePath} - output already exists`);
         return;
      }

      await sharp(filePath)
         .toFormat(options.format, { quality: options.quality })
         .toFile(outputPath);

      console.log(`Optimized ${filePath} -> ${outputPath}`);
   } catch (error) {
      console.error(`Error processing ${filePath}:`, error);
   }
}

async function processDirectory(dir, options) {
   const files = fs.readdirSync(dir);

   for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
         await processDirectory(filePath, options);
      } else if (options.pattern.test(file)) {
         await optimizeImage(filePath, options);
      }
   }
}

async function main() {
   for (const [type, options] of Object.entries(config)) {
      const dir = path.join(PUBLIC_DIR, options.dir);
      if (fs.existsSync(dir)) {
         console.log(`\nProcessing ${type} images...`);
         await processDirectory(dir, options);
      }
   }
}

main().catch(console.error);