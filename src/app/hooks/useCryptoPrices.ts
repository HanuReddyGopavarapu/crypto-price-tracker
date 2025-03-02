// src/hooks/useCryptoPrices.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface CryptoData {
  [key: string]: { usd: number };
}

const fetchCryptoPrices = async (): Promise<CryptoData> => {
  const { data } = await axios.get<CryptoData>(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,dogecoin,ripple&vs_currencies=usd'
  );
  return data;
};

const useCryptoPrices = () => {
  return useQuery<CryptoData, Error>({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 60000, // Cache data for 1 minute
  });
};

export default useCryptoPrices;