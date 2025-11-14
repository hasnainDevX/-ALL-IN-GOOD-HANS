import React from "react";
import logo from "../assets/tlogo.png";
import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navItemsRef = useRef([]);
  const iconsRef = useRef(null);
  const buttonRef = useRef(null);
  const logoRef = useRef(null);

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

  // Initial page load animations
  useEffect(() => {
    if (!hasAnimated) {
      // Animate logo
      if (logoRef.current) {
        logoRef.current.style.opacity = "0";
        setTimeout(() => {
          logoRef.current.style.opacity = "1";
        }, 100);
      }

      // Animate nav items with stagger
      navItemsRef.current.forEach((item, idx) => {
        if (item) {
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.opacity = "1";
          }, 200 + idx * 100);
        }
      });

      // Animate icons
      if (iconsRef.current) {
        iconsRef.current.style.opacity = "0";
        setTimeout(() => {
          iconsRef.current.style.opacity = "1";
        }, 600);
      }

      // Animate button
      if (buttonRef.current) {
        buttonRef.current.style.opacity = "0";
        setTimeout(() => {
          buttonRef.current.style.opacity = "1";
        }, 700);
      }

      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    }
  };

  const navItems = ["Welcome", "About", "Services", "Pricing"];

  return (
    <div className="navbar-container w-full font-lato">
      <div className="flex w-full flex-col">
        <div className="topheadline w-full text-center text-cream-beige bg-terracotta rounded-b-lg">
          <h3>Free 1:1 Consultation with a Virtual Assistant</h3>
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
              {navItems.map((item, idx) => (
                <li 
                  key={item}
                  ref={(el) => (navItemsRef.current[idx] = el)}
                  className="transition-opacity duration-700"
                >
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`relative cursor-pointer text-base font-medium transition-all duration-300 group`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-terracotta to bg-rust duration-300 ${
                        item == "Welcome"
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div 
            ref={logoRef}
            className="logo flex justify-center items-center transition-opacity duration-700"
          >
            <img
              className="w-24 h-24 flex justify-center items-center"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="icons flex-1 flex justify-center gap-12 items-center">
            <div 
              ref={iconsRef}
              className="icons flex gap-5 justify-center items-center transition-opacity duration-700"
            >
              <a href="https://www.instagram.com/allingoodhans" target="_blank" className="icon1">
                <Instagram className="text-rust cursor-pointer hover:opacity-70 transition-opacity duration-300" size={25} />
              </a>
              <a href="#" target="_blank" className="icon2">
                <Linkedin className="text-rust cursor-pointer hover:opacity-70 transition-opacity duration-300" size={25} />
              </a>
              <a href="mailto:allingoodhans@gmail.com" className="icon3">
                <Mail className="text-rust cursor-pointer hover:opacity-70 transition-opacity duration-300" size={25} />
              </a>
            </div>
            <Link to="contact" smooth={true} duration={500}>
              <button
                ref={buttonRef}
                className="group bg-rust text-sage px-2 sm:px-4 py-3 sm:py-3 rounded-full font-medium text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] text-cream-beige transition-opacity duration-700 shadow-lg hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3"
                style={{ fontFamily: '"Lato", sans-serif' }}
              >
                Contact Me
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
            </Link>
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
          className="fixed inset-0 bg-app-black/40 backdrop-blur-sm z-[45] md:hidden animate-fadeIn"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-cream-beige/95 to-white shadow-2xl z-[55] md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rust to-transparent opacity-30"></div>
        <div className="absolute top-20 left-6 w-8 h-8 border-l-2 border-t-2 border-rust/20"></div>
        <div className="absolute bottom-32 right-6 w-12 h-12 border-r-2 border-b-2 border-terracotta/20"></div>

        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button 
            onClick={closeMobileMenu}
            className="text-rust hover:text-terracotta transition-all duration-300 p-2 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full pt-24 pb-8 px-8">
          {/* Menu Items with staggered fade-in */}
          <div className="flex flex-col space-y-1">
            {["About", "Services", "Pricing", "Packages", "Contact"].map((item, idx) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-4 text-gray-800 hover:text-rust hover:translate-x-2 transition-all duration-300 font-light tracking-wider text-sm uppercase border-b border-rust/10 cursor-pointer ${
                  isMobileMenuOpen ? 'animate-slideInRight' : ''
                }`}
                style={{
                  animationDelay: isMobileMenuOpen ? `${idx * 100}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                <span className="flex items-center">
                  <span className="w-0 h-px bg-rust transition-all duration-300 group-hover:w-4 mr-2"></span>
                  {item}
                </span>
              </button>
            ))}
          </div>
          
          {/* Contact Button */}
          <div 
            className={`mt-auto ${isMobileMenuOpen ? 'animate-fadeInUp' : ''}`}
            style={{
              animationDelay: isMobileMenuOpen ? '500ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-rust/30 to-transparent mb-6"></div>
            <button 
              onClick={closeMobileMenu}
              className="block w-full text-center bg-rust text-cream-beige py-3 px-6 rounded-full hover:bg-terracotta transition-all duration-300 font-light text-sm uppercase tracking-wider shadow-lg"
            >
              Book a Call
            </button>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-6">
              <a href="https://www.instagram.com/allingoodhans" target="_blank" className="text-rust hover:text-terracotta transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" className="text-rust hover:text-terracotta transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:allingoodhans@gmail.com" className="text-rust hover:text-terracotta transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;