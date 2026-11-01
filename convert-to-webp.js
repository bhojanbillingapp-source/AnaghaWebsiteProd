import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { existsSync } from 'fs';

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let totalOriginalSize = 0;
  let totalWebpSize = 0;
  let convertedCount = 0;

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const result = await processDirectory(fullPath);
      totalOriginalSize += result.originalSize;
      totalWebpSize += result.webpSize;
      convertedCount += result.count;
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const originalSize = await getFileSize(fullPath);
        totalOriginalSize += originalSize;
        
        const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        
        // Skip if webp already exists
        if (!existsSync(webpPath)) {
          const success = await convertToWebP(fullPath, webpPath);
          if (success) {
            const webpSize = await getFileSize(webpPath);
            totalWebpSize += webpSize;
            convertedCount++;
            console.log(`✓ Converted: ${entry.name} (${(originalSize/1024).toFixed(1)}KB → ${(webpSize/1024).toFixed(1)}KB)`);
          }
        } else {
          const webpSize = await getFileSize(webpPath);
          totalWebpSize += webpSize;
          console.log(`⊘ Skipped (exists): ${entry.name}`);
        }
      }
    }
  }

  return { originalSize: totalOriginalSize, webpSize: totalWebpSize, count: convertedCount };
}

async function main() {
  const assetsDir = './src/assets';
  console.log('Starting WebP conversion...\n');
  
  const result = await processDirectory(assetsDir);
  
  const reduction = result.originalSize - result.webpSize;
  const reductionPercent = ((reduction / result.originalSize) * 100).toFixed(1);
  
  console.log('\n' + '='.repeat(50));
  console.log('Conversion Summary:');
  console.log('='.repeat(50));
  console.log(`Files converted: ${result.count}`);
  console.log(`Original total size: ${(result.originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`WebP total size: ${(result.webpSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Size reduction: ${(reduction / 1024 / 1024).toFixed(2)} MB (${reductionPercent}%)`);
  console.log('='.repeat(50));
}

main().catch(console.error);

