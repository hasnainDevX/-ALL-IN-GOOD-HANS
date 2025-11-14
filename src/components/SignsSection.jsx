import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import coffee from "../assets/coffee.png";

export default function SignsSection() {
  const imagesRef = useRef([]);
  const cardRef = useRef(null);
  const headingRef = useRef(null);
  const listItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const coffeeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Coffee image - gentle fade in
            if (coffeeRef.current) {
              setTimeout(() => {
                coffeeRef.current.style.opacity = "1";
                coffeeRef.current.style.transform = "translateY(0)";
              }, 0);
            }

            // Side images fade in
            imagesRef.current.forEach((img, idx) => {
              if (img) {
                setTimeout(() => {
                  img.style.opacity = "1";
                  img.style.transform = "translateY(0)";
                }, idx * 150);
              }
            });

            // Card background
            if (cardRef.current) {
              setTimeout(() => {
                cardRef.current.style.opacity = "1";
                cardRef.current.style.transform = "translateY(0)";
              }, 200);
            }

            // Heading
            if (headingRef.current) {
              setTimeout(() => {
                headingRef.current.style.opacity = "1";
                headingRef.current.style.transform = "translateY(0)";
              }, 350);
            }

            // List items staggered
            listItemsRef.current.forEach((item, idx) => {
              if (item) {
                setTimeout(() => {
                  item.style.opacity = "1";
                  item.style.transform = "translateY(0)";
                }, 500 + idx * 100);
              }
            });

            // CTA section
            if (ctaRef.current) {
              setTimeout(() => {
                ctaRef.current.style.opacity = "1";
                ctaRef.current.style.transform = "translateY(0)";
              }, 900);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Set initial states
    if (coffeeRef.current) {
      coffeeRef.current.style.opacity = "0";
      coffeeRef.current.style.transform = "translateY(-20px)";
      coffeeRef.current.style.transition = "opacity 500ms ease-out, transform 500ms ease-out";
    }

    imagesRef.current.forEach((img) => {
      if (img) {
        img.style.opacity = "0";
        img.style.transform = "translateY(30px)";
        img.style.transition = "opacity 600ms ease-out, transform 600ms ease-out";
      }
    });

    if (cardRef.current) {
      const isMobile = window.innerWidth < 768;
      cardRef.current.style.opacity = "0";
      cardRef.current.style.transform = isMobile ? "translateX(100%)" : "translateY(10px)";
      cardRef.current.style.transition = "opacity 1000ms ease-out, transform 1000ms ease-out";
    }

    if (headingRef.current) {
      headingRef.current.style.opacity = "0";
      headingRef.current.style.transform = "translateY(20px)";
      headingRef.current.style.transition = "opacity 600ms ease-out, transform 600ms ease-out";
    }

    listItemsRef.current.forEach((item) => {
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 500ms ease-out, transform 500ms ease-out";
      }
    });

    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(20px)";
      ctaRef.current.style.transition = "opacity 600ms ease-out, transform 600ms ease-out";
    }

    // Observe the section
    const section = document.getElementById("signs");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      name="signs"
      id="signs"
      className="relative py-12 md:py-16 bg-terracotta/70"
    >
      <img
        ref={coffeeRef}
        className="absolute w-20 h-20 md:w-32 md:h-32 right-[3%] top-[2%] -rotate-12 z-1"
        src={coffee}
        alt="coffee Image"
      />

      <div className="container px-5">
        <div className="relative flex justify-between items-center">
          {/* Left: Images */}
          <div className="w-full md:flex justify-around flex-col gap-20 hidden">
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              src="https://plus.unsplash.com/premium_photo-1666299356682-e65e8854e769?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt=""
              className="w-full"
            />
            <img
              ref={(el) => (imagesRef.current[1] = el)}
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt=""
              className="w-full"
            />
          </div>

          {/* Right: Content Card */}
          <div
            ref={cardRef}
            className="absolute relative left-5 right-5 md:right-0 md:-ml-32 lg:-ml-40 bg-white p-10 md:p-16 lg:p-20 max-w-2xl md:shadow-lg md:h-[70%] h-auto shadow-2xl"
          >
            <h2
              ref={headingRef}
              className="text-2xl md:text-5xl font-light text-amber-950 mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              SIGNS IT'S TIME TO HAND THINGS OVER
            </h2>
            <div className="space-y-2 mt-8">
              <p
                ref={(el) => (listItemsRef.current[0] = el)}
                className="text-sm md:text-xl leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                You spend more time managing emails than working with clients
              </p>
              <p
                ref={(el) => (listItemsRef.current[1] = el)}
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                Deadlines or opportunities keep slipping through
              </p>
              <p
                ref={(el) => (listItemsRef.current[2] = el)}
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                You are working late to keep up with admin
              </p>
              <p
                ref={(el) => (listItemsRef.current[3] = el)}
                className="text-sm md:text-lg leading-relaxed"
                style={{ color: "#2C2C2C" }}
              >
                You want to grow but need more time and structure to make it
                happen
              </p>
              <div ref={ctaRef} className="pt-8">
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
                    className="group bg-rust text-white px-4 sm:px-6 py-3.5 sm:py-3.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300 hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3"
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