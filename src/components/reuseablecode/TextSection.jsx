// BestSellingGiftsComponent.jsx

import React from 'react';

const TextSection = ({ title, description }) => {
  return (
    <div className="mt-140px relative text-center">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl text-gray-800 font-bold hover:text-gray-300">{title}</h1>
        <p className="text-sm text-gray-500"> {description}</p>
      </div>
    </div>
  );
};

export default TextSection;
