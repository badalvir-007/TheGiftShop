import React from "react";
import image1 from '../../assets/trendingimgs/trend1.jpg';
import image2 from '../../assets/trendingimgs/trend2.jpg';
import image3 from '../../assets/trendingimgs/trend3.webp';
import image4 from '../../assets/trendingimgs/trend.webp';
import image5 from '../../assets/trendingimgs/trend5.webp';
import TextSection from "../reuseablecode/TextSection";




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
    <div className="w-11/12">
      <div className="text-2xl mt-[60px]">
        <TextSection
        title="Trending Gifts"
        description="Handpicked for your gifting needs"
        />
        <div className="flex flex-row mt-2 max-w-screen-xl h-255px">
          {images.map((image, index) => (
            <div key={index} className="m-2 relative">
              <img
                src={image}
                alt='trending gift images'
                className="rounded-tl-lg rounded-tr-lg object-cover  rounded-b-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
