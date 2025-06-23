const fs = require('fs');
const path = require('path');

// This script copies SVG icons to the public directory for fallback access
const sourceDir = path.resolve(__dirname, '../src/assets/icons');
const targetDir = path.resolve(__dirname, '../public/assets/icons');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  console.log(`Creating directory: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
}

try {
  // Read all SVG files
  const svgFiles = fs.readdirSync(sourceDir).filter(file => file.endsWith('.svg'));
  
  // Copy each SVG file to the public directory
  svgFiles.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${file} to public directory`);
  });
  
  console.log('✅ All SVG icons copied to public directory');
} catch (err) {
  console.error('❌ Error copying SVG icons:', err);
  process.exit(1);
}
