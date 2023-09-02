import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import cashback1 from '../images/cashback1.png'
import cashback2 from '../images/cashback2.png'
import cashback3 from '../images/cashback3.png'
import cashback4 from '../images/cashback3.png'
import cashback5 from '../images/cashback4.png'
import cashback6 from '../images/cashback5.png'
import cashback7 from '../images/cashback7.jpg'
import cashback8 from '../images/cashback8.png'
import cashback9 from '../images/cashback9.jpg'
import cashback10 from '../images/cashback10.png'
import cashback11 from '../images/cashback11.jpg'
import cashback12 from '../images/cashback12.png'
import cashback13 from '../images/cashback13.png'
import cashback14 from '../images/cashback14.png'
import cashback15 from '../images/cashback15.jpg'
import cashback16 from '../images/cashback16.png'
import cashback17 from '../images/cashback17.png'
import cashback18 from '../images/cashback18.png'
import cashback19 from '../images/cashback19.png'


const CashbackStores = () => {
    const settings = {
        // className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 5,
        sliedsToScroll : 5,
        speed: 500,
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
        // rows: 2,
        // slidesPerRow: 2,
        // autoplay:  true,

    }
  return (
    <section className='cashBackStores'>
        <div className="heading d-flex justify-content-start mt-3 ms-3 mb-3">
            <h1 className='fw-bold'>TOP CASHBACK STORES</h1>
        </div>
        <Slider {...settings}>
                        <div className="store_card p-2">
                            <img src = {cashback1} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                            
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback2} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback3} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback4} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback5} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>


                        <div className="store_card p-2">
                            <img src = {cashback6} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback7} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback8} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback9} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback10} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback11} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>


                        <div className="store_card p-2">
                            <img src = {cashback12} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback13} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback14} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback15} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>


                        <div className="store_card p-2">
                            <img src = {cashback16} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback17} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback18} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback19} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                        <div className="store_card p-2">
                            <img src = {cashback19} className='img-fluid w-100' />
                            <div className="coupons">EARN UPTO 6.5% CASHBACK ▶</div>
                            <div className='cashbackTerms'>Cashback Rates & Terms</div>
                        </div>
                    </Slider>
    </section>
  )
}

export default CashbackStores
