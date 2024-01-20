import React from 'react';
import { useEffect,useState } from 'react';
import gI1 from '../assets/section2 images/sec2slide/secimg1.jpg';
import gI2 from '../assets/section2 images/sec2slide/secimg2.webp';
import gI3 from '../assets/section2 images/sec2slide/secimg3.webp';
import gI4 from '../assets/section2 images/sec2slide/secimg4.jpg';
import gI5 from '../assets/section2 images/sec2slide/secimg5.webp';
import gI6 from '../assets/section2 images/sec2slide/secimg6.webp';
import gI7 from '../assets/section2 images/sec2slide/secimg7.webp';
import gI8 from '../assets/section2 images/sec2slide/secimg8.webp';
import gI9 from '../assets/section2 images/sec2slide/secimg9.webp';
import gI10 from '../assets/section2 images/sec2slide/secimg10.webp';
import gI11 from '../assets/section2 images/sec2slide/secimg11.webp';
import gI12 from '../assets/section2 images/sec2slide/secimg12.webp';
import gI13 from '../assets/section2 images/sec2slide/secimg13.webp';

const imagesData = [
  { id: 1, imageUrl: gI1, title: 'Makar Sankranti' },
  { id: 2, imageUrl: gI2, title: 'Pongal' },
  { id: 3, imageUrl: gI3, title: 'Birthday Gifts' },
  { id: 4, imageUrl: gI4, title: 'Anniversary' },
  { id: 5, imageUrl: gI5, title: 'Festival Corporate Gifts' },
  { id: 6, imageUrl: gI6, title: 'Gourmet' },
  { id: 7, imageUrl: gI7, title: 'Fashoin and Lifestyle' },
  { id: 8, imageUrl: gI8, title: 'Jewellery ' },
  { id: 9, imageUrl: gI9, title: 'Home and Living' },
  { id: 10, imageUrl: gI10, title: 'New Arrival' },
  { id: 11, imageUrl: gI11, title: 'Disney Collection' },
  { id: 12, imageUrl: gI12, title: 'Marvel' },
  { id: 13, imageUrl: gI13, title: 'World' },
];


const SlideShow2 = () => {
  const [cursorX, setCursorX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        setCursorX(event.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex mb-4 max-w-screen-xl h-180 overflow-hidden relative">
      {imagesData.map((image, index) => (
        <div
          key={image.id}
          
          className="mx-2 transition-transform duration-500"
        >
          <div className="polaroid">
            <img src={image.imageUrl} alt={image.title} className="object-cover w-180 h-180" />
            <h3 className="text-black text-lg mt-2">{image.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideShow2;
