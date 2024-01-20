import React from "react";
import birthday from "../../assets/Occasionsimgs/occasions1.webp";
import babyShower from "../../assets/Occasionsimgs/occasions2.webp";
import wedding from "../../assets/Occasionsimgs/occasions3.webp";
import housewarming from "../../assets/Occasionsimgs/occasions4.webp";
import anniversary from "../../assets/Occasionsimgs/occasions5.webp";
import bestWishes from "../../assets/Occasionsimgs/occasions6.jpg";
import ImageTagSection from "../reuseablecode/Imagesection";
import TextSection from "../reuseablecode/TextSection";

const Occasions = () => {
  const imageTagData = [
    { src: birthday, alt: "Birthday", tag: "Birthday", height: "350px" },
    { src: wedding, alt: "Wedding", tag: "Wedding", height: "350px" },
    {
      src: anniversary,
      alt: "Anniversary",
      tag: "Anniversary",
      height: "350px",
    },
    {
      src: babyShower,
      alt: "Baby Shower",
      tag: "Baby Shower",
      height: "216px",
    },

    {
      src: housewarming,
      alt: "House Warming",
      tag: "House Warming",
      height: "216px",
    },

    {
      src: bestWishes,
      alt: "Best Wishes",
      tag: "Best Wishes",
      height: "216px",
    },
    // Add more data as needed
  ];
  return (
    <div className="w-11/12 max-w-maxContent flex justify-center items-center mx-auto ">
      <div className="w-11/12 flex flex-col justify-center mt-4 ml-4 ">
        <TextSection
          title="Occasions"
          description="Celebrate each occasion with a gift that has a lasting imperssion"
        />

        <div className="flex flex-row mt-7">
          {/* {images} */}
          <div className="grid grid-cols-3 gap-6  ">
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
          <div className="ml-4 relative flex flex-col items-center justify-between">
            <div className="border-l h-full"></div>
            <div className="text-center text-4xl">Explore More</div>
            <div className="border-l h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Occasions;
