# API Integration Details

## Fetching Crypto Prices

We use the CoinGecko API to fetch cryptocurrency prices. The data is fetched using `axios` and displayed in the `CryptoList` component.

Example API call:
```typescript
axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=7`);
axios.get(`https://min-api.cryptocompare.com/data/v2/news/?categories=${cryptoId}`);