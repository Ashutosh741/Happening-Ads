import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Slider from 'react-slick'
import category1 from '../images/category1.png'
import category2 from '../images/category2.png'
import category3 from '../images/category3.png'
import category4 from '../images/category4.png'
import category5 from '../images/category5.png'
import category6 from '../images/category6.png'
import category8 from '../images/category8.png'
import category9 from '../images/category9.png'
import category10 from '../images/category10.png'
import category11 from '../images/category11.png'
import category12 from '../images/category12.png'


const TopCategory = () => {
    const settings = {
        dots : false,
        speed : 500,
        slidesToShow : 7,
        slidesToScroll :7,
        autoplay : true,
        infinte : true,
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
    <section className='topCategory'>
                    <div className="heading d-flex justify-content-start mt-5 ms-3 mb-3">
                        <h1 className='fw-bold'>TOP CATEGORIES</h1>
                    </div>
                    <Slider {...settings}>
                        <div className="category_images">
                            <img src = {category1} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category2} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category3} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category4} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category5} className='img-fluid w-100' />
                        </div>


                        <div className="category_images">
                            <img src = {category6} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category8} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category9} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category10} className='img-fluid w-100' />
                        </div>
                        <div className="category_images">
                            <img src = {category11} className='img-fluid w-100' />
                        </div>


                        <div className="category_images">
                            <img src = {category12} className='img-fluid w-100' />
                        </div>

                    </Slider>

    </section>
  )
}

export default TopCategory
