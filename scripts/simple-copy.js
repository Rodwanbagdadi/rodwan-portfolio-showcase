/**
 * Simple fallback copy script to ensure SVG icons are copied to the public directory
 * This script is a simplified version of copy-icons.js and doesn't rely on complex path resolution
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Immediately invoked async function
(async () => {
  try {    // Get current directory
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Define paths relative to this script
    const sourceDir = path.join(__dirname, '..', 'src', 'assets', 'icons');
    const targetDir = path.join(__dirname, '..', 'public', 'assets', 'icons');

    console.log('Simple SVG copy script');
    console.log(`Source: ${sourceDir}`);
    console.log(`Target: ${targetDir}`);    // Create target directory
    await fs.mkdir(targetDir, { recursive: true })
      .catch(error => {
        if (error.code !== 'EEXIST') {
          console.warn(`Warning creating directory: ${error.message}`);
        }
      });

    // Read source directory
    const files = await fs.readdir(sourceDir);
    const svgFiles = files.filter(file => file.toLowerCase().endsWith('.svg'));
    
    console.log(`Found ${svgFiles.length} SVG files to copy`);
      // Copy each SVG file
    for (const file of svgFiles) {
      try {
        const src = path.join(sourceDir, file);
        const dest = path.join(targetDir, file);
        
        await fs.copyFile(src, dest);
        console.log(`→ Copied: ${file}`);
      } catch (err) {
        console.warn(`Warning copying ${file}: ${err.message}`);
      }
    }
    
    console.log('✅ SVG copy operation completed');
  } catch (error) {
    console.error(`Error in simple copy script: ${error.message}`);
    // Don't exit with error to avoid breaking the build
  }
})();
