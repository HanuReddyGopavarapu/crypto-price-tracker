# State Management

We chose **React Query** for state management because:
- It simplifies data fetching and caching.
- It provides built-in loading and error states.
- It reduces boilerplate code compared to Redux or Context API.

Example usage:
```typescript
const { data, isLoading, error } = useQuery('cryptoData', fetchCryptoData);