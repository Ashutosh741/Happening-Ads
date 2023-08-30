import React from 'react'
import Header from '../Pages/Header'
import Essential from '../Pages/Essential'
import BestSeller from '../Pages/BestSeller'
import HealthFitness from '../Pages/HealthFitness.jsx'
import AmazingOffer from '../Pages/AmazingOffer'
import QuickFilters from '../Pages/QuickFilters'
import Magician from '../Pages/Magician'
import Footer2 from '../Pages/Footer2'
const Pharmacy = () => {
  return (
    <div>
      <Header/>
      <Essential/>
      <BestSeller/>
      {/* <HealthFitness/> */}
      <AmazingOffer/>
      <QuickFilters/>
      <Magician/>
        <Footer2/> 
    </div>
  )
}

export default Pharmacy
