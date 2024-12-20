# Amazon Price Tracker

This project is a Node.js application that tracks prices of Amazon products and logs the price history to a JSON file. It uses the [Crawlee](https://crawlee.dev/) library for web scraping.

## Description

The Amazon Price Tracker scrapes product information, such as title and price, from Amazon product pages at specified URLs. It runs on a schedule (or can be run manually), checks for price changes, and appends the updated product information with a timestamp to a JSON file (`price-history.json`).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/<your_username>/amazon-price-tracker.git
    cd amazon-price-tracker
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Add Amazon product URLs to the  `products.txt`  file, one URL per line. For example:
    ```
    https://www.amazon.com/dp/B08L8LG9VG
    https://www.amazon.com/dp/B07XJ8C8F5
    ```
2. Run the tracker:
    ```bash
    npm start
    ```
    The tracker will start fetching prices for the products listed in  `products.txt`. The price history will be saved in  `price-history.json`  in the project root directory.


*   `main.js`:  The entry point of the application, initializes the crawler, and loads product URLs.
*   `routes.js`:  Defines the scraping logic for extracting product information from Amazon pages.
*   `priceTracker.js`:  Handles storing product price data to the `price-history.json` file.
*   `utils.js`:  Contains utility functions, like parsing product URLs from `products.txt`.
*   `products.txt`:  A file containing the list of Amazon product URLs to track.
*   `package.json`:  Lists project dependencies and scripts.
*   `price-history.json`:  Stores the price history of the tracked products.
