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

import Carousel from '../Pages/Caraousel';
import ProductAd from '../Pages/ProductAd';
import Footwear from '../Pages/Footwear';
import FormalForMen from '../Pages/FormalForMen';
import Magician from '../Pages/Magician';
import Footer2 from '../Pages/Footer2';
import Deals from '../Pages/Deals';
import QuickBites from '../Pages/QuickBites';
import Banner from '../Pages/Banner';
import TopCategory from '../Pages/TopCategory';
import CashbackStores from '../Pages/CashbackStores';
import Strikes from '../Pages/Strikes';
import RakhiGift from '../Pages/RakhiGift';
import AmazonOffer from '../Pages/AmazonOffer';
import MyntraDeal from '../Pages/MyntraDeal';

const Home = () => {

  // const images2 = [Screen3, Screen3];

  return (
    <>
          {/* <TopHeader/> */}
          <Header/>
          <Carousel/>
          <TopCategory/>

           {/* <Saving/> */}
          <Banner/>
          <CashbackStores/>
          {/* <Strikes/> */}
          <RakhiGift/>
          {/* <QuickBites/> */}
          {/* <AmazonOffer/> */}

          <MyntraDeal/>
        <Deals/>

         {/* <Categories/> */}
         {/* <ProductAd/>
        <Footwear/>
        <FormalForMen/> */}
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

