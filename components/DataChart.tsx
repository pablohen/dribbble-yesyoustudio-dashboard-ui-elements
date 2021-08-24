import React from 'react';
import Container from './Container';
import MainStats from './MainStats';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { Line } from 'react-chartjs-2';

interface Props {
  title: string;
  value: number;
  percentage: number;
  unit?: string;
  chartData: any;
}

const DataChart = ({ title, value, percentage, unit, chartData }: Props) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <Container>
      <div className="flex justify-between items-start w-full">
        <MainStats
          title={title}
          value={value}
          percentage={percentage}
          unit={unit}
        />

        <DotsHorizontalIcon className="h-6 p-1 text-gray-500 bg-gray-100 hover:bg-gray-50 rounded-full border transform transition-all duration-300 ease-in-out" />
      </div>

      <div className="h-2/4">
        <Line data={chartData} options={options} />
      </div>
    </Container>
  );
};

export default DataChart;
