import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import Item1 from '../images/1-5 (1) 15.png'
import Item2 from '../images/1-5 (1) 16.png'
import Item3 from '../images/1-5 (1) 17.png'
import Item4 from '../images/1-5 (1) 18.png'
import Item5 from '../images/1-5 (1) 19.png'


const SeasonItems = (props) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: props.slides,
        slidesToScroll: props.scroll,
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
                        <h4>{props.heading}</h4>
                </div>
                </Col>
                <Col md = "12">
                    <Slider {...settings}>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item2} className='img-fluid'/>
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item3} className='img-fluid'/>
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item4} className='img-fluid'/>
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item5} className='img-fluid'/>
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item3} className='img-fluid'/>
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item1} className='img-fluid'/>
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card_wrapper  d-flex justify-content-center flex-column">
                        <div className="card_img">
                            <img src = {Item2} className='img-fluid'/>
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

export default SeasonItems
