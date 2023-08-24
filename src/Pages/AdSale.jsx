import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import Item1 from '../images/Rectangle 108.png'
import Item2 from '../images/Rectangle 245.png'
import Item3 from '../images/Rectangle 245 (1).png'

const AdSale = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
      };
  return (
    <section className='AdSale'>
        <Container fluid>
            <Row>
                <Col md = '12'>
                    <Slider {...settings}>
                        <div className="items">
                            <img src = {Item1} className='img-fluid'></img>
                        </div>
                        <div className="items">
                            <img src = {Item2} className='img-fluid'></img>
                        </div>
                        <div className="items">
                            <img src = {Item3} className='img-fluid'></img>
                        </div>
                        <div className="items">
                            <img src = {Item1} className='img-fluid'></img>
                        </div>
                        <div className="items">
                            <img src = {Item2} className='img-fluid'></img>
                        </div>
                        <div className="items">
                            <img src = {Item3} className='img-fluid'></img>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AdSale
