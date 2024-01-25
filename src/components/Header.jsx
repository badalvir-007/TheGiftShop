import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaPencilAlt, FaBirthdayCake, FaCamera, FaMusic, FaCartArrowDown } from 'react-icons/fa';
import { GiFlowers } from 'react-icons/gi';
import { TbPlant } from 'react-icons/tb';

const iconsData = [
  { icon: <FaTruck />, title: 'Truck Delivery', path: '/' },
  { icon: <FaPencilAlt />, title: 'Pencil', path: '/Pencil' },
  { icon: <FaBirthdayCake />, title: 'Cakes', path: '/Cakes' },
  { icon: <GiFlowers />, title: 'Flowers', path: '/Flower' },
  { icon: <TbPlant />, title: 'Plant', path: '/Plant' },
  { icon: <FaCamera />, title: 'Camera', path: '/Camera' },
  { icon: <FaMusic />, title: 'Music', path: '/Music' },
  { icon: <FaCartArrowDown />, title: 'Bulk and Cart', path: '/BulkCart' },
];

const IconBox = () => {
  return (
    <div className="w-11/12 flex justify-between items-center bg-gray-200 cursor-pointer p-4 border-b mt-4 border-gray-300">
      {iconsData.map((icon, index) => (
        <Link key={index} to={icon.path} className="text-center">
          <div>
            {icon.icon}
            <span className="block font-public-sans font-light">{icon.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default IconBox;
