import React from 'react';
import Container from './Container';
import { CurrencyDollarIcon } from '@heroicons/react/solid';

interface Props {
  name: string;
  price: number;
}

const Plan = ({ name, price }: Props) => {
  return (
    <Container>
      <div className="space-y-4">
        <p className="font-bold text-lg">Choose a plan</p>
        <p className="text-sm text-gray-400">
          We make it simple. Pay as you go or make the yearly commitment and
          gain the most flexibility.
        </p>

        <div className="w-full bg-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <span className="bg-yellow-400 p-4 rounded-lg mr-4">
              <CurrencyDollarIcon className="h-16 text-white" />
            </span>
            <div className="flex flex-col space-y-1">
              <span className="font-bold text-xl">{name}</span>
              <span className="font-bold text-lg">
                ${price} <span className="text-gray-500 text-sm">/year</span>
              </span>
              <span className="text-yellow-500 font-bold">Update Plan</span>
            </div>
          </div>
        </div>

        <p className="font-bold text-lg">Plan details</p>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi
          dui, lobortis vel odio porta, viverra viverra metus. Vestibulum
          malesuada facilisis massa, sed tincidunt mi faucibus ac. Quisque quis
          dapibus quam. Donec cursus ultricies ultrices.
        </p>

        <button className="w-full p-2 rounded-xl border-4 border-green-600 bg-green-600 hover:bg-opacity-80 hover:shadow-xl text-white transform transition-all duration-300 ease-in-out">
          Add To Cart
        </button>
      </div>
    </Container>
  );
};

export default Plan;
