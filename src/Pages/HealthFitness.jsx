import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Item1 from '../images/1-5 (1) 15.png'    
import Item2 from '../images/1-5 (1) 16.png'
import Item3 from '../images/1-5 (1) 17.png'
import Item4 from '../images/1-5 (1) 18.png'
import Item5 from '../images/1-5 (1) 19.png'
import '../CSS/HealthFitness.css'
import Slider from 'react-slick'

const HealthFitness = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay : true
      };
  return (
    <section>
        <Container fluid>
            <Row>
                <Col md = "12">
                    <div className="fashionHeading mt-5 d-flex justify-content-start">
                            <h4>Online Offers For Your Health & Fitnesss</h4>
                    </div>
                </Col>
                <Col md = '12'>
                    <Slider {...settings}>
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>        
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>
                        <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>

                        <div className="card_name">
                            <h6>Healthifyme- Coupons and offers</h6>
                        </div>
                        <div className="card_desc">
                            <h6>
                            HealthifyMe is an online brand that provides personalized health and fitness solutions.<span className='read_more'>More....</span>
                            </h6>
                        </div>
                        <div className="save text-end">
                                <button>Save 32%</button>
                            </div>
                    </div>
                        </div>
                    </Slider>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HealthFitness
