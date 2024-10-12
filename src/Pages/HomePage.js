import React from 'react'
import Navber from '../Components/Sheard/Navber/Navber'
import TopNavber from '../Components/Sheard/Navber/TopNavber'
import WhatsappIcon from '../Components/PageIcon/WhatsappIcon'
import Footer from '../Components/Sheard/Footer/Footer'
import PremumKatan from '../Components/PremiumKatan/PremumKatan'

function Home() {
  return (
    <div className=' '>
      <TopNavber />
      <Navber />
      <WhatsappIcon />
      <PremumKatan />
      <Footer />
    </div>
  )
}

export default Home
