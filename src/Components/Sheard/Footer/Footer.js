import { BsFacebook } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assis/Logo/logo.png";

function Footer() {
  return (
    <div className=" bg-slate-100">
      <footer className="footer container m-auto px-5 text-neutral py-10">
        <aside className="flex flex-col items-center">
          <Link path="/">
            <img className="w-20" src={logo} alt="" />
          </Link>
          <h4 className=" uppercase font-bold text-xl text-gray">
            SHAREE'S House
          </h4>
          <h4 className="font-inter font-bold text-primary text-xl">
            শাড়ির ঘর
          </h4>
        </aside>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <h2>Number: 01789282050</h2>
          <h2>Email: test@gmail.com</h2>
          <div className="grid grid-flow-col gap-4">
            <div className="medi flex gap-2 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61566035229823&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className="text-2xl cursor-pointer transition-all duration-300 hover:text-blue-400" />
              </a>
              <a
                href="https://wa.me/01789282050"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp className="text-2xl cursor-pointer transition-all duration-300 hover:text-green-400" />
              </a>

              <a
                href="https://m.me/61566035229823"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookMessenger className="text-2xl cursor-pointer transition-all duration-300 hover:text-[#00B2FF]" />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
