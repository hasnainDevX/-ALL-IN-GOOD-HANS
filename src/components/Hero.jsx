import React from "react";
import ring from "../assets/ring2.png";
import coffee from "../assets/coffee.png";
import flower from "../assets/flower.png";
import grid from "../assets/grid.png";
import bulbline from "../assets/bulbline.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1752224543110-35faed040b91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464')",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <img
        className=" absolute w-20 h-20 md:w-32 md:h-32 left-[8%] top-[5%] -rotate-12 z-1"
        src={coffee}
        alt="coffee Image"
      />

      <img
        className="absolute w-20 h-20 md:w-32 md:h-32 right-[8%] top-[5%] -rotate-12 z-1"
        src={flower}
        alt="flower Image"
      />

      <img
        className="absolute w-20 h-20 md:w-32 md:h-32 right-[8%] top-[5%] -rotate-12 z-0"
        src={grid}
        alt="grid Image"
      />

      <img
        className="absolute w-20 h-20 md:w-32 md:h-32 left-[8%] top-[5%] -rotate-12 z-0"
        src={grid}
        alt="grid Image"
      />

      <img
        className="hidden md:block absolute w-40 h-40 left-[8%] bottom-[15%] -rotate-12 z-0"
        src={bulbline}
        alt="Bulbline Image"
      />

      <img
        className="md:hidden absolute w-full h-[50%] md:h-[92%] md:w-[65%] md::left-[18%] md::-top-[2%] top-[17%] z-0 opacity-15"
        src={grid}
        alt="grid Image"
      />

      {/* Rotating circular text element - only on large screens */}
      <div className="hidden md:block absolute top-[50vh] right-[20vh] w-52 h-52 z-10 2xl:scale-125">
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "15s" }}
        >
          <svg
            width="224"
            height="224"
            viewBox="0 0 224 224"
            className="absolute inset-0"
          >
            <defs>
              <path
                id="circle"
                d="M 112,112 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
              />
            </defs>
            <text
              fill="white"
              fontSize="16"
              fontWeight="300"
              letterSpacing="3px"
              fontFamily="'Inter', 'Helvetica Neue', sans-serif"
            >
              <textPath href="#circle">
                • All in Good Hans ••• Virtual Assistance Services •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-3 p-4 md:px-0">
        <div className="heading flex justify-center items-center flex-col space-y-3">
          <h1 className="text-5xl sm:text-7xl font-bold  text-center">
            Your <span className="text-yellow-200 font-dancing">To-Do</span>{" "}
            list?{" "}
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase text-center">All in Good Hans</h1>
        </div>
        <div className="text-5xl sm:text-6xl md:text-7xl text-center font-dancing my-3 text-terracotta relative">
          <img
            className="md:w-44 md:h-52 w-32 h-36 absolute -top-11 md:-top-16 md:left-24 left-20"
            src={ring}
            alt="ring"
          />
          The&nbsp;<span> calm</span>&nbsp; behind your chaos.
        </div>
        {/* CTA Button */}
        <div>
          <Link to="about" smooth={true} duration={500} offset={-70}>
          <button
            className="group bg-rust text-sage px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Tell me More
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
      </div>
      {/* Scroll indicator - adjusted for mobile */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white/50 rounded-full mt-1.5 lg:mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
