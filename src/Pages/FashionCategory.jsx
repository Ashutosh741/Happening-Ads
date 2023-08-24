import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from "react-slick";
import '../CSS/Categories.css'
import Item1 from '../images/fashion-designer 1.png'
import Item2 from '../images/desktop 1.png'
import Item3 from '../images/pharmacy 1.png'
import Item4 from '../images/nightlife 1.png'
import Item5 from '../images/nail-polish 1.png'
import Item6 from '../images/trendy 1.png'
const FashionCategory = () => {
    const settings = {
        dots : false,
        infinite : true,
        speed : 500,
        slidesToShow : 6,
        slidesToScroll: 1,
        autoplay : true
    };
  return (
    <section>
        <Container fluid>
            <Row>
                <Col md ='12'>
                    <div className="fashionHeading d-flex justify-content-start mt-5 mb-3">
                        <h4>Shop from Fashion Categories</h4>
                    </div>
                </Col>
                <Col md = "12">
                <Slider {...settings}>
                <div className="item_wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="itemLogo">

                        </div>
                        <div className="itemIcon position-absolute">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                        <div className="itemCategory mt-3">
                            <h6>Fashion</h6>
                        </div>
                </div>
                <div className="item_wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="itemLogo">

                        </div>
                        <div className="itemIcon position-absolute">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                        <div className="itemCategory mt-3">
                            <h6>Fashion</h6>
                        </div>
                </div>
                <div className="item_wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="itemLogo">

                        </div>
                        <div className="itemIcon position-absolute">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                        <div className="itemCategory mt-3">
                            <h6>Fashion</h6>
                        </div>
                </div>
                <div className="item_wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="itemLogo">

                        </div>
                        <div className="itemIcon position-absolute">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                        <div className="itemCategory mt-3">
                            <h6>Fashion</h6>
                        </div>
                </div>
                <div className="item_wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="itemLogo">

                        </div>
                        <div className="itemIcon position-absolute">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                        <div className="itemCategory mt-3">
                            <h6>Fashion</h6>
                        </div>
                </div>
                <div className="item_wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="itemLogo">

                        </div>
                        <div className="itemIcon position-absolute">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                        <div className="itemCategory mt-3">
                            <h6>Fashion</h6>
                        </div>
                </div>
                <div className="item_wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="itemLogo">

                        </div>
                        <div className="itemIcon position-absolute">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                        <div className="itemCategory mt-3">
                            <h6>Fashion</h6>
                        </div>
                </div>
                </Slider>
                </Col>
                
            </Row>
        </Container>
    </section>
  )
}

export default FashionCategory
