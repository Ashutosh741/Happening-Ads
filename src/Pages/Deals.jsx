import React, { useRef } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import deals1 from '../images/deals1.webp'
import deals2 from '../images/deals2.webp'
import deals3 from '../images/deals3.webp'
import deals4 from '../images/deals4.webp'
import deals5 from '../images/deals5.webp'
import logo from '../images/HAPPENING-ADS-LOGO 1.png'



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



const Deals = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay : true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
      };
  return (
    <section className='deals'>

                    <div className="fashionHeading ms-3 mt-5 d-flex justify-content-start align-items-center gap-3">
                            <h4>All You Can Eat Buffets! 🍱</h4>
                            <a className=''>View all offers▶️</a>
                    </div>
                    <Slider  {...settings}>
                        <div className="p-2">
                        <div className="card_inner  d-flex justify-content-center flex-column">
                       <a>
                        <div className="card_img">
                            <img src = {deals1} className='img-fluid'/>
                            <div className="card_favourite">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="merchant_rating">
                            <div className="card_rating">
                                <div className="companyLogo">
                                    <img src = {logo} className='img-fluid w-100'/>
                                </div>
                                <span className="card_rating_img"></span>
                                <div className="card_rating_value fw-bolder">4.2</div>

                            </div>
                        </div>
                        <div className="card_description">
                            <h6 className='text_truncate'>Pirates of Grill</h6>
                            <div className="card_location">
                                <p>Vasant Kunj Sector C</p>
                            </div>
                            <p className="card_option">Buffet Offers</p>
                            <div className="margin_reset"></div>
                            <div className="card_pricing">
                                <Row>
                                    <Col md = '6'>
                                        <div className="previous_price text-secondary">
                                        <i class="fa-solid fa-indian-rupee-sign"></i>1206
                                        <div className="previous_reset"></div>
                                        </div>
                                        <h6 className='actual_price d-flex align-items-center fw-bold text-success'>
                                            <span className="d-flex text-success">
                                            <i class="fa-solid fa-indian-rupee-sign"></i>999
                                            </span>
                                        </h6>
                                    </Col>
                                    <Col md = '6'>
                                        <div className="card_discount text-end">
                                            <p>13% OFF</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                       </a>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_inner  d-flex justify-content-center flex-column">
                       <a>
                        <div className="card_img">
                            <img src = {deals2} className='img-fluid'/>
                            <div className="card_favourite">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="merchant_rating">
                            <div className="card_rating">
                                <div className="companyLogo">
                                    <img src = {logo} className='img-fluid w-100'/>
                                </div>
                                <span className="card_rating_img"></span>
                                <div className="card_rating_value fw-bolder">4.2</div>

                            </div>
                        </div>
                        <div className="card_description">
                            <h6 className='text_truncate'>Pirates of Grill</h6>
                            <div className="card_location">
                                <p>Vasant Kunj Sector C</p>
                            </div>
                            <p className="card_option">Buffet Offers</p>
                            <div className="margin_reset"></div>
                            <div className="card_pricing">
                                <Row>
                                    <Col md = '6'>
                                        <div className="previous_price text-secondary">
                                        <i class="fa-solid fa-indian-rupee-sign"></i>1206
                                        <div className="previous_reset"></div>
                                        </div>
                                        <h6 className='actual_price d-flex align-items-center fw-bold text-success'>
                                            <span className="d-flex text-success">
                                            <i class="fa-solid fa-indian-rupee-sign"></i>999
                                            </span>
                                        </h6>
                                    </Col>
                                    <Col md = '6'>
                                        <div className="card_discount text-end">
                                            <p>13% OFF</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                       </a>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_inner  d-flex justify-content-center flex-column">
                       <a>
                        <div className="card_img">
                            <img src = {deals3} className='img-fluid'/>
                            <div className="card_favourite">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="merchant_rating">
                            <div className="card_rating">
                                <div className="companyLogo">
                                    <img src = {logo} className='img-fluid w-100'/>
                                </div>
                                <span className="card_rating_img"></span>
                                <div className="card_rating_value fw-bolder">4.2</div>

                            </div>
                        </div>
                        <div className="card_description">
                            <h6 className='text_truncate'>Pirates of Grill</h6>
                            <div className="card_location">
                                <p>Vasant Kunj Sector C</p>
                            </div>
                            <p className="card_option">Buffet Offers</p>
                            <div className="margin_reset"></div>
                            <div className="card_pricing">
                                <Row>
                                    <Col md = '6'>
                                        <div className="previous_price text-secondary">
                                        <i class="fa-solid fa-indian-rupee-sign"></i>1206
                                        <div className="previous_reset"></div>
                                        </div>
                                        <h6 className='actual_price d-flex align-items-center fw-bold text-success'>
                                            <span className="d-flex text-success">
                                            <i class="fa-solid fa-indian-rupee-sign"></i>999
                                            </span>
                                        </h6>
                                    </Col>
                                    <Col md = '6'>
                                        <div className="card_discount text-end">
                                            <p>13% OFF</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                       </a>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_inner  d-flex justify-content-center flex-column">
                       <a>
                        <div className="card_img">
                            <img src = {deals4} className='img-fluid'/>
                            <div className="card_favourite">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="merchant_rating">
                            <div className="card_rating">
                                <div className="companyLogo">
                                    <img src = {logo} className='img-fluid w-100'/>
                                </div>
                                <span className="card_rating_img"></span>
                                <div className="card_rating_value fw-bolder">4.2</div>

                            </div>
                        </div>
                        <div className="card_description">
                            <h6 className='text_truncate'>Pirates of Grill</h6>
                            <div className="card_location">
                                <p>Vasant Kunj Sector C</p>
                            </div>
                            <p className="card_option">Buffet Offers</p>
                            <div className="margin_reset"></div>
                            <div className="card_pricing">
                                <Row>
                                    <Col md = '6'>
                                        <div className="previous_price text-secondary">
                                        <i class="fa-solid fa-indian-rupee-sign"></i>1206
                                        <div className="previous_reset"></div>
                                        </div>
                                        <h6 className='actual_price d-flex align-items-center fw-bold text-success'>
                                            <span className="d-flex text-success">
                                            <i class="fa-solid fa-indian-rupee-sign"></i>999
                                            </span>
                                        </h6>
                                    </Col>
                                    <Col md = '6'>
                                        <div className="card_discount text-end">
                                            <p>13% OFF</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                       </a>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_inner  d-flex justify-content-center flex-column">
                       <a>
                        <div className="card_img">
                            <img src = {deals5} className='img-fluid'/>
                            <div className="card_favourite">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <div className="merchant_rating">
                            <div className="card_rating">
                                <div className="companyLogo">
                                    <img src = {logo} className='img-fluid w-100'/>
                                </div>
                                <span className="card_rating_img"></span>
                                <div className="card_rating_value fw-bolder">4.2</div>

                            </div>
                        </div>
                        <div className="card_description">
                            <h6 className='text_truncate'>Pirates of Grill</h6>
                            <div className="card_location">
                                <p>Vasant Kunj Sector C</p>
                            </div>
                            <p className="card_option">Buffet Offers</p>
                            <div className="margin_reset"></div>
                            <div className="card_pricing">
                                <Row>
                                    <Col md = '6'>
                                        <div className="previous_price text-secondary">
                                        <i class="fa-solid fa-indian-rupee-sign"></i>1206
                                        <div className="previous_reset"></div>
                                        </div>
                                        <h6 className='actual_price d-flex align-items-center fw-bold text-success'>
                                            <span className="d-flex text-success">
                                            <i class="fa-solid fa-indian-rupee-sign"></i>999
                                            </span>
                                        </h6>
                                    </Col>
                                    <Col md = '6'>
                                        <div className="card_discount text-end">
                                            <p>13% OFF</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                       </a>
                    </div>
                        </div>


                    </Slider>
    </section>
  )
}

export default Deals
