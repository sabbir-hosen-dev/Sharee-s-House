import { AiOutlineHeart } from "react-icons/ai"; 
import { AiOutlineShopping } from "react-icons/ai"; 
import { BiMenu } from "react-icons/bi"; 
import React from 'react'
import logo from "../../../assis/Logo/logo.png"
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container  px-5 lg:px-20 mx-auto flex justify-between items-center py-2">
      <div className="logo flex items-center gap-2">
          <img className="w-12" src={logo} alt="" />
        <h2 className="text-heading font-bold text-gray text-2xl">SHAREE'<span className="text-primary">S</span> HOUSE
        </h2>
      </div>
      <ul className="hidden lg:flex gap-5 items-center">
        <NavLink className=" hover:text-text text-gray font-bold transition-all duration-300 ">Home</NavLink>
        <NavLink className=" hover:text-text text-gray font-bold transition-all duration-300 ">Shop</NavLink>
        <NavLink className=" hover:text-text text-gray font-bold transition-all duration-300 ">Contact</NavLink>
      </ul>

      <div className="button flex gap-3 justify-between items-center">
        <div className=" relative">
        <AiOutlineShopping className="cursor-pointer w-6 h-6 text-gray hover:text-text transition-all duration-300 " />
        <span className="absolute badge badge-xs bg-primary -top-2 py-2 text-white -right-2">0</span>
        </div>
          
          
          <div className=" relative">
          <AiOutlineHeart  tabindex="0" role="button"  className="cursor-pointer w-6 h-6 text-gray hover:text-text transition-all duration-300" />
          <span className="absolute badge badge-xs bg-primary -top-2 py-2 text-white -right-2">0</span>
          </div>


        <div className="dropdown"> 
            <BiMenu  className="bg-green-50 w-8 h-8 rounded-full cursor-pointer text-gray hover:text-text p-[2px]  duration-300 ease-in hover:bg-primary   lg:hidden" />
 

          <ul
            tabIndex="0"
            className="menu menu-lg dropdown-content bg-base-100 -left-52 rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li className="hover:font-bold text-heading font-bold cursor-pointer duration-300 transition-all hover:text-heading">
              <a href="#home">Home</a>
            </li>
            <li className="hover:font-bold duration-300 transition-all hover:text-heading">
              <a href="#services">Services</a>
            </li>
            <li className="hover:font-bold duration-300 transition-all hover:text-heading">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:font-bold duration-300 transition-all hover:text-heading">
              <a href="#blog">Blog</a>
            </li>
            <li className="hover:font-bold duration-300 transition-all hover:text-heading">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
