import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "../public");

// Files to keep (PNG for backup, WebP for production, SVG always)
const keepPatterns = [/\.webp$/i, /\.png$/i, /\.svg$/i, /\.mp4$/i];

// Files to remove (JPG, JPEG)
const removePatterns = [/\.jpg$/i, /\.jpeg$/i];

function shouldKeep(filePath) {
   const fileName = path.basename(filePath);
   return keepPatterns.some((pattern) => pattern.test(fileName));
}

function shouldRemove(filePath) {
   const fileName = path.basename(filePath);
   return removePatterns.some((pattern) => pattern.test(fileName));
}

function hasWebPEquivalent(filePath) {
   const ext = path.extname(filePath).toLowerCase();
   if (![".jpg", ".jpeg", ".png"].includes(ext)) return false;

   const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
   return fs.existsSync(webpPath);
}

async function cleanupDirectory(dir) {
   if (!fs.existsSync(dir)) {
      console.log(`Directory ${dir} does not exist, skipping...`);
      return;
   }

   const files = fs.readdirSync(dir);
   let removedCount = 0;
   let keptCount = 0;

   for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
         await cleanupDirectory(filePath);
      } else {
         if (shouldRemove(filePath)) {
            // Only remove JPG/JPEG if WebP equivalent exists
            if (hasWebPEquivalent(filePath)) {
               fs.unlinkSync(filePath);
               console.log(`✓ Removed ${path.relative(PUBLIC_DIR, filePath)}`);
               removedCount++;
            } else {
               console.log(
                  `⚠ Kept ${path.relative(PUBLIC_DIR, filePath)} (no WebP equivalent)`
               );
               keptCount++;
            }
         } else if (shouldKeep(filePath)) {
            keptCount++;
         }
      }
   }

   return { removedCount, keptCount };
}

async function main() {
   console.log("🧹 Cleaning up image files for production...\n");
   console.log("Keeping: WebP (production), PNG (backup), SVG, MP4\n");
   console.log("Removing: JPG/JPEG (if WebP equivalent exists)\n");

   const directories = [
      path.join(PUBLIC_DIR, "assets"),
      path.join(PUBLIC_DIR, "textures"),
   ];

   let totalRemoved = 0;
   let totalKept = 0;

   for (const dir of directories) {
      if (fs.existsSync(dir)) {
         console.log(`\n📁 Processing ${path.basename(dir)}/...`);
         const { removedCount, keptCount } = await cleanupDirectory(dir);
         totalRemoved += removedCount;
         totalKept += keptCount;
      }
   }

   console.log("\n✅ Cleanup complete!");
   console.log(`📊 Summary: Removed ${totalRemoved} files, Kept ${totalKept} files`);
   console.log("\n💡 Production ready: Using WebP for optimal performance!");
}

main().catch(console.error);

