import React from 'react'
import Navber from '../Components/Sheard/Navber/Navber'
import TopNavber from '../Components/Sheard/Navber/TopNavber'
import WhatsappIcon from '../Components/PageIcon/WhatsappIcon'
import Footer from '../Components/Sheard/Footer/Footer'
import PremumKatan from '../Components/PremiumKatan/PremumKatan'

function Home({stateFunction}) {
  const {love,setLove,shop,setShop} = stateFunction;
  return (
    <div className=' '>
      <TopNavber  />
      <Navber data={{love,shop}}  />
      <WhatsappIcon />
      <PremumKatan ftion={{setLove,setShop,love,shop}} />
      <Footer />
    </div>
  )
}

export default Home
