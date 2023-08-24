import React from 'react'
import '../CSS/Header.css'
import Logo from '../images/HAPPENING-ADS-LOGO 1.png'
import Facebook from '../images/Group.svg'
import Instagram from '../images/Group (1).svg'
import Linkedin from '../images/Group (2).svg'
import Twitter from '../images/Group (3).svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Search from '../images/Search.png'

const Header = () => {  
  return (
    <section className='p-2 bg_top drop_shadow'>
    <Container fluid>
        <Row className='justify-content-center align-items-center'>
            <Col md='6'>
                <img src = {Logo} className='img-fluid logo' />
            </Col>
            <Col md='6'>
                <div className="d-flex justify-content-center align-items-center gap-5">
            <div className="search d-flex align-items-center input-group">
                <img src={Search} className="img-fluid mr-2" alt="SearchIcon" />
                <input
                className="form-control border-end-0 border rounded-pill"
                type="search"
                id="example-search-input"
                />
            </div>
            <div className="social">
                    <a><img src = {Facebook} className='img-fluid facebook'/></a>
                    <a><img src = {Instagram} className='img-fluid instagram'/></a>
                    <a><img src = {Linkedin} className='img-fluid linkedin'/></a>
                    <a><img src = {Twitter} className='img-fluid twitter'/></a>
                </div>
                </div>
            </Col>
        </Row>
        </Container>
        </section>
  )
}

export default Header
