import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import offer1 from '../images/offer1.webp'
import offer2 from '../images/offer2.webp'
import offer3 from '../images/offer3.webp'
import health1 from '../images/health1.webp'
import health2 from '../images/health2.webp'
import health3 from '../images/health3.webp'
import health4 from '../images/health4.webp'
import health5 from '../images/health5.webp'
import health6 from '../images/health6.webp'
import health7 from '../images/health7.webp'

const AmazingOffer = () => {
  return (
    <section className='amazing_offer'>
        <Container>
            <Row>
                <Col md = '12'>
                    <h4 className='fw-bold mt-4 mb-4'>Get Amazing Offers on Meds & More</h4>
                </Col>
                <Col md = '12'>
                    <div className="d-flex justify-content-start gap-3 align-items-center">
                        <div className="offers">
                            <a>
                                <img src = {offer1} className='img-fluid'/>
                            </a>
                        </div>
                        <div className="offers">
                            <a>
                                <img src = {offer2} className='img-fluid'/>
                            </a>
                        </div>
                        <div className="offers">
                            <a>
                                <img src = {offer3} className='img-fluid'/>
                            </a>
                        </div>
                    </div>

                </Col>

                <Col md = '12'>
                    <h4 className='fw-bold mt-4 mb-4'>Online Offers For Your Health & Fitnesss</h4>
                </Col>
                <Col md = '12'>
                    <div className="d-flex justify-content-start gap-3 align-items-center">
                        <div className="health">
                            <a>
                                <img src = {health1} className='img-fluid'/>
                                <span className="subtitle">Save 50%</span>
                            </a>
                        </div>
                        <div className="health">
                            <a>
                                <img src = {health2} className='img-fluid'/>
                                <span className="subtitle">Save 40%</span>

                            </a>
                        </div>
                        <div className="health">
                            <a>
                                <img src = {health3} className='img-fluid'/>
                                <span className="subtitle">Save 30%</span>

                            </a>
                        </div>
                        <div className="health">
                            <a>
                                <img src = {health4} className='img-fluid'/>
                                <span className="subtitle">Save 30%</span>

                            </a>
                        </div>
                        <div className="health">
                            <a className=''>
                                <img src = {health5} className='img-fluid'/>
                                <span className="subtitle">Save 30%</span>

                            </a>
                        </div>
                        <div className="health">
                            <a>
                                <img src = {health6} className='img-fluid'/>
                                <span className="subtitle">Save 30%</span>

                            </a>
                        </div>
                        <div className="health">
                            <a>
                                <img src = {health7} className='img-fluid'/>
                                <span className="subtitle">Save 30%</span>

                            </a>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AmazingOffer
