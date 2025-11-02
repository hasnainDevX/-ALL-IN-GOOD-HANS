import React from "react";
import logo from "../assets/tlogo.png";
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar-container w-full">
      <div className="flex w-full flex-col">
        <div className="topheadline w-full text-center text-cream-beige bg-terracotta rounded-b-lg">
          <h3>Top Headline - News of exciting offer</h3>
        </div>
        <div className="logoiconspart w-full flex justify-center items-center px-4 py-2 bg-cream-beige">
          <div className="search flex-1 flex justify-center items-center">
            <ul className="flex justify-center items-center gap-8 bg-dark-blue text-white text-xl p-4">
              <li className="navitem text-deep-brown cursor-pointer hover:underline ">
                <h1>Home</h1>
              </li>
              <li className="navitem text-deep-brown cursor-pointer hover:underline ">
                <h1>About</h1>
              </li>
              <li className="navitem text-deep-brown cursor-pointer hover:underline ">
                <h1>Services</h1>
              </li>
              <li className="navitem text-deep-brown cursor-pointer hover:underline ">
                <h1>Contact</h1>
              </li>
            </ul>
          </div>
          <div className="logo flex-1 flex justify-center items-center">
            <img className="w-24 h-24" src={logo} alt="logo" />
          </div>
          <div className="icons flex-1 flex justify-center items-center gap-4">
            <div className="icon1">
              <Instagram className="text-cream-beige bg-rust p-1.5 hover:bg-rust/90 rounded-2xl cursor-pointer" size={40} />
            </div>
            <div className="icon2">
              <Linkedin className="text-cream-beige bg-rust p-1.5 hover:bg-rust/90 rounded-2xl cursor-pointer" size={40} />
            </div>
            <div className="icon3">
              <Mail className="text-cream-beige bg-rust p-1.5 hover:bg-rust/90 rounded-2xl cursor-pointer" size={40} />
            </div>
          </div>
        </div>
        {/* <div className="mainnav">
           
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
