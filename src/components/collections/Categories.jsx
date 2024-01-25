import React from "react";
import Personalised from "../../assets/Catgoriesimgs/catgories1.jpg";
import cakes from "../../assets/Catgoriesimgs/catgories2.webp";
import flowers from "../../assets/Catgoriesimgs/catgories3.webp";
import gourmet from "../../assets/Catgoriesimgs/catgories4.webp";
import plants from "../../assets/Catgoriesimgs/catgories5.webp";
import homeliving from "../../assets/Catgoriesimgs/catgories6.webp";
import jewellery from "../../assets/Catgoriesimgs/catgories7.webp";
import fashion from "../../assets/Catgoriesimgs/catgories8.jpg";
import TextSection from "../reuseablecode/TextSection";

const cardOfTwo = [
  {
    image: Personalised,
    title: "Personalised",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
  {
    image: cakes,
    title: "Cakes",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
];

const cardOfSix = [
  {
    image: flowers,
    title: "Flowers",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
  {
    image: gourmet,
    title: "Gourmet",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
  {
    image: plants,
    title: "Plants",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
  {
    image: homeliving,
    title: "Home & Living",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
  {
    image: jewellery,
    title: "Jewellery",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
  {
    image: fashion,
    title: "Fashion",
    choices: [
      "Home & Living",
      "Collectables",
      "Cushsions",
      "Carucitures",
      "Mugs",
    ],
  },
];

const Categories = () => {
  return (
    <div className="w-11/12 flex justify-center items-center mx-auto ">
      <div className=" flex flex-col justify-between p-4 cursor-pointer ">
      <TextSection 
      title="Categories"
      description="Wide range of gifts for your celebration"
      />

      <div className="flex flex-col w-1440px h-502px mt-8">
        <div className=" flex space-x-4">
          {cardOfTwo.map((card, index) => (
            <div
              key={index}
              className="flex flex-row border-solid border-2  space-x-4 p-1 border-gray-300 rounded-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-434px h-218px object-cover rounded-md "
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold mt-2">{card.title}</h1>
                <ul className="text-sm  text-gray-400">
                  {card.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex}>{choice}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1440px h-502px grid grid-cols-3 gap-4 mt-3">
          {cardOfSix.map((card, index) => (
            <div
              key={index}
              className="flex flex-row border-solid border-2  space-x-4 p-1 border-gray-300 rounded-md"
            >
              <div className="w-438px h-234px">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold mt-2">{card.title}</h1>
                <ul className="text-sm  text-gray-400">
                  {card.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex}>{choice}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categories;
