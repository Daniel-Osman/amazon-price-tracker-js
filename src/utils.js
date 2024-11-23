// 4. src/utils.js
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function parseProductUrls(filename) {
    try {
        const filePath = path.join(__dirname, '..', filename);
        const content = readFileSync(filePath, 'utf8');
        const urls = content.split('\n')
            .map(line => line.trim())
            .filter(line => line && line.includes('amazon.com'));
        
        if (urls.length === 0) {
            console.warn('No valid Amazon URLs found in products.txt');
        }
        
        return urls;
    } catch (err) {
        console.error('Error reading product URLs:', err);
        return [];
    }
}