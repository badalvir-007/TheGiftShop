import React from 'react';
import { FaTruck, FaPencilAlt,  FaBirthdayCake, FaCamera, FaMusic,  FaCartArrowDown } from 'react-icons/fa';
import { GiFlowers } from "react-icons/gi";
import { TbPlant } from "react-icons/tb";
const iconsData = [
  { icon: <FaTruck />, title: 'Truck Delivery' },
  { icon: <FaPencilAlt />, title: 'Pencil' },
  { icon: < FaBirthdayCake />, title: 'Cakes' },
  { icon: <GiFlowers />, title: 'Flowers' },
  { icon: <TbPlant />, title: 'Plant' },
  { icon: <FaCamera />, title: 'Camera' },
  { icon: <FaMusic />, title: 'Music' },
  { icon: < FaCartArrowDown />, title: 'Bulk and Cart' },
];

const IconBox = () => {
  return (
    <div className="w-11/12 flex justify-between items-center bg-gray-200 cursor-pointer p-4 border-b mt-4 border-gray-300">
      {iconsData.map((icon, index) => (
        <div key={index} className="text-center">
          
          {icon.icon}
          <span className="block  font-public-sans font-light">{icon.title}</span>
        </div>
      ))}
    </div>
  );
};

export default IconBox;

