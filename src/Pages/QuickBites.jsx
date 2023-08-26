import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import bites1 from '../images/bites1.webp'
import bites2 from '../images/bites2.jpg'
import bites3 from '../images/bites3.webp'
import bites4 from '../images/bites4.webp'
import bites5 from '../images/bites5.webp'
import bites6 from '../images/bites6.webp'

import Slider from 'react-slick'
const QuickBites = () => {
    const settings = {
        dots : false,
        speed : 500,
        slidesToShow : 6,
        slidesToScroll : 6,

        autoplay : true,


    }
  return (
    <section className='quickbites'>

                <div className="fashionHeading ms-3 mt-5 d-flex justify-content-start align-items-center gap-3">
                            <h4>QUICK BITES 🍔</h4>
                    </div>

                    <Slider {...settings}>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites1} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites2} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites3} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites4} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites5} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites6} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites1} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites2} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites3} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites4} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites5} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card_grid">
                                <a>
                                    <div className="card_grid_img">
                                        <img src= {bites6} className='img-fluid'/>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </Slider>
  </section>
  )
}

export default QuickBites
