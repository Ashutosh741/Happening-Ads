import React from 'react'
import Slider from 'react-slick'
import amazon1 from '../images/amazon1.png'
import amazon2 from '../images/amazon2.png'
import amazon3 from '../images/amazon3.png'
import amazon4 from '../images/amazon4.png'
import amazon5 from '../images/amazon5.png'
import amazon6 from '../images/amazon6.png'
import amazon7 from '../images/amazon9.png'
import amazon8 from '../images/amazon8.png'

const AmazonOffer = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        slidesToScroll : 4,
        infinite : true,

        // autoplay:  true,

    }
  return (
    <section className='strikes'>
        <div className="heading d-flex justify-content-start mt-5 ms-3 mb-3">
            <h1 className='fw-bold'>HAPPENING ADS - TOP OFFERS</h1>
        </div>
        <Slider {...settings}>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon1} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <div className=" catdeal_grab">GRAB DEAL</div>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon2} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon3} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon4} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon5} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon6} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon7} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {amazon8} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
        </Slider>
    </section>
  )
}

export default AmazonOffer
