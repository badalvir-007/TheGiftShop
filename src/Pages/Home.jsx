import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SlideShow2 from '../components/Section2slid';
import Collection from '../components/Collection';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className=" bg-richblack-900 flex flex-col mx-auto ml-1 w-11/12 items-center">
        <Navbar />
        <Header />
        <Hero />
        <SlideShow2  />
        <Collection />
        <Footer />
      </div>
  )
}

export default Home;