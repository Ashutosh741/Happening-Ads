import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import Voucher1 from '../images/voucher1.webp'
import Voucher2 from '../images/voucher2.webp'
import Voucher3 from '../images/voucher3.webp'
import Voucher4 from '../images/voucher4.webp'
import Voucher5 from '../images/voucher5.webp'
import Voucher6 from '../images/voucher6.webp'
import Voucher7 from '../images/voucher7.webp'
import Voucher8 from '../images/voucher8.jpg'

import HomeDelivery from '../images/home_delivery_tag.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
        {/* <i class="fa-solid fa-arrow-right"></i> */}
        {/* <i class="fa-solid fa-chevron-left"></i> */}

      </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      {/* <i class="fa-solid fa-chevron-right"></i> */}
      </div>
  );
}


const Essential = () => {
  const settings = {
    dots : false,
    infinite : true,
    speed : 2000,
    slidesToShow : 5,
    slidesToScroll : 1,
    autoplay : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  };
  return (
    <section className='essential'>
      <Container>
        <Row>
          <Col md = '12'>
            <div className="mt-5 mb-4">
              <h4 className='fw-bolder'>Meds & Essentials Delivered in 45 Mins</h4>
            </div>
          </Col>
          <Col md = '12'>
            <Slider {...settings}>
              <div className="">
                  <a className="voucher_card">
                    <div className="voucher_banner_holder">
                      <img  src = {Voucher1} className='voucher_banner img-fluid'/> 
                    <div className="voucher_rating d-flex justify-content-center align-items-center">
                      <div className="voucher_star">
                    <i class="fa-solid fa-star"></i>
                      </div>
                    <p className='mb-0'>4.4</p>
                    </div>
                    <img className='img-fluid home_delivery' src = {HomeDelivery}/>
                    </div>
                    <div className="voucher_details">
                        <p className="voucher_merchant_name">Guardian Pharmacy</p>
                        <p className="voucher_locality">Deliver in 42 mins</p>
                        <p className="voucher_percent">
                          <span className='value'>Save 15%</span>
                        </p>
                    </div>
                  </a>
              </div>

              <div className="">
                  <a className="voucher_card">
                    <div className="voucher_banner_holder">
                      <img  src = {Voucher2} className='voucher_banner img-fluid'/> 
                    <div className="voucher_rating d-flex justify-content-center align-items-center">
                      <div className="voucher_star">
                    <i class="fa-solid fa-star"></i>
                      </div>
                    <p className='mb-0'>4.4</p>
                    </div>
                    <img className='img-fluid home_delivery' src = {HomeDelivery}/>
                    </div>
                    <div className="voucher_details">
                        <p className="voucher_merchant_name">Guardian Pharmacy</p>
                        <p className="voucher_locality">Deliver in 42 mins</p>
                        <p className="voucher_percent">
                          <span className='value'>Save 15%</span>
                        </p>
                    </div>
                  </a>
              </div>

              <div className="">
                  <a className="voucher_card">
                    <div className="voucher_banner_holder">
                      <img  src = {Voucher3} className='voucher_banner img-fluid'/> 
                    <div className="voucher_rating d-flex justify-content-center align-items-center">
                      <div className="voucher_star">
                    <i class="fa-solid fa-star"></i>
                      </div>
                    <p className='mb-0'>4.4</p>
                    </div>
                    <img className='img-fluid home_delivery' src = {HomeDelivery}/>
                    </div>
                    <div className="voucher_details">
                        <p className="voucher_merchant_name">Guardian Pharmacy</p>
                        <p className="voucher_locality">Deliver in 42 mins</p>
                        <p className="voucher_percent">
                          <span className='value'>Save 15%</span>
                        </p>
                    </div>
                  </a>
              </div>

              <div className="">
                  <a className="voucher_card">
                    <div className="voucher_banner_holder">
                      <img  src = {Voucher4} className='voucher_banner img-fluid'/> 
                    <div className="voucher_rating d-flex justify-content-center align-items-center">
                      <div className="voucher_star">
                    <i class="fa-solid fa-star"></i>
                      </div>
                    <p className='mb-0'>4.4</p>
                    </div>
                    <img className='img-fluid home_delivery' src = {HomeDelivery}/>
                    </div>
                    <div className="voucher_details">
                        <p className="voucher_merchant_name">Guardian Pharmacy</p>
                        <p className="voucher_locality">Deliver in 42 mins</p>
                        <p className="voucher_percent">
                          <span className='value'>Save 15%</span>
                        </p>
                    </div>
                  </a>
              </div>

              <div className="">
                  <a className="voucher_card">
                    <div className="voucher_banner_holder">
                      <img  src = {Voucher5} className='voucher_banner img-fluid'/> 
                    <div className="voucher_rating d-flex justify-content-center align-items-center">
                      <div className="voucher_star">
                    <i class="fa-solid fa-star"></i>
                      </div>
                    <p className='mb-0'>4.4</p>
                    </div>
                    <img className='img-fluid home_delivery' src = {HomeDelivery}/>
                    </div>
                    <div className="voucher_details">
                        <p className="voucher_merchant_name">Guardian Pharmacy</p>
                        <p className="voucher_locality">Deliver in 42 mins</p>
                        <p className="voucher_percent">
                          <span className='value'>Save 15%</span>
                        </p>
                    </div>
                  </a>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Essential
