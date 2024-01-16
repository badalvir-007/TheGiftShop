// CustomerStoriesSlider.js

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight,FaQuoteRight,FaStar,FaQuoteLeft  } from 'react-icons/fa';
import cake from '../../assets/Catgoriesimgs/catgories1.jpg';
const stories = [
  {
    id: 1,
    image: cake,
    stars: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personName: 'John Doe',
  },
  {
    id: 2,
    image: cake,
    stars: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personName: 'John Doe',
  },
  {
    id: 3,
    image: cake,
    stars: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personName: 'John Doe',
  },
  {
    id: 4,
    image: cake,
    stars: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personName: 'John Doe',
  },
  {
    id: 5,
    image: cake,
    stars: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personName: 'John Doe',
  },
  {
    id: 6,
    image: cake,
    stars: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personName: 'John Doe',
  },
  {
    id: 7,
    image: cake,
    stars: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personName: 'John Doe',
  }
];

const CustomerStoriesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <div className="mt-8 ">
      <div className="flex flex-col items-start justify-between">
        <h1 className="text-3xl font-bold">Customer Stories</h1>
        <p className="text-gray-600">Rated 4.8 / 5 based on 278161 ratings</p>
      </div>

      <div className="relative mt-4">
        <div className="flex space-x-4 overflow-hidden">
          {stories.slice(currentIndex, currentIndex + 3).map((story) => (
            <div key={story.id} className="flex-none w-1/3">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={story.image} alt={`Customer ${story.id}`} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <div className="flex items-center mb-2">
                  {[...Array(story.stars)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>
                <div className="mb-4">
                  <FaQuoteLeft className="text-xl text-gray-500 mr-2" />
                  <p className="text-sm text-gray-600">{story.review}</p>
                  <FaQuoteRight className="text-xl text-gray-500 ml-2" />
                </div>
                <p className="text-sm font-semibold">{story.personName}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none">
          <FaChevronLeft className="text-2xl text-gray-500" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none">
          <FaChevronRight className="text-2xl text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default CustomerStoriesSlider;
