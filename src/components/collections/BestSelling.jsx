import React, { useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import cakeimg from '../../assets/bestselimgs/bestselling1.webp';
import flowersimg from '../../assets/bestselimgs/bestselling1.webp';
import moonimg from '../../assets/bestselimgs/bestselling1.webp';
import cupimg from '../../assets/bestselimgs/bestselling1.webp';
import initialimg from '../../assets/bestselimgs/bestselling1.webp';
import rosyimg from '../../assets/bestselimgs/bestselling1.webp';
import notesimg from '../../assets/bestselimgs/bestselling1.webp';
import frameimg from '../../assets/bestselimgs/bestselling1.webp';

const Card = ({ imageUrl, title, price, rating }) => {
  return (
    <div className="border p-4 m-4">
      <div className="w-full h-2/3">
        <img src={imageUrl} alt="Gift" className="w-full h-full object-cover rounded-t-lg" />
        <div className="p-4 border-t border-gray-300">
          <h1 className="text-lg font-semibold">{title}</h1>
          {/* Additional content goes here */}
        </div>
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
      title: "Luscious Ganache",
      price: "745",
      rating: "4.5 stars",
    },
    {
      imageUrl: flowersimg,
      title: "Splendid Moments",
      price: "1545",
      rating: "4.7 stars",
    },
    {
      imageUrl: moonimg,
      title: "Love in the Moonlight",
      price: "2645",
      rating: "4.2 stars",
    },
    {
      imageUrl: cupimg,
      title: "Signature Style",
      price: "495",
      rating: "4.8 stars",
    },
    {
      imageUrl: initialimg,
      title: "3D Initial ",
      price: "525",
      rating: "4.5 stars",
    },
    {
      imageUrl: rosyimg,
      title: "Rosy Fantasy",
      price: "995",
      rating: "4.4 stars",
    },
    {
      imageUrl: notesimg,
      title: "My Personailsed",
      price: "1495",
      rating: "5 stars",
    },
    {
      imageUrl: frameimg,
      title: "Bride and Groom",
      price: "645",
      rating: "3.5 stars",
    },
  
    // Add more card data as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="mt-[140px] relative">
      <div className="flex flex-col">
        <h1 className="text-3xl">Best Selling Gifts</h1>
        <p className="text-sm">Packed with love</p>
      </div>

      <div className="relative w-363px h-466px mx-auto mt-4 overflow-hidden border rounded-lg">
        <button
          className="absolute left-0 top-1/2  transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <GoChevronLeft className="text-3xl text-gray-700" />
        </button>

        <div className="flex transition-transform ease-in-out duration-300 transform" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <GoChevronRight className="text-3xl text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default BestSelling;

