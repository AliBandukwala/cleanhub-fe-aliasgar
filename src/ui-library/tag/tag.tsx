import React from 'react';

interface TagProps {
  label?: string | null;
  text: string;
  color?: 'red' | 'green' | 'blue' | 'default';
}

const Tag: React.FC<TagProps> = ({ label, text, color='default' }) => {
  let bgColor = '';
  let textColor = '';

  switch (color) {
    case 'red':
      bgColor = 'bg-red-100';
      textColor = 'text-red-800';
      break;
    case 'green':
      bgColor = 'bg-green-100';
      textColor = 'text-green-800';
      break;
    case 'blue':
      bgColor = 'bg-blue-100';
      textColor = 'text-blue-800';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
      break;
  }

  return (
    <div className={`p-1 rounded ${bgColor}`}>
      {label && (
        <div className="text-xs mb-1" style={{ color: textColor }}>
          {label}
        </div>
      )}
      <div className={`text-sm ${textColor} font-bold`}>{text}</div>
    </div>
  );
};

export default Tag;
