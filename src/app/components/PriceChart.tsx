// src/components/PriceChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PriceChartProps {
  data: [number, number][]; // Array of [timestamp, price] pairs
}

const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(([timestamp]) => new Date(timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Price (USD)',
        data: data.map(([, price]) => price),
        borderColor: 'rgba(99, 102, 241, 1)', // Purple color
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PriceChart;