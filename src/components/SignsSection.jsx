import React , { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import coffee from "../assets/coffee.png";
import { gsap } from "gsap";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SignsSection() {
  const sectionRef = useRef(null);
  const coffeeRef = useRef(null);
  const contentRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Coffee image gentle rotation
      gsap.to(coffeeRef.current, {
        translateY: 10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Content card fade up (contained within viewport)
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30, // Small movement to avoid overflow
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);
      return () => ctx.revert();
  }, []);

  return (
    <section
      name="signs"
      id="signs"
      className="relative py-12 md:py-16 bg-terracotta/70"
      ref={sectionRef}
    >
        <img
        ref={coffeeRef}
        className=" absolute w-20 h-20 md:w-32 md:h-32 right-[3%] top-[2%] -rotate-12 z-1"
        src={coffee}
        alt="coffee Image"
      />

      <div className="container px-5">
        <div className="relative flex justify-between items-center">
          {/* Left: Image */}
          <div className="w-full md:flex justify-around flex-col gap-20 hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1666299356682-e65e8854e769?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt=""
              className="w-full"
              ref={imagesRef}
            />
            <img
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt=""
              className="w-full "
              ref={imagesRef}
            />
          </div>

          {/* Right: Content Card - Overlapping */}
          <div ref={contentRef} className="absolute relative left-0 right-5 md:right-0 md:-ml-32 lg:-ml-40 bg-white  p-10 md:p-16 lg:p-20 max-w-2xl shadow-lg md:h-[70%] h-auto">
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
              <ArrowBigRight className=" text-rust inline-block mr-2"/>

                You spend more time managing emails than working with clients
              </p>
              <p
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                <ArrowBigRight className=" text-rust inline-block mr-2"/>
                Deadlines or opportunities keep slipping through
              </p>
              <p
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
               <ArrowBigRight className=" text-rust inline-block mr-2"/>
                You are working late to keep up with admin
              </p>
              <p
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                <ArrowBigRight className=" text-rust inline-block mr-2"/>
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
                <Link to="contact" smooth={true} seamless={true} duration={500}>
                  <button
                    className="group bg-rust text-white px-4 sm:px-6 py-3.5 sm:py-3.5  rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300  hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Enquire Here 
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
          </div>
        </div>
      </div>
    </section>
  );
}
