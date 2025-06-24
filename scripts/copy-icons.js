
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ESM doesn't have __dirname, so we need to create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and target directories using relative paths
// This avoids potential issues with path resolution
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

// Copy files
try {
  // Get list of SVG files
  const files = fs.readdirSync(sourceDir);
  const svgFiles = files.filter(file => file.endsWith('.svg'));
  
  console.log(`Found ${svgFiles.length} SVG files`);
  
  // Copy each file
  for (const file of svgFiles) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${file}`);
  }
  
  console.log('✅ All SVG icons copied successfully');
} catch (error) {
  console.error(`❌ Error copying icons: ${error.message}`);
  process.exit(1);
}
