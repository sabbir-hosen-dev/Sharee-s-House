import React from 'react'
import Navber from '../Components/Sheard/Navber/Navber'
import TopNavber from '../Components/Sheard/Navber/TopNavber'
import WhatsappIcon from '../Components/PageIcon/WhatsappIcon'
import Footer from '../Components/Sheard/Footer/Footer'

function Home() {
  return (
    <div className=' '>
      <TopNavber />
      <Navber />
      <WhatsappIcon />
      <div className="min-h-[70vh]"></div>
      <Footer />
    </div>
  )
}

export default Home
