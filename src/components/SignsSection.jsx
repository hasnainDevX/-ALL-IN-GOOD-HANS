import React from "react";
import { Link } from "react-scroll";

export default function SignsSection() {
  return (
    <section name="signs" id="signs" className="md:relative py-12 md:py-16 bg-terracotta/60">
      <div className="container px-5">
        <div className="relative flex justify-between items-center">
          {/* Left: Image */}
          <div className="w-full md:flex justify-around flex-col gap-20 hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1666299356682-e65e8854e769?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt=""
              className="w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt=""
              className="w-full "
            />
          </div>

          {/* Right: Content Card - Overlapping */}
          <div className="absolute relative left-5 right-5 md:right-0  md:-ml-32 lg:-ml-40 bg-white p-10 md:p-16 lg:p-20 max-w-2xl shadow-lg md:h-[70%] h-auto">
            <h2
              className="text-2xl md:text-5xl font-light text-amber-950 mb-2 transition-all duration-700"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              SIGNS IT'S TIME TO HAND THINGS OVER
            </h2>
            <div className="space-y-2 mt-8">
              <p
                className="text-sm md:text-xl leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                You spend more time managing emails than working with clients
              </p>
              <p
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                Deadlines or opportunities keep slipping through
              </p>
              <p
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                You are working late to keep up with admin
              </p>
              <p
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                You want to grow but need more time and structure to make it
                happen
              </p>
              <div className="pt-8">
                <p
                  className="text-base md:text-2xl mb-8 leading-relaxed"
                  style={{
                    color: "#2C2C2C",
                    fontWeight: "500",
                  }}
                >
                  If that sounds familiar, it might be time to{" "}
                  <span style={{ fontStyle: "italic", color: "#BF5B3C" }}>
                    Han
                  </span>{" "}
                  things over.
                </p>
                <Link to="contact" smooth={true} seamless={true} duration={500} >
                  <button className="px-10 py-4 rounded-full text-base md:text-lg font-lato font-bold bg-rust text-white cursor-pointer hover:bg-[#ac5135]  transition-all duration-300">
                    Enquire here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
