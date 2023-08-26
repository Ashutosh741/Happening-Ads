import React from 'react'
import Slider from 'react-slick'
import rakhi1 from '../images/rakhi1.jpg'
import rakhi2 from '../images/rakhi2.png'
import rakhi3 from '../images/rakhi3.jpg'
import rakhi4 from '../images/rakhi4.png'
import rakhi5 from '../images/rakhi5.png'
import rakhi6 from '../images/rakhi6.png'
import rakhi7 from '../images/rakhi7.png'
import rakhi8 from '../images/rakhi8.jpg'


const RakhiGift = () => {
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
            <h1 className='fw-bold'>SUPER SAVER RAKHI GIFTS</h1>
        </div>
        <Slider {...settings}>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi1} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <div className=" catdeal_grab">GRAB DEAL</div>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi2} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi3} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi4} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi5} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi6} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi7} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {rakhi8} className='img-fluid w-100' />
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

export default RakhiGift
