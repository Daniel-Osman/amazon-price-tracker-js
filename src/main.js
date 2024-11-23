import { CheerioCrawler } from 'crawlee';
import { router } from './routes.js';
import { parseProductUrls } from './utils.js';

async function main() {
    // Initialize the crawler
    const crawler = new CheerioCrawler({
        maxRequestRetries: 3,
        requestHandler: router,
        preNavigationHooks: [
            async ({ request }) => {
                request.headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.5',
                };
            },
        ],
    });

    // Load and process URLs
    const productUrls = parseProductUrls('products.txt');
    console.log(`Starting to track ${productUrls.length} products...`);
    
    // Run the crawler
    await crawler.run(productUrls);
}

// Run the main function
main().catch((err) => {
    console.error('Error running crawler:', err);
    process.exit(1);
});