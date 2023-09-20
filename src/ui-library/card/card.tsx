import React, { ReactNode } from 'react';

interface CardProps {
  onClick?: () => void,
  children: ReactNode,
}

const Card: React.FC<CardProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={`bg-white shadow-lg rounded-lg p-6 m-4 ${onClick ? 'cursor-pointer' : ''}`}>
      {children}
    </div>
  );
};

export default Card;
