
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ESM doesn't have __dirname, so we need to create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This script validates SVG assets before build
console.log('Validating SVG assets...');

const iconsDir = path.join(__dirname, '..', 'src', 'assets', 'icons');
const publicIconsDir = path.join(__dirname, '..', 'public', 'assets', 'icons');

try {
  // Check if icons directory exists
  if (!fs.existsSync(iconsDir)) {
    console.log('ℹ️ Source icons directory not found, checking public directory...');
    
    // Check public directory instead
    if (!fs.existsSync(publicIconsDir)) {
      console.error('❌ Neither source nor public icons directory found');
      process.exit(1);
    }
    
    // Validate public directory icons
    const publicSvgFiles = fs.readdirSync(publicIconsDir).filter(file => file.endsWith('.svg'));
    console.log(`Found ${publicSvgFiles.length} SVG files in public directory`);
    
    if (publicSvgFiles.length === 0) {
      console.error('❌ No SVG files found in public icons directory');
      process.exit(1);
    }
    
    console.log('✅ Public SVG assets validated successfully.');
    process.exit(0);
  }

  // List and validate all SVG files in source directory
  const svgFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
  
  console.log(`Found ${svgFiles.length} SVG files in source directory`);
  
  if (svgFiles.length === 0) {
    console.log('ℹ️ No SVG files in source directory, checking public directory...');
    
    if (fs.existsSync(publicIconsDir)) {
      const publicSvgFiles = fs.readdirSync(publicIconsDir).filter(file => file.endsWith('.svg'));
      console.log(`Found ${publicSvgFiles.length} SVG files in public directory`);
      console.log('✅ Using public SVG assets.');
      process.exit(0);
    }
  }
  
  let allValid = true;
  
  svgFiles.forEach(file => {
    const filePath = path.join(iconsDir, file);
    
    try {
      // Check file size and content
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      if (stats.size === 0) {
        console.log(`⚠️ Empty SVG file: ${file} (using public fallback)`);
      } else if (!content.includes('<svg')) {
        console.error(`❌ Invalid SVG content in: ${file}`);
        allValid = false;
      } else {
        console.log(`✓ ${file} (${stats.size} bytes)`);
      }
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
