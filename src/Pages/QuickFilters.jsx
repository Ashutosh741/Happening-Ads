import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Arrows from '../images/ArrowsDownUp.svg'
import Delivery from '../images/delivery.gif'
import Brands from '../images/brands.png'
import Pay from '../images/maigcPay.png'
import DownArrow from '../images/down-arrow.svg'
import voucher1 from '../images/voucher1.webp'
import voucher2 from '../images/voucher2.webp'
import voucher3 from '../images/voucher3.webp'
import voucher4 from '../images/voucher4.webp'
import voucher5 from '../images/voucher5.webp'
import voucher6 from '../images/voucher6.webp'
import voucher7 from '../images/voucher7.webp'
import voucher8 from '../images/voucher8.jpg'
import voucher9 from '../images/voucher9.webp'
import voucher10 from '../images/voucher10.webp'
import voucher11 from '../images/voucher11.webp'
import voucher12 from '../images/voucher12.webp'
import voucher13 from '../images/voucher13.webp'
import voucher14 from '../images/voucher14.webp'
import voucher15 from '../images/voucher15.webp'
import voucher16 from '../images/voucher16.webp'
import voucher17 from '../images/voucher17.webp'
import voucher18 from '../images/voucher18.webp'
import voucher19 from '../images/voucher19.webp'
import voucher20 from '../images/voucher20.webp'
import wallet from '../images/wallet.svg'




const QuickFilters = () => {
  return (
    <section className=' infinite_load_container'>
        <Container>
            <Row>
                <Col md = '12'>
                    <div className="quick_filters">
                        <span className="q_filter sort">
                            <img src = {Arrows} className='img-fluid filter_logo'/>
                            Sort by:Relevance
                        </span>
                        <span className="q_filter">
                            <img src = {Delivery} className='img-fluid filter_logo'/>
                            Delivery
                        </span>
                        <span className="q_filter">
                            <img src = {Brands} className='img-fluid filter_logo'/>
                            Top Brands
                        </span>
                        <span className="q_filter">
                            <img src = {Pay} className='img-fluid filter_logo'/>
                            magicPay
                        </span>
                        <button type="button" className="btn btn-primary q_filter" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Distance
                            <img src = {DownArrow} className='img-fluid filter_logo'/>
                        </button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <span className="q_filter">
                            Save %
                            <img src = {DownArrow} className='img-fluid filter_logo'/>

                        </span>
                        <span className="q_filter">
                            Rating
                            <img src = {DownArrow} className='img-fluid filter_logo'/>

                        </span>
                        <span className="q_filter">
                            Top Brands
                            <img src = {DownArrow} className='img-fluid filter_logo'/>

                        </span>
                        <span className="q_filter">
                            Localities
                            <img src = {DownArrow} className='img-fluid filter_logo'/>

                        </span>
                    </div>
                    <Row>

                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher1} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>

                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher3} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>

                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher4} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>

                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher5} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>

                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher6} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>

                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher8} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher9} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher10} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher11} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher12} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher13} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher14} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher15} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher16} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher17} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher18} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    <Col md = '4'>
                        <div className="store_result_container">
                            <article className="store_card">
                                <figure className="store_image_holder">
                                    <img src={voucher19} className='img-fluid'/>
                                </figure>
                                <div className="info_container">
                                    <div className="rows row_1">
                                        <p className="name"><a>Guru Kripa Medical Store</a></p>
                                        <span className="save_message">
                                            <img src = {wallet} className='img-fluid'/>
                                            <span>Save 10%</span>
                                        </span>
                                    </div>
                                    <div className="rows row_2">Fateh Nagar, New Delhi</div>
                                    <div className="rating_divider">
                                        <hr className="divide" />
                                    </div>
                                    <div className="rows row_3">Pharmacy</div>
                                    <div className="rows row_4">5 bought.</div>
                                </div>
                            </article>
                        </div>
                    </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default QuickFilters
