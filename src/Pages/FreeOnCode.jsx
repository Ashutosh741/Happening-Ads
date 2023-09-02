import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import '../CSS/FreeOnCode.css'
import Item1 from '../images/Rectangle 217.png'
import Item2 from '../images/Rectangle 218.png'
import Item3 from '../images/Rectangle 224.png'
import Item4 from '../images/Rectangle 220.png'
import Item5 from '../images/Rectangle 224.png'
import Item6 from '../images/Rectangle 222.png'
import Slider from 'react-slick'

const FreeOnCode = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay : true,
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
    <section>
        <Container fluid>
            <Row>
                <Col md='12'>
                    <div className="heading d-flex justify-content-start mt-5 mb-5">
                        <h1>Flat ₹150 off on Food Delivery. <span className='coupon'>Use Code: DEL</span></h1>
                    </div>
                </Col>
                <Col md = '12'>
                <Slider {...settings}>
                <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
                        </div>
                        </div>

                    </div>
                    <div className="item_wrapper ">
                        <div className="d-flex justify-content-center flex-column gap-4">
                        <div className="imageWrapper d-flex justify-content-center align-items-center">
                        <div className="image">
                        </div>
                        </div>
                        <div className="itemName">
                            <h6>Coffee</h6>
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

export default FreeOnCode
