import { BsFacebook } from "react-icons/bs";  
import React from "react";

function TopNavber() {
  return (
    <div className=" bg-green-50">
      <div className="flex px-5 container mx-auto justify-between items-center ">
        <div className="">
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61566035229823&mibextid=ZbWKwL" rel="noreferrer">
          <BsFacebook className="text-blue-400 cursor-pointer" />
          </a>
        </div>
        <div className="">Phone: 01789282050</div>
      </div>
    </div>
  );
}

export default TopNavber;
