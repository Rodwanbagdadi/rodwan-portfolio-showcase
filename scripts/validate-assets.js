import fs from 'fs';
import path from 'path';

// This script validates SVG assets before build
console.log('Validating SVG assets...');

const iconsDir = path.resolve('./src/assets/icons');

try {
  // Check if icons directory exists
  if (!fs.existsSync(iconsDir)) {
    console.error('❌ Icons directory not found:', iconsDir);
    process.exit(1);
  }

  // List and validate all SVG files
  const svgFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
  
  console.log(`Found ${svgFiles.length} SVG files`);
  
  let allValid = true;
  
  svgFiles.forEach(file => {
    const filePath = path.join(iconsDir, file);
    
    try {
      // Check file size and content
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      if (stats.size === 0) {
        console.error(`❌ Empty SVG file: ${file}`);
        allValid = false;
      }
      
      if (!content.includes('<svg')) {
        console.error(`❌ Invalid SVG content in: ${file}`);
        allValid = false;
      }
      
      console.log(`✓ ${file} (${stats.size} bytes)`);
    } catch (err) {
      console.error(`❌ Error reading ${file}:`, err);
      allValid = false;
    }
  });
  
  if (!allValid) {
    console.error('❌ Some SVG files have issues. Please fix them before building.');
    process.exit(1);
  }
  
  console.log('✅ All SVG assets validated successfully.');
} catch (err) {
  console.error('❌ Error validating SVG assets:', err);
  process.exit(1);
}
