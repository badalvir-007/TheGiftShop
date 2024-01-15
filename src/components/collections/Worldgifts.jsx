// Worldgifts.js

import React from 'react';
import ImageTagSection from '../reuseablecode/Imagesection'; // Update the path accordingly
// Worldgifts.js
 // Update the path accordingly

import usa from '../../assets/countryimg/usa.webp';
import canada from '../../assets/countryimg/canada.webp';
import austrila from '../../assets/countryimg/austrila.webp';
import uk from '../../assets/countryimg/uk.webp';
import germany from '../../assets/countryimg/germany.jpg';
import uae from '../../assets/countryimg/uae.webp';
import singapore from '../../assets/countryimg/singspore.webp';
import newzealand from '../../assets/countryimg/newzealand.jpg';
import netherland from '../../assets/countryimg/netherlands.jpg';
import other from '../../assets/countryimg/othercountries.webp';

const Worldgifts = () => {
  const countries = [
    { image: usa, countryName: "USA" },
    { image: canada, countryName: "Canada" },
    { image: austrila, countryName: "Australia" },
    { image: uk, countryName: "UK" },
    { image: germany, countryName: "Germany" },
    { image: uae, countryName: "UAE" },
    { image: singapore, countryName: "Singapore" },
    { image: newzealand, countryName: "New Zealand" },
    { image: netherland, countryName: "Netherlands" },
    { image: other, countryName: "Other Countries" },
  ];

  return (
    <div className='mt-12 mr-4 '>
      <div >
        <h1 className='text-4xl'>Send Gifts World Wide</h1>
        <p>A gift to every part of the world</p>
      </div>

      <div className='grid grid-cols-5 grid-rows-2 gap-4'>
        {countries.map((element, index) => (
          <div
            key={index}
            className="w-270 h-202 relative border-cyan-200 bg-gray-100 rounded-lg"
          >
            <ImageTagSection
              imageSrc={element.image}
              altText={element.countryName}
              tagText={element.countryName}
              height="136px"
            />
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Worldgifts;