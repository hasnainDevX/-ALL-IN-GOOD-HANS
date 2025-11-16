import React from "react";
import logo from "../assets/tlogo.png";
import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Animate menu in
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      document.body.style.overflow = "hidden";
    } else if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    }
  };

  const navItems = ["Welcome", "About", "Services", "Pricing"];

  return (
    <>
      <div className="navbar-container w-full font-lato">
        <div className="flex w-full flex-col">
          {/* Top Headline */}
          <div className="topheadline w-full text-center text-cream-beige bg-terracotta rounded-b-lg py-2">
            <h3 className="text-sm md:text-base">
              Free 1:1 Consultation with a Virtual Assistant
            </h3>
          </div>

          {/* DESKTOP NAVBAR */}
          <nav
            className={`sticky top-0 z-50 transition-all duration-500 ease-in-out hidden md:flex ${
              isScrolled
                ? "bg-cream-beige/95 backdrop-blur-md shadow-lg"
                : "bg-cream-beige"
            }`}
          >
            <div className="flex-1 flex justify-center items-center">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="relative cursor-pointer text-deep-brown text-base font-medium transition-all duration-300 group hover:text-rust"
                    >
                      {item}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-terracotta to-rust transition-all duration-300 ${
                          item === "Welcome"
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
                alt="All In Good Hans Logo"
              />
            </div>

            <div className="icons flex-1 flex justify-center gap-8 items-center">
              <div className="icons flex gap-5 justify-center items-center">
                <Instagram
                  className="text-rust cursor-pointer hover:text-deep-brown transition-colors duration-300 hover:scale-110 transform"
                  size={25}
                />
                <Linkedin
                  className="text-rust cursor-pointer hover:text-deep-brown transition-colors duration-300 hover:scale-110 transform"
                  size={25}
                />
                <Mail
                  className="text-rust cursor-pointer hover:text-deep-brown transition-colors duration-300 hover:scale-110 transform"
                  size={25}
                />
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="group bg-rust text-cream-beige px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-deep-brown transition-all duration-300 shadow-lg hover:shadow-xl"
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
            </div>
          </nav>

          {/* MOBILE NAVBAR */}
          <nav
            className={`sticky top-0 z-50 transition-all duration-500 ease-in-out flex md:hidden items-center justify-between px-4 ${
              isScrolled
                ? "bg-cream-beige/95 backdrop-blur-md shadow-lg"
                : "bg-cream-beige"
            }`}
          >
            <div className="logo flex justify-center items-center p-2">
              <img className="w-16 h-16" src={logo} alt="logo" />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-4 text-rust"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-deep-brown/40 backdrop-blur-sm z-[45] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-[280px] bg-cream-beige shadow-2xl z-[55] md:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={closeMobileMenu}
            className="text-deep-brown hover:text-rust transition-all duration-300 p-2 cursor-pointer"
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
              onClick={() => scrollToSection("welcome")}
              className="block w-full text-left py-4 text-deep-brown hover:text-rust hover:translate-x-2 transition-all duration-300 font-medium tracking-wider text-sm uppercase border-b border-terracotta/20 cursor-pointer"
            >
              Welcome
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-4 text-deep-brown hover:text-rust hover:translate-x-2 transition-all duration-300 font-medium tracking-wider text-sm uppercase border-b border-terracotta/20 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-4 text-deep-brown hover:text-rust hover:translate-x-2 transition-all duration-300 font-medium tracking-wider text-sm uppercase border-b border-terracotta/20 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left py-4 text-deep-brown hover:text-rust hover:translate-x-2 transition-all duration-300 font-medium tracking-wider text-sm uppercase border-b border-terracotta/20 cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="block w-full text-left py-4 text-deep-brown hover:text-rust hover:translate-x-2 transition-all duration-300 font-medium tracking-wider text-sm uppercase border-b border-terracotta/20 cursor-pointer"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-4 text-deep-brown hover:text-rust hover:translate-x-2 transition-all duration-300 font-medium tracking-wider text-sm uppercase border-b border-terracotta/20 cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                scrollToSection("contact");
                closeMobileMenu();
              }}
              className="block w-full text-center bg-rust text-cream-beige py-3 px-6 rounded-full hover:bg-deep-brown transition-all duration-300 font-semibold text-sm uppercase tracking-wider"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;