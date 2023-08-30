// Carousel component (Carousel.jsx)
import React from 'react';
import Slider from "react-slick";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Screen1 from '../images/banner1.webp'
import Screen2 from '../images/banner12.jpeg'
import Screen3 from '../images/banner13.jpeg'
import Screen4 from '../images/banner14.jpg'
import Screen5 from '../images/banner15.jpg'
import Screen6 from '../images/banner16.jpeg'
import '../CSS/Carousel.css'
const Carousel = (props) => {

  return (
    <section className='carousel_top mb-5'>
      
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Screen1} className="d-block img-fluid w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Screen2} className="d-block img-fluid w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Screen3} className="d-block img-fluid w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Screen4} className="d-block img-fluid w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Screen5} className="d-block img-fluid w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Screen6} className="d-block img-fluid w-100" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
  );
  
};

Carousel.defaultProps = {
  Screen: [], // Set a default empty array if Screen prop is not provided
};

export default Carousel;
