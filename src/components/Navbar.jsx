import React from "react";
import logo from "../assets/tlogo.png";
import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Welcome");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(sectionId);
      closeMobileMenu();
    }
  };

  const navItems = ["Welcome", "About", "Services", "Testimonials"];

  return (
    <div className="navbar-container w-full font-lato">
      <div className="flex w-full flex-col">
        <div className="topheadline w-full text-center text-cream-beige bg-terracotta rounded-b-lg">
          <h3>Top Headline - News of exciting offer</h3>
        </div>

        {/* DESKTOP NAVBAR */}
        <nav
          className={`sticky top-0 z-50 transition-all duration-500 ease-in-out hidden md:flex ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-gradient-to-b from-cream-beige/90 "
          }`}
        >
          <div className="flex-1 flex justify-center items-center">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`relative cursor-pointer text-base font-medium transition-all duration-300 group`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-terracotta to bg-rust duration-300 ${
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
          <div className="logo flex justify-center items-center">
            <img
              className="w-24 h-24 flex justify-center items-center"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="icons flex-1 flex justify-center gap-12 items-center">
            <div className="icons flex gap-5 justify-center items-center">
              <div className="icon1">
                <Instagram className="text-rust cursor-pointer" size={25} />
              </div>
              <div className="icon2">
                <Linkedin className="text-rust cursor-pointer" size={25} />
              </div>
              <div className="icon3">
                <Mail className="text-rust cursor-pointer" size={25} />
              </div>
            </div>
            <button
              className="group bg-rust text-sage px-2 sm:px-4 py-3 sm:py-3 rounded-full font-medium text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] text-cream-beige transition-all duration-300 shadow-lg hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3"
              style={{ fontFamily: '"Lato", sans-serif' }}
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

        {/* MOBILE NAVBAR */}
        <nav
          className={`sticky top-0 z-50 transition-all duration-500 ease-in-out flex md:hidden items-center justify-between px-4 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-gradient-to-b from-cream-beige/90 "
          }`}
        >
          <div className="logo flex justify-center items-center p-2">
            <img
              className="w-16 h-16"
              src={logo}
              alt="logo"
            />
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-4 text-rust"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-app-black/40 backdrop-blur-sm z-[45] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-off-white shadow-2xl z-[55] md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button 
            onClick={closeMobileMenu}
            className="text-app-black hover:text-sage transition-all duration-300 p-2 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="relative w-5 h-5">
                <span className="absolute w-5 h-0.5 bg-current transform rotate-45 top-1/2 -translate-y-1/2 transition-all duration-300"></span>
                <span className="absolute w-5 h-0.5 bg-current transform -rotate-45 top-1/2 -translate-y-1/2 transition-all duration-300"></span>
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => scrollToSection("About")}
              className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("Services")}
              className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("Pricing")}
              className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("Testimonials")}
              className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("Contact")}
              className="block w-full text-left py-4 text-app-black hover:text-sage hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-soft cursor-pointer"
            >
              Contact
            </button>
          </div>
          
          <div className="mt-8">
            <button 
              onClick={closeMobileMenu}
              className="block w-full text-center bg-mint text-off-white py-3 px-6 rounded-full hover:bg-sage transition-all duration-300 font-light text-sm uppercase tracking-wider"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;