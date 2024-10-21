import React, { useEffect, useState } from 'react'
import TopNavber from './Navber/TopNavber'
import Navber from "./Navber/Navber";

function Header({data}) {
  const {love,shop} = data

  const [fixed,setFixed] = useState(false);
  
  const handleScroll = () => {
    if(window.scrollY > 50){
      setFixed(true)
    }else{
      setFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll" ,handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[]);

  return (
    <header className={`${fixed ? "nav-fixd" : " "}`}>
     {!fixed &&  <TopNavber />}
      <Navber data={{love,shop,fixed}} />
    </header>
  )
}

export default Header
