import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import React from "react";
import logo from "../../../assis/Logo/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-neutral-100">
      <div className="container px-5 mx-auto flex justify-between items-center py-3">
        <div className="logo flex items-center gap-2">
          <img className="md:w-12 w-9" src={logo} alt="" />
          <h2 className="text-heading font-bold text-gray text-sm md:text-2xl">
            SHAREE'<span className="text-primary">S</span> HOUSE
          </h2>
        </div>
        <ul className="hidden lg:flex gap-5 items-center">
          <NavLink to="/" className=" hover:text-text text-gray font-bold transition-all duration-300 ">
            Home
          </NavLink>
          <NavLink to="/shop"  className=" hover:text-text text-gray font-bold transition-all duration-300 ">
            Shop
          </NavLink>
          <NavLink to="/contact" className=" hover:text-text text-gray font-bold transition-all duration-300 ">
            Contact
          </NavLink>
        </ul>

        <div className="button flex gap-3 justify-between items-center">
          <div className=" relative">
            <AiOutlineShopping className="cursor-pointer w-6 h-6 text-gray hover:text-text transition-all duration-300 " />
            <span className="absolute badge badge-xs bg-primary -top-2 py-2 text-white -right-2">
              0
            </span>
          </div>

          <div className=" relative">
            <AiOutlineHeart className="cursor-pointer w-6 h-6 text-gray hover:text-text transition-all duration-300" />
            <span className="absolute badge badge-xs bg-primary -top-2 py-2 text-white -right-2">
              0
            </span>
          </div>

          <div className="dropdown">
            <BiMenu
              tabIndex={0}
              role="button"
              className="bg-green-50 w-8 h-8 rounded-full cursor-pointer text-gray hover:text-text p-[2px]  duration-300 ease-in hover:bg-primary block  lg:hidden"
            />

            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 -left-52 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>HI</li>
              <li>HI</li>
              <li>HI</li>
              <li>HI</li>
              <li>HI</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
