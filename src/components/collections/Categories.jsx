import React from "react";
import Personalised from "../../assets/Catgoriesimgs/catgories1.jpg";
import cakes from "../../assets/Catgoriesimgs/catgories2.webp";
import flowers from "../../assets/Catgoriesimgs/catgories3.webp";
import gourmet from "../../assets/Catgoriesimgs/catgories4.webp";
import plants from "../../assets/Catgoriesimgs/catgories5.webp";
import homeliving from "../../assets/Catgoriesimgs/catgories6.webp";
import jewellery from "../../assets/Catgoriesimgs/catgories7.webp";
import fashion from "../../assets/Catgoriesimgs/catgories8.jpg";

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
    title: "Category 2",
    choices: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3",
      "Subcategory 4",
      "Subcategory 5",
    ],
  },
];

const cardOfSix = [
  {
    image: flowers,
    title: "Category 3",
    choices: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3",
      "Subcategory 4",
      "Subcategory 5",
    ],
  },
  {
    image: gourmet,
    title: "Category 4",
    choices: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3",
      "Subcategory 4",
      "Subcategory 5",
    ],
  },
  {
    image: plants,
    title: "Category 5",
    choices: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3",
      "Subcategory 4",
      "Subcategory 5",
    ],
  },
  {
    image: homeliving,
    title: "Category 6",
    choices: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3",
      "Subcategory 4",
      "Subcategory 5",
    ],
  },
  {
    image: jewellery,
    title: "Category 7",
    choices: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3",
      "Subcategory 4",
      "Subcategory 5",
    ],
  },
  {
    image: fashion,
    title: "Category 8",
    choices: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3",
      "Subcategory 4",
      "Subcategory 5",
    ],
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="flex flex-col">
        <h1 className="text-3xl">Categories</h1>
        <p>Wide range of gifts for your celebration</p>
      </div>

      <div className="flex flex-col">
        <div className="flex space-x-4 ">
          {cardOfTwo.map((card, index) => (
            <div key={index} className="flex flex-row border-solid border-2 border-indigo-600 space-x-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold mt-2">{card.title}</h1>
                <ul>
                  {card.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex}>{choice}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-3">
          {cardOfSix.map((card, index) => (
            <div key={index} className="flex flex-row border-solid border-2 border-indigo-600 space-x-4">
              <div className="w-[412px] h=[160px] ">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto"
              />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold mt-2">{card.title}</h1>
                <ul>
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
  );
};

export default Categories;
