import React, { useState, useEffect } from 'react';
import sildeimg from '../assets/sildeimages/sildeimage1.webp'; // Import your images
import sildeimg2 from '../assets/sildeimages/sildeimage2.webp';
import sildeimg3 from '../assets/sildeimages/sildeimage3.webp';
import sildeimg4 from '../assets/sildeimages/sildeimage4.webp';
import sildeimg5 from '../assets/sildeimages/sildeimage5.webp';
import sildeimg6 from '../assets/sildeimages/sildeimage6.webp';
import sildeimg7 from '../assets/sildeimages/sildeimage7.webp';


import gifticon from '../assets/section2 images/unique_gifts_igp_d_title.svg';
const Hero = () => {
  const images = [sildeimg, sildeimg2, sildeimg3, sildeimg4, sildeimg5, sildeimg6, sildeimg7];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current image index
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
   <div className='w-11/12'>
    {/* {section 1 silde show} */}
    <div className="relative mt-4 cursor-pointer">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="w-full h-auto" />

      <div className="absolute  bottom-4 left-0 right-0 flex justify-center ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === currentImage ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>

    {/* {section 2 gifts and sildeshow} */}

    <div>
            <div className=' bg-grey mt-16 flex flex-row justify-center mb-7 sm:w-671 md:h-100   '>
                <img className='w-24 h-28' src={gifticon} alt='gifticon'  />
                
                <div className='flex flex-col '>
                <h1>Unique Gifts Online</h1>
                <p>Curated to make every special moment a celebration</p>
                </div>
            </div>
    </div>

    
   

   </div>
  );
};

export default Hero;
