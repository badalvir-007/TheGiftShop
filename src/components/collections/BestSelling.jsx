import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import cakeimg from "../../assets/bestselimgs/bestselling1.webp";
import flowersimg from "../../assets/bestselimgs/bestselling2.jpg";
import moonimg from "../../assets/bestselimgs/bestselling3.webp";
import cupimg from "../../assets/bestselimgs/bestselling4.webp";
import initialimg from "../../assets/bestselimgs/bestselling5.jpg";
import rosyimg from "../../assets/bestselimgs/bestselling6.webp";
import notesimg from "../../assets/bestselimgs/bestselling7.webp";
import frameimg from "../../assets/bestselimgs/bestselling8.webp";
import TextSection from "../reuseablecode/TextSection";

const Card = ({ imageUrl, title, price, rating }) => {
  return (
    <div className="border rounded-xl p-4 m-4">
      <div className="w-full h-2/3 flex flex-col">
        <img
          src={imageUrl}
          alt="Gift"
          className="w-full h-full object-cover rounded-t-lg"
        />
        <h1 className="text-lg font-semibold mt-2  text-gray-500">{title}</h1>
      </div>
      <div className="flex items-center mt-8">
        <div>
          <FaRupeeSign />
        </div>
        <p className="ml-2 ">{price}</p>
      </div>
      <div className="mt-4">
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

  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 4 + cards.length) % cards.length
  //   );
  // };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % cards.length);
  };

  return (
    <div className="w-11/12  justify-center items-center mx-auto mt-[150px]">
      <TextSection title="Best Selling Gifts" description="Packed with love" />
      <div className="relative w-363px h-466px mx-auto mt-4 overflow-hidden border rounded-lg ">
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
    onClick={handlePrev}
  >
    <GoChevronLeft className="text-4xl text-gray-700" />
  </button>

  <div
  className="flex transition-transform ml-8 ease-in-out duration-300 transform"
  style={{ transform: `translateX(-${(currentIndex % cards.length) * 25}%)` }}
>
  {Array.from({ length: 2 }, (_, i) => i * cards.length).map((offset) => (
    cards.slice(currentIndex + offset, currentIndex + offset + 4).map((card, index) => (
      <Card key={index} {...card} />
    ))
  ))}
</div>


  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
    onClick={handleNext}
  >
    <GoChevronRight className="text-3xl text-gray-700" />
  </button>
</div>

    </div>
  );
};

export default BestSelling;
