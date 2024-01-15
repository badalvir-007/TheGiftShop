import React from "react";
import image1 from '../../assets/trendingimgs/trend1.jpg';
import image2 from '../../assets/trendingimgs/trend2.jpg';
import image3 from '../../assets/trendingimgs/trend3.webp';
import image4 from '../../assets/trendingimgs/trend.webp';
import image5 from '../../assets/trendingimgs/trend5.webp';




const Trending = () => {

    const images = [
        // array of image URLs
        image1,
        image2,
        image3,
        image4,
    image5,
      ];
  return (
    <div>
      <div className="text-2xl mt-[60px]">
        <h1>Trending Gifts</h1>
        <p>Hnadpicked for your gifting needs</p>

        <div className="flex flex-row mt-2">
          {images.map((image, index) => (
            <div key={index} className="m-2 relative">
              <img
                src={image}
                alt='trending gift images'
                className="rounded-tl-lg rounded-tr-lg object-cover w-32 h-32"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
