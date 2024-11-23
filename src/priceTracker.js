// 3. src/priceTracker.js
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HISTORY_FILE = path.join(__dirname, '..', 'price-history.json');

export async function trackPrice(productData) {
    try {
        let history = [];
        try {
            const data = await readFile(HISTORY_FILE, 'utf8');
            history = JSON.parse(data);
        } catch (err) {
            // File doesn't exist yet, start with empty history
            console.log('Creating new price history file...');
        }

        history.push(productData);
        await writeFile(HISTORY_FILE, JSON.stringify(history, null, 2));
        console.log(`Tracked price for ${productData.title}: $${productData.price}`);
        
    } catch (err) {
        console.error('Error tracking price:', err);
    }
}