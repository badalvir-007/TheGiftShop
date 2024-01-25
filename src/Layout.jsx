import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
   <div className='overflow-hidden'>
   <Navbar />
    <Outlet />
    <Footer />
   </div>
    </>
  )
}

export default Layout