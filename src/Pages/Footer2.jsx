import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer2 = () => {
  return (
    <section className='footer position-relative bg-black'>
        <div className="franchiseBox">
            <div className="boxContent">
                <h4>Want to grow your business? Become a partner.</h4>
                <p>We increase occupancy, lower your marketing costs, and help provide fabulous stays. More than 1300 Hotel owners and 40 Lakh customers believe in us.</p>
            </div>
            <a className='franchiseButton'>Be a Franchise</a>
        </div>
        <Container>
            <Row>
                <Col md = '12'>
                    <div className="linkWrapper d-flex">
                            <div className="leftContent">
                                <div className="linksHolder d-flex gap-5">
                                    <div className="link">
                                        <h4>Happening Ads</h4>
                                        <ul>
                                            <li className="hello"><a>About Us</a></li>
                                            <li className="hello"><a>Careers</a></li>
                                            <li className="hello"><a>Press</a></li>
                                            <li className="hello"><a>Travel Blog</a></li>
                                        </ul>
                                    </div>
                                    <div className="link">
                                        <h4>Partner With Us</h4>
                                        <ul>
                                            <li className="hello"><a>Be our Franchisee</a></li>
                                            <li className="hello"><a>Travel Agent</a></li>
                                            <li className="hello"><a>Corporate Enquiries</a></li>
                                            <li className="hello"><a>Quarantine Hotels</a></li>
                                        </ul>
                                    </div>
                                    <div className="link">
                                        <h4>Policies</h4>
                                        <ul>
                                            <li className="hello"><a>Terms & Conditions</a></li>
                                            <li className="hello"><a>Privacy Policy</a></li>
                                            <li className="hello"><a>Cancellation Policy</a></li>
                                            <li className="hello"><a>FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footerPaymentStyle mt-5 d-flex align-items-center gap-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className='footerPaymentTitle'>SECURED BY</span>
                                        <span className='text-white'>
                                        <i class="fa-brands fa-expeditedssl"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className='footerPaymentTitle me-2'>We Accept</span>
                                        <div className="imageWrap d-flex gap-2" >
                                        <i class="fa-brands fa-cc-visa" style = {{color : "white"}}></i>
                                        <i class="fa-brands fa-cc-mastercard"></i>
                                        <i class="fa-brands fa-cc-amex"></i>
                                        <i class="fa-brands fa-google-pay"></i>
                                        <i class="fa-brands fa-amazon-pay"></i>
                                        <i class="fa-brands fa-apple-pay"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightContent">
                                <h3>Download our free app</h3>
                                <div className="appStoreWrap d-flex">
                                    <div className="appStore d-flex flex-wrap">
                                        <span className='totalDownloads'>1M+ Downloads</span>
                                        <div className="message-wrap">
                                            <div className="get-sms first-state">
                                                <span className='country-code'>+91</span>
                                                <input className='mobile_no' type = "text" pattern="^-?[0-9]\d*\.?\d*$" placeholder="Enter Mobile number" maxlength="10" autocomplete="new-password"></input>
                                                <span className='success-text'>Link Sent</span>
                                                <button className='btn send-btn d-inline-block'></button>
                                            </div>
                                            <div className="get-sms message-sent">
                                                <span className='success-text'>Link Sent</span>
                                                <span className='send-btn d-inline-block'></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </section>
  )
}

export default Footer2
