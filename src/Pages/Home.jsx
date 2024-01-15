import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Slideshow from '../components/Silde';
import SlideShow2 from '../components/Section2slid';
import Collection from '../components/Collection';

const Home = () => {
  return (
    <div className=" bg-richblack-900 flex flex-col mx-auto mx-1 ml-1 w-11/12 items-center">
        <Navbar />
        <Header />
        <Slideshow />
        <SlideShow2  />
        <Collection />
      </div>
  )
}

export default Home;