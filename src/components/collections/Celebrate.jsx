import React from "react";
import Forher from "../../assets/celebreateimgs/birthdayimgs/bithday1.webp";
import cakes from "../../assets/celebreateimgs/birthdayimgs/bithday2.webp";
import personalised from "../../assets/celebreateimgs/birthdayimgs/bithday3.webp";
import flowers from "../../assets/celebreateimgs/birthdayimgs/bithday4.webp";
import forhim from "../../assets/celebreateimgs/birthdayimgs/bithday5.webp";
import plants from "../../assets/celebreateimgs/birthdayimgs/bithday6.webp";

import flowersA from "../../assets/celebreateimgs/anniversaryimgs/anniversary1.jpeg";
import husbandA from "../../assets/celebreateimgs/anniversaryimgs/anniversary2.jpg";
import personalisedA from "../../assets/celebreateimgs/anniversaryimgs/anniversary3.webp";
import WifeA from "../../assets/celebreateimgs/anniversaryimgs/anniversary4.webp";
import couplesA from "../../assets/celebreateimgs/anniversaryimgs/anniversary5.webp";
import cakesA from "../../assets/celebreateimgs/anniversaryimgs/anniversary6.webp";
import TextSection from "../reuseablecode/TextSection";


const ImageWithText = ({ src, alt, text }) => {
  return (
    <div className="relative  mb-4 border  space-y-4">
      <img src={src} alt={alt} className="w-full" />
      <p className="absolute bottom-0 left-0 right-0 text-center bg-transparent text-black p-2">{text}</p>
    </div>
  );
};

const ImageSection = ({ title, images }) => {
  return (
    <div className="flex flex-col w-[50%] h-[550px] space-x-2">
      <div className="flex flex-row items-center">
        <h1 className="mr-auto">{title}</h1>
        <p className="ml-auto">View All</p>
        <div className="border-b border-gray-600 mx-4"></div>
      </div>
      <div className="flex flex-col  justify-between py-1 mt-4">
        {images.map((image, index) => (
          <ImageWithText key={index} src={image.src} alt={image.alt} text={image.text} />
        ))}
      </div>
    </div>
  );
};

const Celebrate = () => {
  const birthdayImagesA = [
    { src: Forher, alt: 'For Her', text: 'FOR HER' },
    { src: cakes, alt: 'Cakes', text: 'CAKES' },
    { src: personalised, alt: 'Personalised', text: 'PERSONALISED' },
  ];

  const birthdayImagesB = [
    { src: flowers, alt: 'Flowers', text: 'FLOWERS' },
    { src: forhim, alt: 'For Him', text: 'FOR HIM' },
    { src: plants, alt: 'Plants', text: 'PLANTS' },
  ];

  const anniversaryImagesA = [
    { src: flowersA, alt: 'Flowers', text: 'FLOWERS' },
    { src: husbandA, alt: 'Husband', text: 'HUSBAND' },
    { src: personalisedA, alt: 'Personalised', text: 'PERSONALISED' },
  ];

  const anniversaryImagesB = [
    { src: WifeA, alt: 'Wife', text: 'WIFE' },
    { src: couplesA, alt: 'Couples', text: 'COUPLES' },
    { src: cakesA, alt: 'Cakes', text: 'CAKES' },
  ];

  return (
    <div className="w-11/12 flex justify-center items-center mx-auto">
      <div className="mt-12 mb-6">
        <TextSection
          title="Celebrate Milestones"
          description="With our memorable gifts"
        />
        
        <div className="mt-4 flex flex-row">
          {/* Birthdays gifts */}
          <ImageSection title="BIRTHDAY GIFTS" images={birthdayImagesA} />
          <ImageSection title="BIRTHDAY GIFTS" images={birthdayImagesB} />

          {/* Anniversary gifts */}
          <ImageSection title="ANNIVERSARY GIFTS" images={anniversaryImagesA} />
          <ImageSection title="ANNIVERSARY GIFTS" images={anniversaryImagesB} />
        </div>
      </div>
    </div>
  );
};

export default Celebrate;
