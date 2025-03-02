// src/components/SearchBar.tsx
import React from 'react';
import useSearchStore from '../store/searchStore';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SearchBar: React.FC = () => {
  const { search, setSearch } = useSearchStore();

  return (
    <motion.div
      className="relative w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FiSearch className="text-gray-400" />
      </div>
    </motion.div>
  );
};

export default SearchBar;