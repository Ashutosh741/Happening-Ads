import React from 'react'
import Header from '../Pages/Header'
import TopHeader from '../Pages/TopHeader'
import Footer from '../Pages/Footer'
import FormalForMen from '../Pages/FormalForMen'
import ProductAd from '../Pages/ProductAd'
import SeasonItems from '../Pages/SeasonItems'
import { Carousel } from 'react-responsive-carousel'
import PharmEasy from '../images/Rectangle 255.png'

const Fashion2 = () => {
    const images = [PharmEasy,PharmEasy]
  return (
    <div>
      <TopHeader/>
      <Header/>
      <SeasonItems heading = "Online Offers For Your Health & Fitnesss" slides = "6" scroll = "1"/>
        <Carousel Screen = {images}/>
      <SeasonItems heading = "Top Rated Pharmacies" slides = "6" scroll = "1"/>
      <ProductAd/>

      <FormalForMen/>
      <Footer/>

    </div>
  )
}

export default Fashion2
