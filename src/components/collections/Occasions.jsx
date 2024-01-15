import React from "react";
import birthday from "../../assets/Occasionsimgs/occasions1.webp";
import babyShower from "../../assets/Occasionsimgs/occasions2.webp";
import wedding from "../../assets/Occasionsimgs/occasions3.webp";
import housewarming from "../../assets/Occasionsimgs/occasions4.webp";
import anniversary from "../../assets/Occasionsimgs/occasions5.webp";
import bestWishes from "../../assets/Occasionsimgs/occasions6.jpg";
import ImageTagSection from "../reuseablecode/Imagesection";

const Occasions = () => {
  const imageTagData = [
    { src: birthday, alt: 'Birthday', tag: 'Birthday', height: '350px' },
    { src: wedding, alt: 'Wedding', tag: 'Wedding', height: '350px' },
    { src: anniversary, alt: 'Anniversary', tag: 'Anniversary', height: '350px' },
    { src: babyShower, alt: 'Baby Shower', tag: 'Baby Shower', height: '216px' },
    
    { src: housewarming, alt: 'House Warming', tag: 'House Warming', height: '216px' },
    
    { src: bestWishes, alt: 'Best Wishes', tag: 'Best Wishes', height: '216px' },
    // Add more data as needed
  ];
  return (
    <div className="w-11/12 flex flex-col justify-center mt-4 ml-4 ">
      <div className="flex flex-col">
        {/* {heading and subheading} */}
        <h1 className="text-2xl ">Occasions</h1>
        <p>Celebrate each occasion with a gift that has a lasting imperssion</p>
      </div>
      <div className="flex flex-row">
        {/* {images} */}
        <div className="grid grid-cols-3 gap-6">
        {imageTagData.map((data, index) => (
          <ImageTagSection
            key={index}
            imageSrc={data.src}
            altText={data.alt}
            tagText={data.tag}
            height={data.height}
          />
        ))}
      </div>
        {/* {explore more } */}
        <div className="w-12 h-[calc(33.83vw + 16px)] ml-auto relative flex flex-col items-center justify-between">
          <div className="border-t h-[calc(33.83vw + 16px)]"></div>
          <div className="text-center text-4xl">Explore More</div>
          <div className="border-t h-[calc(50% - 69px)]  bg-gradient-to-b from-lineToblue to-rgba-203-213-225-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Occasions;
