import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Fix for missing __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURATION
const targetDir = './src';      // Where your files are
const outputFile = './src/index.ts'; // Where the index.ts should go

// Helper function to crawl directories
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

console.log(`🔍 Scanning ${targetDir} for .ts files...`);

// 2. Get all files recursively
// We resolve the path relative to where this script is running
const resolvedTarget = path.resolve(__dirname, targetDir);
const allFiles = getAllFiles(resolvedTarget);

// 3. Filter and Format
const exports = allFiles
    .filter(file => {
        return file.endsWith('.ts')
            && !file.endsWith('index.ts')
            && !file.includes('.test.')
            && !file.includes('.spec.');
    })
    .map(file => {
        // Convert full path to relative path from the output file
        let relativePath = path.relative(path.dirname(path.resolve(__dirname, outputFile)), file);

        // Fix Windows backslashes to forward slashes
        relativePath = relativePath.split(path.sep).join('/');

        // Ensure it starts with ./ if it's in the same folder
        if (!relativePath.startsWith('.')) {
            relativePath = './' + relativePath;
        }

        // Remove extension
        relativePath = relativePath.replace('.ts', '');

        return `export * from '${relativePath}';`;
    });

// 4. Write the file
if (exports.length > 0) {
    fs.writeFileSync(path.resolve(__dirname, outputFile), exports.join('\n'));
    console.log(`✅ Success! Wrote ${exports.length} exports to ${outputFile}`);
} else {
    console.error("❌ Error: No .ts files found! Check your targetDir path.");
}
