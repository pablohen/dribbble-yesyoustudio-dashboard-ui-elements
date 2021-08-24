import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid';
import React from 'react';
import CountUp from 'react-countup';

interface Props {
  title: string;
  value: number;
  percentage: number;
  unit?: string;
}

const MainStats = ({ title, value, percentage, unit }: Props) => {
  const formatNumber = (n: number) => {
    return n.toLocaleString();
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-gray-400 font-bold">{title}</span>
      <span className="text-3xl text-gray-800 font-extrabold">
        {
          <CountUp
            end={value}
            duration={1}
            decimals={2}
            formattingFn={formatNumber}
          />
        }
        {unit && ` ${unit}`}
      </span>

      {percentage >= 0 ? (
        <span className="flex items-center text-green-500 font-bold">
          <ArrowUpIcon className="h-6 rounded-full bg-green-200 p-1 mr-2 rotate-45" />{' '}
          +{' '}
          <CountUp
            end={percentage}
            duration={1}
            decimals={2}
            formattingFn={formatNumber}
          />
          %
        </span>
      ) : (
        <span className="flex items-center text-red-500 font-bold">
          <ArrowDownIcon className="h-6 rounded-full bg-red-200 p-1 mr-2 -rotate-45" />{' '}
          <CountUp
            end={percentage}
            duration={1}
            decimals={2}
            formattingFn={formatNumber}
          />
          %
        </span>
      )}
    </div>
  );
};

export default MainStats;
