import React from 'react';
import { FaTruck, FaHeart, FaStar, FaHome, FaEnvelope, FaCamera, FaMusic, FaMoneyBill } from 'react-icons/fa';

const iconsData = [
  { icon: <FaTruck />, title: 'Truck Delivery' },
  { icon: <FaHeart />, title: 'Favorite' },
  { icon: <FaStar />, title: 'Star' },
  { icon: <FaHome />, title: 'Home' },
  { icon: <FaEnvelope />, title: 'Envelope' },
  { icon: <FaCamera />, title: 'Camera' },
  { icon: <FaMusic />, title: 'Music' },
  { icon: <FaMoneyBill />, title: 'Money Bill' },
];

const IconBox = () => {
  return (
    <div className="w-11/12 flex justify-between items-center bg-gray-200 p-4 border-b mt-4 border-gray-300">
      {iconsData.map((icon, index) => (
        <div key={index} className="text-center">
          
          {icon.icon}
          <span className="block">{icon.title}</span>
        </div>
      ))}
    </div>
  );
};

export default IconBox;

