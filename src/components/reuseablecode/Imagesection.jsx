// ImageTagSection.js

import React from "react";

const ImageTagSection = ({ imageSrc, altText, tagText,  }) => {
  return (
    <div className="relative  border border-gray-300 rounded-2xl overflow-hidden mb-2">
      <img
        src={imageSrc}
        alt={altText}
       
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-2" >
        {tagText}
      </div>
    </div>
  );
};

export default ImageTagSection;
;
