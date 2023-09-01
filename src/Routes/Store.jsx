import React from 'react'
import Header from '../Pages/Header'
import Magician from '../Pages/Magician'
import Footer2 from '../Pages/Footer2'
import BreadCrumb from '../Pages/BreadCrumb'
import StoreBody from '../Pages/StoreBody'

const Store = () => {
  return (
    <section className="store">
        <Header/>
        <BreadCrumb/>
        <StoreBody/>
        <Magician/>
        <Footer2/>
    </section>
  )
}

export default Store
