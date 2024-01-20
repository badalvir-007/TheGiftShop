// ImageTagSection.js

import React from "react";

const ImageTagSection = ({ imageSrc, altText, tagText, height, width }) => {
  return (
    <div className="relative w-384 h-352 border border-gray-300 rounded-2xl overflow-hidden mb-2">
      <img src={imageSrc} alt={altText} style={{ height, width }} />
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-2" style={{ height: '40px' }}>
        {tagText}
      </div>
    </div>
  );
};

export default ImageTagSection;
