import React from 'react'
import Slider from 'react-slick'
import strike1 from '../images/strikes1.jpg'
import strike2 from '../images/strikes2.jpg'
import strike3 from '../images/strikes3.jpg'
import strike4 from '../images/strikes4.jpg'
import strike5 from '../images/strikes5.jpg'
import strike6 from '../images/strikes6.jpg'
import strike7 from '../images/strikes7.jpg'
import strike8 from '../images/strikes8.jpg'
import strike9 from '../images/strikes9.jpg'
import strike10 from '../images/strikes10.png'
import strike11 from '../images/strikes11.jpg'
import strike12 from '../images/strikes12.png'


const Strikes = () => {
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
            <h1 className='fw-bold'>LIGHTNING STRIKES DAILY</h1>
        </div>
        <Slider {...settings}>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike1} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <div className=" catdeal_grab">GRAB DEAL</div>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike2} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike3} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike4} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike5} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike6} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike7} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike8} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike9} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike10} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike11} className='img-fluid w-100' />
                </div>
                <div className="catdeal_bottom">
                    <div className="catdeal_timer">00 : 03 : 45</div>
                    <button className="btn catdeal_grab">GRAB DEAL</button>
                </div>
                
            </div>
            <div className="catdeal">
                <div className="catDealImage">
                    <img src = {strike12} className='img-fluid w-100' />
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

export default Strikes
