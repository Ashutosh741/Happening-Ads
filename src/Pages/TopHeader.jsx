import React from 'react'
import '../CSS/TopHeader.css'
import callIcon from '../images/Phone.png'
import Letter from '../images/Letter.png'
import Location from '../images/Location.png'
import Test from '../images/Test Account.png'

const TopHeader = () => {
  return (
    <section className='bg_top'> 
      <div className="container-fluid">
      <div className="row ">
        <div className="col-6">
          <div className="items_wrapper">
          <div className="items d-flex justify-content-center align-items-center">
              <div className="icon">
                <img src = {callIcon} class = "img-fluid"/>
              </div>
              <div className="text">
                  <h6 className='mb-0'>Got questions? Call us 24/7! <br>
                  </br>(800) 8001-8588, (0600) 874 548</h6>
              </div>
          </div>
          <div className="items">
              <div className="icon">
                <img src = {Letter} class = "img-fluid"/>
              </div>
              <div className="text">
                  <h6 className='mb-0'>sample@email.com</h6>
              </div>
          </div>
          </div>
        </div>
        <div className="col-6">
          <div className="items_wrapper">
          <div className="items">
              <div className="icon">
                <img src = {Location} class = "img-fluid"/>
              </div>
              <div className="text">
                  <h6 className='mb-0'>Store Location</h6>
              </div>
          </div>
          <div className="items">
              <div className="icon">
                <img src = {Test} class = "img-fluid"/>
              </div>
              <div className="text">
                  <h6 className='mb-0'>Sign in or Register</h6>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default TopHeader
