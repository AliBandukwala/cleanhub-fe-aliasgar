import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress value as a percentage (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex flex-wrap justify-center flex-col">
      <div className="bg-gray-300 rounded-full h-3 overflow-hidden relative w-full">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-full w-full absolute"
          style={{
            left: progress - 100 + "%",
            transition: "3s"
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
