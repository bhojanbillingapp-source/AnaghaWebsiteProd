import { readFile, writeFile } from 'fs/promises';
import { readdir } from 'fs/promises';
import { join, extname } from 'path';
import { glob } from 'glob';

async function updateImportsInFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf-8');
    let modified = false;

    // Replace .jpg, .jpeg, .png with .webp in import statements
    const patterns = [
      { from: /from\s+["']@\/assets\/([^"']+)\.jpg["']/g, to: "from \"@/assets/$1.webp\"" },
      { from: /from\s+["']@\/assets\/([^"']+)\.jpeg["']/g, to: "from \"@/assets/$1.webp\"" },
      { from: /from\s+["']@\/assets\/([^"']+)\.png["']/g, to: "from \"@/assets/$1.webp\"" },
    ];

    for (const pattern of patterns) {
      const newContent = content.replace(pattern.from, pattern.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      await writeFile(filePath, content, 'utf-8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  const files = await glob('src/**/*.{ts,tsx}', { cwd: process.cwd() });
  let updatedCount = 0;

  console.log('Updating image imports to WebP format...\n');

  for (const file of files) {
    const fullPath = join(process.cwd(), file);
    const updated = await updateImportsInFile(fullPath);
    if (updated) {
      updatedCount++;
      console.log(`✓ Updated: ${file}`);
    }
  }

  console.log(`\n✓ Updated ${updatedCount} files`);
}

main().catch(console.error);

