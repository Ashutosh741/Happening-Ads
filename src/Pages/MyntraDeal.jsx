import React from 'react'
import Slider from 'react-slick'
import myntra1 from '../images/myntra1.png'
import myntra2 from '../images/myntra2.png'
import myntra3 from '../images/myntra3.png'
import myntra4 from '../images/myntra4.png'
import myntra5 from '../images/myntra5.png'
import myntra6 from '../images/myntra6.png'
import myntra7 from '../images/myntra7.png'
import myntra8 from '../images/myntra8.png'

const MyntraDeal = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        slidesToScroll : 4,
        infinite : true,
        responsive:[
            {
                breakpoint : 1200,
                settings :{
                    slidesToShow : 2,
                    slidesToScroll : 1
                },
            },
            {
                breakpoint : 1008,
                settings:{
                    slidesToScroll : 1,
                    slidesToShow : 1,
                }
            },
            {
                breakpoint : 800,
                settings:{
                    slidesToScroll : 1,
                    slidesToShow : 1,
                }
            }
        ]

        // autoplay:  true,

    }
  return (
    <section className='strikes'>
        <div className="heading d-flex justify-content-start ms-3">
            <h1 className='fw-bold'>MYNTRA - TOP DEALS</h1>
        </div>
        <Slider {...settings}>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra1} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <div className=" catdeal_grab">GRAB DEAL</div>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra2} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra3} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra4} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra5} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra6} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra7} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {myntra8} className='img-fluid w-100' />
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

export default MyntraDeal
