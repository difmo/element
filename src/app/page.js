import React from 'react'
import MainFrame from './component/MainFrame'
import StyledFrame from './component/SliderFrame'
import OurSolutions from './component/OurSolutions'
import OurServices from './component/OurServices'
import Whoweserve from './component/Whoweserve'
import Ourcustomervoice from './component/Ourcustomervoice'
import WhyPartners from './component/WhyPartners'
import Footer from './component/Footer'

const page = () => {
  return (
    <div className='bg-[#E8F6FC]'>
      <MainFrame/>
      {/* <StyledFrame/> */}
      <OurSolutions/>
      {/* <OurServices/> */}
      <Whoweserve/>
      <Ourcustomervoice/>
      <WhyPartners/>
      {/* <Footer/> */}

       
    </div>
  )
}

export default page