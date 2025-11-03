import React from "react";
import logo from "../assets/tlogo.png";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Welcome");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Welcome", "About", "Services", "Testimonials"];

  return (
    <div className="navbar-container w-full">
      <div className="flex w-full flex-col">
        <div className="topheadline w-full text-center text-cream-beige bg-terracotta rounded-b-lg">
          <h3>Top Headline - News of exciting offer</h3>
        </div>
        <nav
          className={`sticky top-0 z-50 transition-all duration-500 ease-in-out flex  ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-gradient-to-b from-cream-beige/90 "
          }`}
        >
          <div className="flex-1 hidden md:flex justify-center items-center 0">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    className={`relative cursor-pointer text-base font-medium transition-all duration-300 group`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-rust to-soft-peach transition-all duration-300 ${
                        activeLink === item
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="logo flex- flex justify-center items-center">
            <img
              className="w-24 h-24 flex justify-center items-center bg0"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="icons flex-1 hidden md:flex justify-center gap-12 items-center bg-700">
            <div className="icons flex gap-5 justify-center items-center">
            <div className="icon1">
              <Instagram
                className="text-rust cursor-pointer"
                size={25}
              />
            </div>
            <div className="icon2">
              <Linkedin
                className="text-rust cursor-pointer"
                size={25}
              />
            </div>
            <div className="icon3">
              <Mail
                className="text-rust  cursor-pointer"
                size={25}
              />
            </div>
            </div>
           <button
          className="group bg-rust text-sage px-2 sm:px-4 py-3 sm:py-3 rounded-full font-medium  sm:text-sm uppercase tracking-[0.15em] hover:bg-[#ac5135] text-cream-beige transition-all duration-300 shadow-lg hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3 text-xs"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
