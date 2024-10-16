import React from "react";
// import { useParams } from "react-router-dom";
import TopNavber from "../Components/Sheard/Navber/TopNavber";
import WhatsappIcon from "../Components/PageIcon/WhatsappIcon";
import Footer from "../Components/Sheard/Footer/Footer";
import Navber from '../Components/Sheard/Navber/Navber';

function ItemRevew({stateFunction}) {
  const {love,shop} = stateFunction;
  // const { id } = useParams();
  return (
    <div>
      <TopNavber />
      <Navber data={{love,shop}}  />
      <WhatsappIcon />
      
      <Footer />
    </div>
  );
}

export default ItemRevew;
