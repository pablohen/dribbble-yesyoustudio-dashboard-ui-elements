import React from 'react';

interface Props {
  children: any;
}

const Container = ({ children }: Props) => {
  return (
    <div className="p-2">
      <div className="border rounded-2xl bg-white p-8 w-full shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default Container;
