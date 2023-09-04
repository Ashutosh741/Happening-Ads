import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import collection1 from '../images/collection1.webp'
import collection2 from '../images/collection2.webp'
import collection3 from '../images/collection3.webp'
import collection4 from '../images/collection4.webp'
import collection5 from '../images/collection5.webp'
import collection6 from '../images/collection6.webp'
import collection7 from '../images/collection7.webp'
import collection8 from '../images/collection8.webp'
import collection9 from '../images/collection9.webp'
import collection10 from '../images/collection10.webp'


const BestSeller = () => {
    const settings =  {
        infinte : true,
        slidesToShow : 5,
        speed : 500,
        slidesToScroll : 1,
        infinite : true,
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
    }
  return (
    <section className='best_seller'>
        <Container>
            <Row>
                <Col md = '12'>
                    <h4 className='mb-4 mt-4 fw-bolder'>Bestsellers From Our Collection</h4>
                </Col>
                <Col md = '12'>
                    <Slider {...settings}>
                        <div className="">
                            <a>
                                <img src = {collection1} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection1} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection2} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection3} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection4} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection5} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection6} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection7} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection8} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection9} className='img-fluid trend_img' />
                            </a>
                        </div>
                        <div className="">
                            <a>
                                <img src = {collection10} className='img-fluid trend_img' />
                            </a>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default BestSeller
