import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import '../CSS/TopBrands.css'
import Brand1 from '../images/1-5 (1) 1.png'
import Brand2 from '../images/1-5 (1) 12.png'
import Brand3 from '../images/1-5 (1) 13.png'
import Brand4 from '../images/1-5 (1) 14.png'
import Star from '../images/Stars.svg'
const TopBrands = () => {
  return (
    <section className='mb-5'>
        <Container fluid>
            <Row>
                <Col md = '12'>
                    <div className="heading mt-5 d-flex justify-content-start">
                        <h1>Top Fashion Brands</h1>
                    </div>
                </Col>
                <Col md = '6'>
                    <div className="card_wrapper  d-flex justify-content-center gap-3">
                        <div className="image w-100">
                            <img src = {Brand1} className='img-fluid w-100'/>
                        </div>
                        <div className="details d-flex justify-content-center flex-column align-items-center">
                            <div className="top_Details d-flex justify-content-start align-items-start gap-3">
                            <div className="fishy">
                                <h6>Get Rs.1000 off on a minimum 
                                bill of Rs.4000 (Offline only | 
                                Not valid over & above store discount)<br></br>
                                Minimum Purchase: ₹4000
                                </h6>
                            </div>
                            <div className="rating_wrapper d-flex justify-content-center align-items-center gap-2">
                                <div className="icon">
                                    <img src = {Star} className=' img-fluid'/>
                                </div>
                                <div className="rating">
                                    <h6 className='m-0 p-0'>4.4</h6>
                                </div>
                            </div>
                            </div>
                            <div className="description">
                                <h6>Allen Solly is a well-known brand in India that offers a wide range of stylish and trendy clothing for men and women. The brand is known for its high-quality fabrics and unique designs, which reflect the... See more</h6>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col md = '6'>
                    <div className="card_wrapper  d-flex justify-content-center gap-3">
                        <div className="image w-100">
                            <img src = {Brand1} className='img-fluid w-100'/>
                        </div>
                        <div className="details d-flex justify-content-center flex-column align-items-center">
                            <div className="top_Details d-flex justify-content-start align-items-start gap-3">
                            <div className="fishy">
                                <h6>Get Rs.1000 off on a minimum 
                                bill of Rs.4000 (Offline only | 
                                Not valid over & above store discount)<br></br>
                                Minimum Purchase: ₹4000
                                </h6>
                            </div>
                            <div className="rating_wrapper d-flex justify-content-center align-items-center gap-2">
                                <div className="icon">
                                    <img src = {Star} className=' img-fluid'/>
                                </div>
                                <div className="rating">
                                    <h6 className='m-0 p-0'>4.4</h6>
                                </div>
                            </div>
                            </div>
                            <div className="description">
                                <h6>Allen Solly is a well-known brand in India that offers a wide range of stylish and trendy clothing for men and women. The brand is known for its high-quality fabrics and unique designs, which reflect the... See more</h6>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col md = '6'>
                    <div className="card_wrapper  d-flex justify-content-center gap-3">
                        <div className="image w-100">
                            <img src = {Brand1} className='img-fluid w-100'/>
                        </div>
                        <div className="details d-flex justify-content-center flex-column align-items-center">
                            <div className="top_Details d-flex justify-content-start align-items-start gap-3">
                            <div className="fishy">
                                <h6>Get Rs.1000 off on a minimum 
                                bill of Rs.4000 (Offline only | 
                                Not valid over & above store discount)<br></br>
                                Minimum Purchase: ₹4000
                                </h6>
                            </div>
                            <div className="rating_wrapper d-flex justify-content-center align-items-center gap-2">
                                <div className="icon">
                                    <img src = {Star} className=' img-fluid'/>
                                </div>
                                <div className="rating">
                                    <h6 className='m-0 p-0'>4.4</h6>
                                </div>
                            </div>
                            </div>
                            <div className="description">
                                <h6>Allen Solly is a well-known brand in India that offers a wide range of stylish and trendy clothing for men and women. The brand is known for its high-quality fabrics and unique designs, which reflect the... See more</h6>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col md = '6'>
                    <div className="card_wrapper  d-flex justify-content-center gap-3">
                        <div className="image w-100">
                            <img src = {Brand1} className='img-fluid w-100'/>
                        </div>
                        <div className="details d-flex justify-content-center flex-column align-items-center">
                            <div className="top_Details d-flex justify-content-start align-items-start gap-3">
                            <div className="fishy">
                                <h6>Get Rs.1000 off on a minimum 
                                bill of Rs.4000 (Offline only | 
                                Not valid over & above store discount)<br></br>
                                Minimum Purchase: ₹4000
                                </h6>
                            </div>
                            <div className="rating_wrapper d-flex justify-content-center align-items-center gap-2">
                                <div className="icon">
                                    <img src = {Star} className=' img-fluid'/>
                                </div>
                                <div className="rating">
                                    <h6 className='m-0 p-0'>4.4</h6>
                                </div>
                            </div>
                            </div>
                            <div className="description">
                                <h6>Allen Solly is a well-known brand in India that offers a wide range of stylish and trendy clothing for men and women. The brand is known for its high-quality fabrics and unique designs, which reflect the... See more</h6>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default TopBrands
