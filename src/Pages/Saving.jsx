import React, { Component } from "react";
import Slider from "react-slick";
import Container from 'react-bootstrap/esm/Container'
import '../CSS/Saving.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Product1 from '../images/Rectangle 200.png'
import Product2 from '../images/Rectangle 201.png'
import Product3 from '../images/Rectangle 202.png'
import Product4 from '../images/Rectangle 203.png'

const Saving = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : true
      };
  return (
    <section className="mt-5 mb-5">
        <Container fluid>
            <Row>
                <Col md='12'>
                    <div className="d-flex justify-content-start ps-5 mb-4">
                        <h2 className='heading'>More savings like this!</h2>
                    </div>
                </Col>
                <Col md="12">
                <Slider {...settings}>
                <div className="wrapper d-flex flex-column p-2">
                            <div className="productImage">
                                <img src = {Product1} className="w-100 img-fluid" />
                            </div>
                            <div className="details d-flex justify-content-between align-items-center pt-2 p-1">
                            <div className="fishy d-flex flex-column">
                            <div className="mixture">
                                <h6>Bakery 24X7</h6>
                            </div>
                            <div className="distance">
                                <h6>10km, Sector 37</h6>
                            </div>
                            </div>
                            <div className="save">
                                <button>Save 32%</button>
                            </div>
                            </div>
                </div>
                <div className="wrapper d-flex flex-column p-2">
                            <div className="productImage">
                                <img src = {Product1} className="w-100 img-fluid" />
                            </div>
                            <div className="details d-flex justify-content-between align-items-center pt-2 p-1">
                            <div className="fishy d-flex flex-column">
                            <div className="mixture">
                                <h6>Bakery 24X7</h6>
                            </div>
                            <div className="distance">
                                <h6>10km, Sector 37</h6>
                            </div>
                            </div>
                            <div className="save">
                                <button>Save 32%</button>
                            </div>
                            </div>
                </div>
                <div className="wrapper d-flex flex-column p-2">
                            <div className="productImage">
                                <img src = {Product1} className="w-100 img-fluid" />
                            </div>
                            <div className="details d-flex justify-content-between align-items-center pt-2 p-1">
                            <div className="fishy d-flex flex-column">
                            <div className="mixture">
                                <h6>Bakery 24X7</h6>
                            </div>
                            <div className="distance">
                                <h6>10km, Sector 37</h6>
                            </div>
                            </div>
                            <div className="save">
                                <button>Save 32%</button>
                            </div>
                            </div>
                </div>
                <div className="wrapper d-flex flex-column p-2">
                            <div className="productImage">
                                <img src = {Product1} className="w-100 img-fluid" />
                            </div>
                            <div className="details d-flex justify-content-between align-items-center pt-2 p-1">
                            <div className="fishy d-flex flex-column">
                            <div className="mixture">
                                <h6>Bakery 24X7</h6>
                            </div>
                            <div className="distance">
                                <h6>10km, Sector 37</h6>
                            </div>
                            </div>
                            <div className="save">
                                <button>Save 32%</button>
                            </div>
                            </div>
                </div>
                <div className="wrapper d-flex flex-column p-2">
                            <div className="productImage">
                                <img src = {Product1} className="w-100 img-fluid" />
                            </div>
                            <div className="details d-flex justify-content-between align-items-center pt-2 p-1">
                            <div className="fishy d-flex flex-column">
                            <div className="mixture">
                                <h6>Bakery 24X7</h6>
                            </div>
                            <div className="distance">
                                <h6>10km, Sector 37</h6>
                            </div>
                            </div>
                            <div className="save">
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

export default Saving
