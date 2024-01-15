// ImageTagSection.js

import React from 'react';

const ImageTagSection = ({ imageSrc, altText, tagText, height }) => {
  return (
    <div className="relative w-[385px] h-[height] border-cyan-200">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={imageSrc}
        alt={altText}
      />
      <p className="text-sm text-center text-black p-2">{tagText}</p>
    </div>
  );
};

export default ImageTagSection;
