// 2. src/routes.js
import { createCheerioRouter } from 'crawlee';
import { trackPrice } from './priceTracker.js';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ $, request, log }) => {
    const title = $('#productTitle').text().trim();
    const priceElement = $('#priceblock_ourprice, #priceblock_dealprice, .a-price .a-offscreen');
    const price = priceElement.text().trim();
    
    if (!title || !price) {
        log.error('Failed to extract product information', { url: request.url });
        return;
    }

    const priceValue = parseFloat(price.replace(/[^0-9.]/g, ''));
    
    await trackPrice({
        url: request.url,
        title,
        price: priceValue,
        timestamp: new Date().toISOString()
    });
});