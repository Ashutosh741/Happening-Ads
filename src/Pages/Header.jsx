import React from "react";
import "../CSS/Header.css";
import Logo from "../images/HAPPENING-ADS-LOGO 1.png";
import Facebook from "../images/Group.svg";
import Instagram from "../images/Group (1).svg";
import Linkedin from "../images/Group (2).svg";
import Twitter from "../images/Group (3).svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Search from "../images/Search.png";
import android from '../images/game.png'
import apple from '../images/app-store.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <section className="p-2 bg_top header drop_shadow">
      {/*   <Col md='6'>
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


            </Col>*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <a className="navbar-brand" href="#">
          <img src={Logo} className="img-fluid logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              
              <Link to = "/" className="nav-link" href="">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <Link to ="/blog" className="nav-link">
                Blog
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="get_app">
                  Get App 
                    <span className="ms-2"><img src = {android} className="img-fluid" /></span><span className="ms-2"><img src = {apple}  className="img-fluid"/></span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="btn signup_btn btn-primary">Sign In</div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="btn signup_btn btn-primary">Sign Up</div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
