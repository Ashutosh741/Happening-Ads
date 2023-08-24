import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import Item1 from '../images/Rectangle 247.png'
import Item2 from '../images/Rectangle 248.png'

const Footwear = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
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
                <Col md = "12">
                <div className="fashionHeading mt-5 d-flex justify-content-start">
                        <h4>Boys, Casaul Footwear </h4>
                </div>
                </Col>
                <Col md = '12'>
                    <Slider {...settings}>
                        <div className="FootWearItems p-2">
                            <img src = {Item1} className='img-fluid w-100' />
                        </div>    
                        <div className="FootWearItems p-2">
                            <img src = {Item2} className='img-fluid w-100' />
                        </div>
                        <div className="FootWearItems p-2">
                            <img src = {Item1} className='img-fluid w-100' />
                        </div>
                        <div className="FootWearItems p-2">
                            <img src = {Item2} className='img-fluid w-100' />
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footwear
