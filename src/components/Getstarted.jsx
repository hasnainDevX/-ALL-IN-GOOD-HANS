import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import bulbline from "../assets/bulbline.png";
import logo from "../assets/tlogo.png";
import arrow from "../assets/arrow.png";
import arrow2 from "../assets/arrow2.png";
import element2 from "../assets/element2.png";
import { client } from "../SanityClient";

const GetStarted = () => {
  const elementsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState({});

  // Fetch content from Sanity
  useEffect(() => {
    client
      .fetch('*[_type == "getstarted"][0]')
      .then((data) => {
        if (data) {
          setContent(data);
        }
      })
      .catch((err) => console.error("Error fetching getstarted content:", err))
      .finally(() => setIsLoading(false));
  }, []);

  // Run animations ONLY after content loads
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(30px)";
        ref.style.transition =
          "opacity 700ms ease-out, transform 700ms ease-out";
        observer.observe(ref);
      }
    });

    // Observe the section
    const section = document.getElementById("getstarted");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isLoading]);

  // Show loading state
  if (isLoading) {
    return (
      <section
        id="getstarted"
        name="getstarted"
        className="py-28 lg:py-36 relative overflow-hidden"
      >
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-gray-600 text-lg">Loading getstarted...</p>
        </div>
      </section>
    );
  }

  // Show error state if no data - FIXED: Check for actual content fields
  if (!content || Object.keys(content).length === 0) {
    return (
      <section
        id="getstarted"
        name="getstarted"
        className="py-28 lg:py-36 relative overflow-hidden"
      >
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-gray-600 text-lg">Reload the Page</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="getstarted"
      className="py-24 lg:py-32 bg relative w-full overflow-hidden"
    >
      {/* Logo with floating animation */}
      <img
        className="absolute w-20 h-20 md:w-48 md:h-48 right-[5%] md:right-0 md:top-0 top-[1%] -rotate-12 z-1"
        src={element2}
        alt="leaves Image"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
      `}</style>

      {/* Rotating circular text element - only on large screens */}
      <div className="hidden md:block absolute w-52 h-52 z-10 2xl:scale-125">
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

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="textpart max-w-4xl mx-auto space-y-3 px-5 mb-10 lg:mb-12">
            <h2
              ref={(el) => (elementsRef.current[0] = el)}
              data-delay="0"
              data-direction="center"
              className="text-5xl sm:text-6xl lg:text-7xl text-rust leading-tight text-center font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.heading || "Get Started with Your Virtual Assistant"}
            </h2>
            <p
              ref={(el) => (elementsRef.current[1] = el)}
              data-delay="150"
              data-direction="center"
              className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center"
            >
              {content.subheading ||
                "I'm here to help you turn chaos into calm"}
            </p>
            <div
              ref={(el) => (elementsRef.current[2] = el)}
              data-delay="300"
              data-direction="center"
            >
              <img
                className="w-20 h-20 mx-auto"
                src={bulbline}
                alt="bulbline"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 1 - From Left */}
      <div className="mb-6 w-full flex flex-col md:flex-row justify-start px-6 md:px-20">
        <div
          ref={(el) => (elementsRef.current[3] = el)}
          data-delay="0"
          data-direction="left"
          className="bg-terracotta w-full md:w-2xl md:max-w-2xl rounded-3xl px-4 py-4 lg:px-12 lg:py-10"
        >
          <p
            className="text-white text-base lg:text-xl text-center font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {content.step1 || "Decide what you would like to delegate"}
          </p>
        </div>
        {/* Arrow 1 */}
        <div
          ref={(el) => (elementsRef.current[4] = el)}
          data-delay="200"
          data-direction="center"
          className="flex justify-center md:ml-16 my-4 md:mb-6"
        >
          <img
            src={arrow2}
            alt=""
            className="size-20 md:size-24 rotate-45 md:rotate-0"
          />
        </div>
      </div>

      {/* Step 2 - From Right */}
      <div className="mb-6 w-full flex flex-col md:flex-row justify-end px-6 md:px-20">
        {/* Arrow 2 - Order changed for mobile */}
        <div
          ref={(el) => (elementsRef.current[5] = el)}
          data-delay="200"
          data-direction="center"
          className="flex justify-center md:mr-16 my-4 md:mb-6 order-2 md:order-1"
        >
          <img
            src={arrow}
            alt=""
            className="size-20 md:size-24 -rotate-45 md:rotate-0"
          />
        </div>
        <div
          ref={(el) => (elementsRef.current[6] = el)}
          data-delay="0"
          data-direction="right"
          className="bg-terracotta w-full md:w-2xl md:max-w-2xl rounded-3xl px-4 py-4 lg:px-12 lg:py-10 order-1 md:order-2"
        >
          <p
            className="text-white text-base lg:text-xl text-center font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {content.step2 || "Get in touch by email or through the contact form"}
          </p>
        </div>
      </div>

      {/* Step 3 - From Left */}
      <div className="mb-6 w-full flex flex-col md:flex-row justify-start px-6 md:px-20">
        <div
          ref={(el) => (elementsRef.current[7] = el)}
          data-delay="0"
          data-direction="left"
          className="bg-terracotta w-full md:w-2xl md:max-w-2xl rounded-3xl px-4 py-4 lg:px-12 lg:py-10"
        >
          <p
            className="text-white text-base lg:text-xl text-center font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {content.step3 || "We will have a short discovery call to chat it through"}
          </p>
        </div>
        {/* Arrow 3 */}
        <div
          ref={(el) => (elementsRef.current[8] = el)}
          data-delay="200"
          data-direction="center"
          className="flex justify-center md:ml-16 my-4 md:mb-6"
        >
          <img
            src={arrow2}
            alt="Arrow Image All in Good Hans"
            className="size-20 md:size-24 rotate-45 md:rotate-0"
          />
        </div>
      </div>

      {/* Step 4 - From Right */}
      <div className="mb-6 w-full flex flex-col md:flex-row justify-end px-6 md:px-20">
        <div
          ref={(el) => (elementsRef.current[9] = el)}
          data-delay="0"
          data-direction="right"
          className="bg-terracotta w-full md:w-2xl md:max-w-2xl rounded-3xl px-4 py-4 lg:px-12 lg:py-10"
        >
          <p
            className="text-white text-base lg:text-xl text-center font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {content.step4 || "If we both agree it is a good fit, I will send your booking form. Once signed and your deposit is received, we can get started"}
          </p>
        </div>
      </div>

      <div
        ref={(el) => (elementsRef.current[10] = el)}
        data-delay="0"
        data-direction="center"
        className="cta flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-20 md:mt-28 px-6"
      >
        <Link to="contact" smooth={true} duration={500} offset={-70}>
          <button
            className="group bg-rust text-white px-6 sm:px-6 py-3.5 sm:py-3.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300 hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer w-full md:w-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {content.ctaButton || "Contact Me"}
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
        <a href="mailto:allingoodhans@gmail.com" className="w-l md:w-auto">
          <button
            className="group bg-rust text-white px-6 sm:px-6 py-3.5 sm:py-3.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300 hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer w-full md:w-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {content.emailButton || "Email"}
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
        </a>
      </div>
    </section>
  );
};

export default GetStarted;