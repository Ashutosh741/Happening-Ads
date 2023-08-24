import React from 'react'
import Header from '../Pages/Header';
import TopHeader from '../Pages/TopHeader';
import Caraousel from '../Pages/Caraousel';
import Saving from '../Pages/Saving';
import Categories from '../Pages/Categories';
import FreeOnCode from '../Pages/FreeOnCode';
import TopBrands from '../Pages/TopBrands';
import HealthFitness from '../Pages/HealthFitness';
import Sale from '../Pages/Sale';
import Footer from '../Pages/Footer';
import Screen1 from '../images/Rectangle 199.png'
import Screen2 from '../images/Rectangle 199.png'
import Screen3 from '../images/Rectangle 227.png'
import Carousel from '../Pages/Caraousel';
import ProductAd from '../Pages/ProductAd';
import Footwear from '../Pages/Footwear';
import FormalForMen from '../Pages/FormalForMen';
import Magician from '../Pages/Magician';
import Footer2 from '../Pages/Footer2';

const Home = () => {
  const images = [Screen1, Screen2];

  const images2 = [Screen3, Screen3];

  return (
    <>
          {/* <TopHeader/> */}
          <Header/>
          <Carousel Screen={images} /> {/* Use the correct prop name 'Screen' */}
           {/* <Saving/> */}
         <Categories/>
         <ProductAd/>
        <Footwear/>
        <FormalForMen/>
        <Magician/>
        <Footer2/>   
         {/* <FreeOnCode/>
          <TopBrands/>
          <Caraousel Screen={images2}/>
          <HealthFitness/>
          <Sale/>
          <Footer/> */}
    </>
  )
}

export default Home

