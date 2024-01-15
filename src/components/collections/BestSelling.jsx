

// export default BestSelling;
import React, { useState } from 'react';
import cakeimg from '../../assets/bestselimgs/bestselling1.webp';
import { FaRupeeSign } from 'react-icons/fa';
import { GoChevronLeft } from "react-icons/go";
 import { GoChevronRight } from "react-icons/go";

const Card = ({ imageUrl, title, price, rating }) => {
  return (
    <div className="border p-4 m-4">
      <div  className="w-full h-auto">
        <img src={imageUrl} alt="Gift" />
        <p className="text-lg font-semibold mt-2">{title}</p>
      </div>
      <div className="flex items-center mt-2">
        <div>
          <FaRupeeSign />
        </div>
        <p className="ml-2">{price}</p>
      </div>
      <div className="mt-2">
        {/* You can add additional content or styling for the rating */}
        <p>{rating}</p>
      </div>
    </div>
  );
};

const BestSelling = () => {
  const cards = [
    {
      imageUrl: cakeimg,
      title: "Gift 1",
      price: "$20",
      rating: "4.5 stars",
    },
    // Add more card data as needed
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  const handleNext = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentPosition(
      (prevPosition) => (prevPosition - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="mt-[140px] relative">
      <div className="flex flex-col ">
        <h1 className="text-3xl">Best Selling Gifts</h1>
        <p className="text-sm">Packed with love</p>
      </div>

      <div className="flex items-center">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
          onClick={handlePrev}
        >
         <GoChevronLeft />
        </button>

        <div className="flex transition-transform ease-in-out duration-300 transform">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
