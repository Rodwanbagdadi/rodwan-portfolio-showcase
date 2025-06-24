
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ESM doesn't have __dirname, so we need to create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and target directories using relative paths
const sourceDir = path.join(__dirname, '..', 'src', 'assets', 'icons');
const targetDir = path.join(__dirname, '..', 'public', 'assets', 'icons');

console.log(`Source directory: ${sourceDir}`);
console.log(`Target directory: ${targetDir}`);

// Create target directory recursively
try {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
} catch (err) {
  // Directory might already exist, which is fine
  if (err.code !== 'EEXIST') {
    console.error(`Error creating directory: ${err.message}`);
  }
}

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.log('ℹ️ Source icons directory not found, skipping copy operation.');
  console.log('ℹ️ Using existing icons in public directory.');
  process.exit(0);
}

// Copy files
try {
  // Get list of SVG files
  const files = fs.readdirSync(sourceDir);
  const svgFiles = files.filter(file => file.endsWith('.svg'));
  
  console.log(`Found ${svgFiles.length} SVG files`);
  
  if (svgFiles.length === 0) {
    console.log('ℹ️ No SVG files to copy from source directory.');
    console.log('ℹ️ Using existing icons in public directory.');
    process.exit(0);
  }
  
  // Copy each file, but skip empty files
  let copiedCount = 0;
  for (const file of svgFiles) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    try {
      const stats = fs.statSync(sourcePath);
      if (stats.size === 0) {
        console.log(`⚠️ Skipping empty file: ${file}`);
        continue;
      }
      
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${file}`);
      copiedCount++;
    } catch (err) {
      console.error(`Error copying ${file}: ${err.message}`);
    }
  }
  
  console.log(`✅ ${copiedCount} SVG icons copied successfully`);
} catch (error) {
  console.error(`❌ Error copying icons: ${error.message}`);
  // Don't exit with error to avoid breaking the build if public icons exist
  console.log('ℹ️ Continuing with existing public icons...');
}
