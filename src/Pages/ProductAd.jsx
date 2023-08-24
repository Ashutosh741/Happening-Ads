import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import Item1 from '../images/Rectangle 246.png'

const ProductAd = () => {
    const settings = {
        dots : false,
        infinite : true,
        speed : 2000,
        slideToShow : 1,
        slideToScroll : 1,
        autoplay : true,
        responsive :[
            {
                breakpoint : 1200,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 1,
                }
            },
            {
                breakpoint : 1008,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                }
            },
            {
                breakpoint : 800,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                }
            }
        ]
    }
  return (
    <section>
        <Container fluid>
            <Row>
            <Col md = '12'>
                <div className="fashionHeading mt-5 d-flex justify-content-start">
                        <h4>Shop Now</h4>
                </div>
                </Col>
                <Col md='12'>
                    <Slider {...settings}>
                        <div className="">
                            <img src ={Item1} className='img-fluid w-100' />
                        </div>
                        <div className="">
                            <img src ={Item1} className='img-fluid w-100' />
                        </div>  
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ProductAd
