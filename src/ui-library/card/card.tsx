import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4">
      {children}
    </div>
  );
};

export default Card;
