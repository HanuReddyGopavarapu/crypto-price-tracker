import React, { useState, useEffect, JSX } from 'react';
import { FaBitcoin, FaEthereum, FaDollarSign } from 'react-icons/fa';
import { SiCardano, SiSolana, SiDogecoin, SiRipple } from 'react-icons/si';
import { motion } from 'framer-motion';
import axios from 'axios';
import PriceChart from './PriceChart';

interface CryptoData {
  [key: string]: { usd: number };
}

interface CryptoListProps {
  data?: CryptoData;
  search: string; // Pass search term from parent
}

interface NewsArticle {
  id: string;
  title: string;
  url: string;
  source: string;
}

const cryptoIcons: { [key: string]: JSX.Element } = {
  bitcoin: <FaBitcoin className="text-orange-500" />,
  ethereum: <FaEthereum className="text-purple-500" />,
  cardano: <SiCardano className="text-blue-500" />,
  solana: <SiSolana className="text-pink-500" />,
  dogecoin: <SiDogecoin className="text-yellow-500" />,
  ripple: <SiRipple className="text-teal-500" />,
};

const CryptoList: React.FC<CryptoListProps> = ({ data = {}, search }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [chartData, setChartData] = useState<[number, number][]>([]);

  // Fetch news and chart data when a card is expanded
  useEffect(() => {
    if (expandedCard) {
      // Fetch news
      axios
        .get(`https://min-api.cryptocompare.com/data/v2/news/?categories=${expandedCard.toUpperCase()}`)
        .then((response) => setNews(response.data.Data))
        .catch((error) => console.error('Error fetching news:', error));

      // Fetch chart data (example using CoinGecko)
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${expandedCard}/market_chart?vs_currency=usd&days=7`)
        .then((response) => setChartData(response.data.prices))
        .catch((error) => console.error('Error fetching chart data:', error));
    }
  }, [expandedCard]);

  // Automatically expand the card if it matches the search term
  useEffect(() => {
    if (search) {
      const matchedKey = Object.keys(data).find((key) => key.includes(search.toLowerCase()));
      if (matchedKey) {
        setExpandedCard(matchedKey);
      } else {
        setExpandedCard(null); // Collapse all cards if no match
      }
    } else {
      setExpandedCard(null); // Collapse all cards if search is empty
    }
  }, [search, data]);

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        style={{
          gridAutoFlow: 'row', // Ensure cards flow in rows
        }}
      >
        {Object.entries(data).map(([key, value]) => (
          <motion.div
            key={key}
            className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer ${
              expandedCard === key ? 'sm:col-span-3' : ''
            }`}
            style={{
              gridColumn: expandedCard === key ? '1 / -1' : 'auto', // Force full width on expansion
            }}
            whileHover={{ scale: expandedCard === key ? 1 : 1.05 }}
            whileTap={{ scale: expandedCard === key ? 1 : 0.95 }}
            onClick={() => setExpandedCard(expandedCard === key ? null : key)}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">
                {cryptoIcons[key] || <FaDollarSign className="text-gray-400" />}
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">{key.toUpperCase()}</p>
                <p className="text-sm text-gray-200">Cryptocurrency</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl font-bold text-white mt-3">
              ${value.usd.toLocaleString()}
            </p>

            {/* Expanded Card Content */}
            {expandedCard === key && (
              <div className="mt-4">
                {/* Chart */}
                {chartData.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Price Chart (7 Days)</h3>
                    <div className="h-40 bg-gray-700/50 rounded-lg p-2">
                      <PriceChart data={chartData} />
                    </div>
                  </div>
                )}

                {/* News */}
                {news.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Latest News</h3>
                    <div className="space-y-2">
                      {news.slice(0, 3).map((article) => (
                        <a
                          key={article.id}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-gray-700/50 rounded-lg p-2 hover:bg-gray-600/50 transition-all duration-300"
                        >
                          <p className="text-white">{article.title}</p>
                          <p className="text-sm text-gray-300">{article.source}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;