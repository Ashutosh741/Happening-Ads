import React from 'react'
import banner1 from '../images/banner2.png'
import banner2 from '../images/banner3.png'
import banner3 from '../images/banner4.png'
import banner4 from '../images/banner5.png'
import banner5 from '../images/banner6.png'
import banner6 from '../images/banner7.png'
import banner7 from '../images/banner8.png'
import banner8 from '../images/banner9.png'
import banner9 from '../images/banner10.png'
import Slider from 'react-slick'

const Banner = () => {
  const settings = {
    dots : true,
    speed : 500,
    slidesToShow : 3,
    slidesToScroll : 3,
    autoplay :true,
    infinite : true,    
  }
  return (
    <section className='banner mt-5'>
        <Slider {...settings}>
            <div className="banner-image p-1 border-0">
              <img src = {banner1} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner2} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner3} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner4} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner5} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner6} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner7} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner8} className='img-fluid w-100' />
            </div>
            <div className="banner-image p-1 border-0">
              <img src = {banner9} className='img-fluid w-100' />
            </div>

        </Slider>
    </section>
  )
}

export default Banner
