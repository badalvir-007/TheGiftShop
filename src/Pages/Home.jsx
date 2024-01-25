import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SlideShow2 from '../components/Section2slid';
import Collection from '../components/Collection';


const Home = () => {
  return (
    <div className="   flex flex-col mx-auto ml-1 w-11/12 items-center">
        
        <Header />
        <Hero />
        <SlideShow2  />
        <Collection />
        
      </div>
  )
}

export default Home;