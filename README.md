# Crypto Price Tracker

A Next.js-based application to track cryptocurrency prices in real-time. This project includes a search bar, a list of cryptocurrencies, and a price chart.

link - https://cryptopricetracker-n7go25msi-gopavarapupandu-gmailcoms-projects.vercel.app/

## Features

- **Search Bar**: Search for specific cryptocurrencies.
- **Crypto List**: Display a list of cryptocurrencies with their current prices.
- **Price Chart**: Visualize the price history of a selected cryptocurrency.

## Technologies Used

- **Frontend**: 
  - [Next.js](https://nextjs.org/) (React framework)
  - [Tailwind CSS](https://tailwindcss.com/) (Styling)
- **State Management**: 
  - [Zustand](https://zustand-demo.pmnd.rs/) (Lightweight state management)
- **API Integration**: 
  - [CoinGecko API](https://www.coingecko.com/en/api) (Cryptocurrency data)
- **Development Tools**: 
  - [TypeScript](https://www.typescriptlang.org/) (Static typing)
  - [ESLint](https://eslint.org/) (Code linting)
  - [Prettier](https://prettier.io/) (Code formatting)

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) 

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```plaintext
   NEXT_PUBLIC_COINGECKO_API_URL=https://api.coingecko.com/api/v3
   ```

   (Replace with your actual API URL if needed.)

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open the application:**

   Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure


src/
├── app/
│   ├── page.tsx          # Main page component
├── components/
│   ├── CryptoList.tsx    # Component to display cryptocurrency list
│   ├── PriceChart.tsx    # Component to display price chart
│   ├── SearchBar.tsx     # Component for searching cryptocurrencies
├── hooks/
│   ├── useCryptoPrices.ts # Custom hook to fetch cryptocurrency prices
├── store/
│   ├── searchStore.ts    # Zustand store for search functionality
├── styles/
│   ├── globals.css       # Global CSS styles
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Project dependencies and scripts
```

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm start`**: Start the production server.
- **`npm run lint`**: Lint the code using ESLint.
- **`npm run type-check`**: Check for TypeScript errors.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing the cryptocurrency data API.
- [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for making development easier.

---

## Future Improvements

- Add user authentication to save favorite cryptocurrencies.
- Implement real-time price updates using WebSockets.
- Add more advanced charting options.

---

