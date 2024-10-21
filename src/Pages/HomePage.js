import React from 'react'
import WhatsappIcon from '../Components/PageIcon/WhatsappIcon'
import Footer from '../Components/Sheard/Footer/Footer'
import PremumKatan from '../Components/PremiumKatan/PremumKatan'
import Carusol from '../Components/Sheard/Carusol/Carusol'
import Header from '../Components/Header/Header'



function Home({stateFunction}) {
  const {love,setLove,shop,setShop} = stateFunction;
  return (
    <div className=' '>
      <Header data={{love,shop}} />
      <WhatsappIcon />

      <Carusol />
      <PremumKatan ftion={{setLove,setShop,love,shop}} />
      <Footer />
    </div>
  )
}

export default Home
