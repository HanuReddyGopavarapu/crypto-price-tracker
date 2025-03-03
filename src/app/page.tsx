'use client';

import React, { useEffect, useState } from 'react';
import CryptoList from './components/CryptoList';
import SearchBar from './components/SearchBar';
import useCryptoPrices from './hooks/useCryptoPrices';
import useSearchStore from './store/searchStore';

const Home: React.FC = () => {
  const { search } = useSearchStore();
  const { data, error, refetch, isLoading } = useCryptoPrices();
  const [flash, setFlash] = useState(false); // Track flash state

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Trigger flash effect on refresh
  const handleRefresh = async () => {
    setFlash(true); // Enable flash effect
    await refetch(); // Fetch new data
    setTimeout(() => setFlash(false), 500); // Disable flash after 500ms
  };

  if (isLoading) return <p className="text-center text-lg font-bold text-white">Loading...</p>;
  if (error) return <p className="text-center text-lg font-bold text-red-500">Error loading data.</p>;

  const filteredData = Object.keys(data || {})
    .filter((key) => key.includes(search.toLowerCase()))
    .reduce<{ [key: string]: { usd: number } }>((obj, key) => {
      if (data) {
        obj[key] = data[key];
      }
      return obj;
    }, {});

  return (
    <main className="min-h-screen min-w-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center p-6 sm:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6 sm:mb-8">
        Crypto Price Tracker
      </h1>

      <div className="w-full max-w-md sm:max-w-lg mb-6 sm:mb-8">
        <SearchBar />
      </div>

      <button
        onClick={handleRefresh}
        className="w-full max-w-md sm:max-w-lg p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 mb-6 sm:mb-8"
      >
        Refresh Prices
      </button>

      <div className="w-full max-w-4xl">
        <CryptoList data={filteredData} search={search} flash={flash} />
      </div>
    </main>
  );
};

export default Home;