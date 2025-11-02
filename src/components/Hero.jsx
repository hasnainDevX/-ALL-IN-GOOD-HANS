import React from "react";
import ring from "../assets/ring2.png";
import coffee from "../assets/coffee.png";
import flower from "../assets/flower.png"
import grid from "../assets/grid.png"

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1680680514571-e16201d23e9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=874')",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <img
        className="absolute w-32 h-32 left-[8%] top-[5%] -rotate-12 z-1"
        src={coffee}
        alt="coffee Image"
      />

      <img
        className="absolute w-32 h-32 right-[8%] top-[5%] -rotate-12 z-1"
        src={flower}
        alt="flower Image"
      />

      <img
        className="absolute w-32 h-32 right-[8%] top-[5%] -rotate-12 z-0"
        src={grid}
        alt="grid Image"
      />

      <img
        className="absolute w-32 h-32 left-[8%] top-[5%] -rotate-12 z-0"
        src={grid}
        alt="grid Image"
      />

      <img
        className="absolute h-[92%] w-[65%] left-[18%] -top-[2%] z-0 opacity-30"
        src={grid}
        alt="grid Image"
      />

       {/* Rotating circular text element - only on large screens */}
          <div
            className="block absolute top-[50vh] right-[20vh] w-52 h-52 z-10 2xl:scale-125"
          >
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white space-y-3">
        <div className="heading flex justify-center items-center flex-col space-y-3">
          <h1 className="text-7xl font-bold font-playfair">Your to-do list? </h1>
          <h1 className="text-7xl font-bold uppercase">All in Good Hans</h1>
        </div>
        <div className="text-5xl font-dancing my-3 text-terracotta relative">
          <img
            className="w-32 h-40 absolute -top-12 left-16"
            src={ring}
            alt="ring"
          />
          The&nbsp;<span> calm</span>&nbsp; behind your chaos.
        </div>
        {/* CTA Button */}
        <div>
        <button
          className="group bg-rust text-sage px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3"
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
      </div>
    </div>
  );
};

export default Hero;
