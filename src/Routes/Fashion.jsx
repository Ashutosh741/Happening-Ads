import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Header from '../Pages/Header'
import TopHeader from '../Pages/TopHeader'
import Categories from '../Pages/Categories'
import FashionCategory from '../Pages/FashionCategory'
import TopBrands from '../Pages/TopBrands'
import AdSale from '../Pages/AdSale'
import SeasonItems from '../Pages/SeasonItems'
import ProductAd from '../Pages/ProductAd'
import Footwear from '../Pages/Footwear'
import FormalForMen from '../Pages/FormalForMen'
import Footer from '../Pages/Footer'

const Fashion = () => {
  return (
    
                    <>
                    <TopHeader/>
                    <Header/>
                    <FashionCategory/>
                     <TopBrands/>
                    <AdSale/>
                    <SeasonItems/>
                    <ProductAd/>
                    <Footwear/>
                    <FormalForMen/>
                    <Footer/>
                    </>
                
   
  )
}

export default Fashion
