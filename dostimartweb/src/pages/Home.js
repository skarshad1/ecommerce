import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Slider1 from '../components/Slider1';
import LearnStyling from './LearnStyling';

const Home = () => {
  return (
    <>
    <Navbar />
    <Announcement />
    {/* <Slider /> */}
    {/* <LearnStyling /> */}
    <Slider1 />
    <Categories />
    <Products />
    </>
  );
}

export default Home;
