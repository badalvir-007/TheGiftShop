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

const Celebrate = () => {
  return (
    <div>
      <div className="mt-12 mb-6  ">
        <TextSection
        title="Celebrate Milestones"
        description="With our memorable gifts"
        />
        
        <div className="mt-4 flex flex-row">
          {/* {birthays gifts } */}
          <div className="flex flex-col w-[50%] h-[550px] space-x-2">
            <div className="flex flex-row items-center">
              <h1 className="mr-auto">BIRTHDAY GIFTS</h1>
              <p className="ml-auto">View All</p>
              <div className="border-b border-gray-600 mx-4"></div>
            </div>
            <div className="flex flex-row justify-between py-1 mt-4">
              <div className="flex flex-col space-y-4 space-x-4">
                <img src={Forher} alt="" />
                <img src={cakes} alt="" />
                <img src={personalised} alt="" />
              </div>
              <div className="flex flex-col space-y-4 space-x-4">
                <img src={flowers} alt="" />
                <img src={forhim} alt="" />
                <img src={plants} alt="" />
              </div>
            </div>
          </div>

          {/* {annivarasry gifts} */}
          <div className="flex flex-col w-[50%] h-[550px] space-x-2">
            <div className="flex flex-row items-center">
              <h1 className="mr-auto">Anniversary GIFTS</h1>
              <p className="ml-auto">View All</p>
              <div className="border-b border-gray-600 mx-4"></div>
            </div>
            <div className="flex flex-row justify-between py-1 mt-4">
              <div className="flex flex-col space-y-4 space-x-4">
                <img src={flowersA} alt="" />
                <img src={husbandA} alt="" />
                <img src={personalisedA} alt="" />
              </div>
              <div className="flex flex-col space-y-4 space-x-4">
                <img src={WifeA} alt="" />
                <img src={couplesA} alt="" />
                <img src={cakesA} alt="" />
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Celebrate;
