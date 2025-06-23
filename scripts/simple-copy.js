/**
 * Simple fallback copy script to ensure SVG icons are copied to the public directory
 * This script is a simplified version of copy-icons.js and doesn't rely on complex path resolution
 */

// Immediately invoked async function
(async () => {
  try {
    // Import modules dynamically to avoid require
    const fs = await import('fs/promises');
    const path = await import('path');
    const { fileURLToPath } = await import('url');

    // Get current directory
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.default.dirname(__filename);

    // Define paths relative to this script
    const sourceDir = path.default.join(__dirname, '..', 'src', 'assets', 'icons');
    const targetDir = path.default.join(__dirname, '..', 'public', 'assets', 'icons');

    console.log('Simple SVG copy script');
    console.log(`Source: ${sourceDir}`);
    console.log(`Target: ${targetDir}`);

    // Create target directory
    await fs.default.mkdir(targetDir, { recursive: true })
      .catch(error => {
        if (error.code !== 'EEXIST') {
          console.warn(`Warning creating directory: ${error.message}`);
        }
      });

    // Read source directory
    const files = await fs.default.readdir(sourceDir);
    const svgFiles = files.filter(file => file.toLowerCase().endsWith('.svg'));
    
    console.log(`Found ${svgFiles.length} SVG files to copy`);
    
    // Copy each SVG file
    for (const file of svgFiles) {
      try {
        const src = path.default.join(sourceDir, file);
        const dest = path.default.join(targetDir, file);
        
        await fs.default.copyFile(src, dest);
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
