import React from 'react';
import gifticon from '../assets/section2 images/unique_gifts_igp_d_title.svg';

const UniqueGifts = () => {
  return (
    <div className="max-w-screen-xl h-100px ">
        <div className="mt-16 flex flex-row justify-center mb-7">
          <img className="w-52 h-24" src={gifticon} alt="gifticon" />

          <div className="flex flex-col">
            <h1 className="text-4xl">Unique Gifts Online</h1>
            <p className="text-2xl text-gray-500">
              Curated to make every special moment a celebration
            </p>
          </div>
        </div>
      </div>
  )
}

export default UniqueGifts