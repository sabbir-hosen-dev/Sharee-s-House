import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage";
import ItemRevew from "../Pages/ItemRevew";
import { useState } from "react";

function AppRoutes() {
  const [shop,setShop] = useState([]);
  const [love,setLove] = useState([]);



  const state = {shop,setShop,love,setLove}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home stateFunction={state} />} />
        <Route path="/item/:id" element={<ItemRevew stateFunction={state}  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
