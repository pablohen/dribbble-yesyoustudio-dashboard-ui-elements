import React from 'react';
import Container from './Container';

interface Props {
  cardFlag: string;
  cardNumber: number;
}

const PaymentDetails = ({ cardFlag, cardNumber }: Props) => {
  return (
    <Container>
      <div className="w-full space-y-4">
        <span className="font-bold text-lg">Payment details</span>

        <div className="flex items-center justify-between space-x-2">
          <span className="border rounded px-4 py-2 bg-gray-50 text-gray-400 w-16">
            {cardFlag}
          </span>

          <div className="flex flex-col flex-grow items-center">
            <span className="font-bold">Credit card</span>
            <span className="text-sm text-gray-500">{cardNumber}</span>
          </div>

          <input
            type="text"
            className="flex-grow-0 border rounded px-4 py-2 bg-gray-200 text-gray-400 w-16 outline-none focus-within:shadow-inner focus-within:bg-gray-100"
            placeholder="CVC"
          />
        </div>
      </div>
    </Container>
  );
};

export default PaymentDetails;
