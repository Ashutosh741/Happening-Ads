import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import store from '../images/store1.webp'
import order from '../images/magic-order-icon.svg'
import pay from '../images/pay_icon.svg'
import link from '../images/external-link-icon-pink.svg'
import searches from '../images/item_tag_grocery.png'
import tablet1 from '../images/tablet1.webp'
import tablet2 from '../images/tablet2.webp'
import tablet3 from '../images/tablet3.webp'
import tablet4 from '../images/tablet4.webp'
import tablet5 from '../images/tablet5.webp'

const StoreBody = () => {
  return (
    <section className='store_body'>
      <Container>
        <Row>
          <Col md = '8'>
          <div class="card shadow">
            <div class="card-body">
              <div className="row_1">
                <div className="img">
                    <img src = {store} className='img-fluid'/>
                </div>
                <div className="details">
                    <h1 className="name mb-0">Guardian Pharmacy</h1>
                    <p className='kind mb-0'>Pharmacy</p>
                    <p className='location mb-0'>Rajouri Garden, New Delhi.</p>
                </div>
                <div className="rating">
                <div className="voucher_rating d-flex justify-content-center align-items-center">
                      <div className="voucher_star">
                    <i class="fa-solid fa-star"></i>
                      </div>
                    <p className='mb-0'>4.4</p>

                </div>
                <div className="visits">25 Visits</div>

                </div>
              </div>
              <div className="row_2 mt-3">
                <p className="about">Guardian Pharmacy is an Indian outlet that provides a wide range of pharmaceutical products and services. It offers a wide selection of medicines, health and beauty products, and other health-related items. It also provides a variety of services such as prescription refills, home delivery, and online ordering. The store also offers discounts and loyalty programs to its customers. The staff is friendly and knowledgeable, and the store is well-maintained and organized. Guardian Pharmacy is a great place to get all your pharmaceutical needs taken care of....</p>
              </div>
              <Row>
                <Col md = '6'>
                  <div className="card" style={{background:"linear-gradient(94deg, rgba(255,255,255,1) 0%, rgba(248,242,255,1) 100%)"}}>
                    <div className="card-body">
                      <div className="happening_offer">
                        <div className="order_img">
                            <img src = {order}/>
                          </div>
                          <div className="order_placed">
                            <h6 className='fw-bolder'>Place Order</h6>
                            <div className="offer_text">
                              <img src = {pay} className='img-fluid'/> Save 15%
                            </div>
                          </div>
                          <div className="order_btn w-100 text-end">
                            <div className="btn btn-primary">Order Now</div>
                          </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          </Col>
          <Col md = '4'>
            <div className="card shadow">
              <div className="card-body">
                <div className="coupon_offer_holder">
                  <h4 className="offer_title"> New users get <span className='fw-bolder'>₹500</span> worth of Happening Adspoints on signup</h4>
                  <div className="text-end">
                  <button className='signup_btn btn btn-outline-primary'>Join Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 shadow">
              <div className="card-body">
                <section className='call mb-3'>
                  <h5>Call</h5>
                  <span>+918838232388</span>
                </section>
                <section className="location mb-3">
                  <h5>Address</h5>
                  <span>J-13/1 Rajouri garden, Rajouri Garden, New Delhi<br></br></span>
                  <a>Get Direction <img src = {link} /></a>
                </section>
                <section className="verification">
                  <span className="verification_icon">✔️</span>
                  Verified Listing
                </section>
              </div>
            </div>
          </Col>
          <Col md ='4'>
            <div className="card">
              <div className="card-body">
                <div className="cuisines">
                  <h4 className="cuisine">Allopathic</h4>
                  <h4 className="cuisine">Baby Care</h4>
                  <h4 className="cuisine">Household Needs</h4>
                  <p className="more_text">+6 more</p>
                </div>
                <div className="popular_searches">
                  <h3>Popular Searches</h3>
                  <div className="search_holder">
                    <img src = {searches} className='search_img img-fluid'/>
                      <article>
                        <a className='most_searches'>Mosquito Repellents <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>Sanitary Pads <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>TOOTHPASTE <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>Face Scrub <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>loreal <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>Shampoo <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>Toothbrush <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>Fairness Cream <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>Men Face Wash <img src = {link} className='img-fluid'/></a>
                        <a className='most_searches'>baby Diapers <img src = {link} className='img-fluid'/></a>
                       
                      </article>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md = '4'>
            <div className="card">
              <div className="card-body">
                <section className="home_delivery">
                  <a>
                    <h3 className="heading">
                      Popular Items for Home Delivery
                    </h3>
                  </a>
                  <article className='catalog_container'>
                    <div className="item_container">
                      <a className='d-flex gap-2'>
                        <img src ={tablet1} className=''/>
                        <div className="tablet_details w-75">
                          <h3 className="name">Coversyl 4mg Tablet 10's</h3>
                          <h6 className="desc">You can take Coversyl-AM 4/10 Tablet at any time of day, on empty stomach, but it is best to take it at the same time each day. Keep taking it for as long as advised by your doctor. Even if you feel well, do not stop this medicine on your own because high blood pressure often has no symptoms. If you stop taking it, your condition may get worse. Keeping active with regular exercise, reducing your weight and eating a healthy diet will also help control your blood pressure. Follow your doctor&rsquos advice while taking this medicine.<br /><br />It may cause side effects like ankle swelling, headache, cough, weakness, and tiredness. It may also cause dizziness, so do not drive or do anything that requires mental focus until you know how this medicine affects you. This might raise the level of potassium in the blood, hence avoid potassium rich food or supplements. You may be asked for regular monitoring of blood pressure, kidney function, and electrolytes level while on the treatment.<br /><br />Before taking it, let your doctor know if you have any liver or kidney problems. Pregnant or breastfeeding women should also consult their doctor for advice before taking this medicine. You also need to tell your doctor what other medicines you are taking especially those used to treat high blood pressure or heart conditions.</h6>
                          <h3 className="price_holder">
                            <span className="display_price"> ₹163</span>
                            <span className="actual_price">₹138</span>
                          </h3>
                        </div>
                      </a>
                    </div>
                  </article>
                  <article className='catalog_container'>
                    <div className="item_container">
                      <a className='d-flex gap-2'>
                        <img src ={tablet2} className='img-fluid'/>
                        <div className="tablet_details w-75">
                          <h3 className="name">Coversyl 4mg Tablet 10's</h3>
                          <h6 className="desc">You can take Coversyl-AM 4/10 Tablet at any time of day, on empty stomach, but it is best to take it at the same time each day. Keep taking it for as long as advised by your doctor. Even if you feel well, do not stop this medicine on your own because high blood pressure often has no symptoms. If you stop taking it, your condition may get worse. Keeping active with regular exercise, reducing your weight and eating a healthy diet will also help control your blood pressure. Follow your doctor&rsquos advice while taking this medicine.<br /><br />It may cause side effects like ankle swelling, headache, cough, weakness, and tiredness. It may also cause dizziness, so do not drive or do anything that requires mental focus until you know how this medicine affects you. This might raise the level of potassium in the blood, hence avoid potassium rich food or supplements. You may be asked for regular monitoring of blood pressure, kidney function, and electrolytes level while on the treatment.<br /><br />Before taking it, let your doctor know if you have any liver or kidney problems. Pregnant or breastfeeding women should also consult their doctor for advice before taking this medicine. You also need to tell your doctor what other medicines you are taking especially those used to treat high blood pressure or heart conditions.</h6>
                          <h3 className="price_holder">
                            <span className="display_price"> ₹163</span>
                            <span className="actual_price">₹138</span>
                          </h3>
                        </div>
                      </a>
                    </div>
                  </article>
                  <article className='catalog_container'>
                    <div className="item_container">
                      <a className='d-flex gap-2'>
                        <img src ={tablet3} className='img-fluid'/>
                        <div className="tablet_details w-75">
                          <h3 className="name">Coversyl 4mg Tablet 10's</h3>
                          <h6 className="desc">You can take Coversyl-AM 4/10 Tablet at any time of day, on empty stomach, but it is best to take it at the same time each day. Keep taking it for as long as advised by your doctor. Even if you feel well, do not stop this medicine on your own because high blood pressure often has no symptoms. If you stop taking it, your condition may get worse. Keeping active with regular exercise, reducing your weight and eating a healthy diet will also help control your blood pressure. Follow your doctor&rsquos advice while taking this medicine.<br /><br />It may cause side effects like ankle swelling, headache, cough, weakness, and tiredness. It may also cause dizziness, so do not drive or do anything that requires mental focus until you know how this medicine affects you. This might raise the level of potassium in the blood, hence avoid potassium rich food or supplements. You may be asked for regular monitoring of blood pressure, kidney function, and electrolytes level while on the treatment.<br /><br />Before taking it, let your doctor know if you have any liver or kidney problems. Pregnant or breastfeeding women should also consult their doctor for advice before taking this medicine. You also need to tell your doctor what other medicines you are taking especially those used to treat high blood pressure or heart conditions.</h6>
                          <h3 className="price_holder">
                            <span className="display_price"> ₹163</span>
                            <span className="actual_price">₹138</span>
                          </h3>
                        </div>
                      </a>
                    </div>
                  </article>
                  <article className='catalog_container'>
                    <div className="item_container">
                      <a className='d-flex gap-2'>
                        <img src ={tablet4} className='img-fluid'/>
                        <div className="tablet_details w-75">
                          <h3 className="name">Coversyl 4mg Tablet 10's</h3>
                          <h6 className="desc">You can take Coversyl-AM 4/10 Tablet at any time of day, on empty stomach, but it is best to take it at the same time each day. Keep taking it for as long as advised by your doctor. Even if you feel well, do not stop this medicine on your own because high blood pressure often has no symptoms. If you stop taking it, your condition may get worse. Keeping active with regular exercise, reducing your weight and eating a healthy diet will also help control your blood pressure. Follow your doctor&rsquos advice while taking this medicine.<br /><br />It may cause side effects like ankle swelling, headache, cough, weakness, and tiredness. It may also cause dizziness, so do not drive or do anything that requires mental focus until you know how this medicine affects you. This might raise the level of potassium in the blood, hence avoid potassium rich food or supplements. You may be asked for regular monitoring of blood pressure, kidney function, and electrolytes level while on the treatment.<br /><br />Before taking it, let your doctor know if you have any liver or kidney problems. Pregnant or breastfeeding women should also consult their doctor for advice before taking this medicine. You also need to tell your doctor what other medicines you are taking especially those used to treat high blood pressure or heart conditions.</h6>
                          <h3 className="price_holder">
                            <span className="display_price"> ₹163</span>
                            <span className="actual_price">₹138</span>
                          </h3>
                        </div>
                      </a>
                    </div>
                  </article>
                  <article className='catalog_container'>
                    <div className="item_container">
                      <a className='d-flex gap-2'>
                        <img src ={tablet5} className='img-fluid'/>
                        <div className="tablet_details w-75">
                          <h3 className="name">Coversyl 4mg Tablet 10's</h3>
                          <h6 className="desc">You can take Coversyl-AM 4/10 Tablet at any time of day, on empty stomach, but it is best to take it at the same time each day. Keep taking it for as long as advised by your doctor. Even if you feel well, do not stop this medicine on your own because high blood pressure often has no symptoms. If you stop taking it, your condition may get worse. Keeping active with regular exercise, reducing your weight and eating a healthy diet will also help control your blood pressure. Follow your doctor&rsquos advice while taking this medicine.<br /><br />It may cause side effects like ankle swelling, headache, cough, weakness, and tiredness. It may also cause dizziness, so do not drive or do anything that requires mental focus until you know how this medicine affects you. This might raise the level of potassium in the blood, hence avoid potassium rich food or supplements. You may be asked for regular monitoring of blood pressure, kidney function, and electrolytes level while on the treatment.<br /><br />Before taking it, let your doctor know if you have any liver or kidney problems. Pregnant or breastfeeding women should also consult their doctor for advice before taking this medicine. You also need to tell your doctor what other medicines you are taking especially those used to treat high blood pressure or heart conditions.</h6>
                          <h3 className="price_holder">
                            <span className="display_price"> ₹163</span>
                            <span className="actual_price">₹138</span>
                          </h3>
                        </div>
                      </a>
                    </div>
                  </article>
                  <div className="order_btn">
                    <button className='btn btn-outline-primary w-100'>ORDER NOW</button>
                  </div>
                </section>
              </div>
            </div>

          </Col>
          {/* <Col md = '4'>
            <div className="card">
              <div className="card-body">
                <div className="online_shopping">
                  
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}

export default StoreBody
