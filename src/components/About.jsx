import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { client } from "../SanityClient";
import bulbline from "../assets/bulbline.png";

const About = () => {
  const cardRefs = useRef([]);
  const [aboutContent, setAboutContent] = useState({
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch content from Sanity FIRST
  useEffect(() => {
    client
      .fetch('*[_type == "aboutContent"][0]')
      .then((fetchedData) => {
        if (fetchedData) {
          setAboutContent({
            heading: fetchedData.heading || aboutContent.heading,
            description: fetchedData.description || aboutContent.description,
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching about content:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Run animation ONLY after content is loaded
  useEffect(() => {
    if (isLoading) return; // Don't run animation until content loads

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, idx * 250);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(30px)";
        ref.style.transition = "opacity 1s ease, transform 1s ease";
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [isLoading]); // Re-run when loading is complete

  return (
    <section name="about" id="about" className="w-full py-12 md:pt-20 md:pb-32 bg-white border-b border-cream-beige">
      <div className="py-12 md:pt-12 md:pb-0 px-5 bg-white text-center relative">
        {/* Rotating circular text */}
        <div className="hidden md:block absolute -top-[10vh] right-[20vh] w-52 h-52 z-10 2xl:scale-125">
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
                fill="black"
                fontSize="16"
                fontWeight="300"
                letterSpacing="3px"
                fontFamily="'Playfair Display', 'Helvetica Neue', sans-serif"
              >
                <textPath href="#circle">
                  • All in Good Hans ••• Virtual Assistance Services •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <h2
          ref={(el) => (cardRefs.current[0] = el)}
          className="text-4xl md:text-5xl font-light text-amber-950 mb-2"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {aboutContent.heading}
        </h2>
        <div className="w-16 h-px bg-amber-400 mx-auto my-4"></div>
        <p
          ref={(el) => (cardRefs.current[1] = el)}
          className="md:text-sm max-w-3xl mx-auto leading-relaxed px-2 text-base lg:text-lg text-[#3A3331]/80"
        >
          {aboutContent.description}
        </p>
        <img className="w-20 h-20 mx-auto" src={bulbline} alt="bulbline" />
      </div>

      <Link to="signs" smooth={true} duration={500} offset={-70}>
        <button
          className="group bg-rust text-white px-4 sm:px-6 py-3.5 sm:py-3.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300 hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer my-3 mx-auto block"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Do i need a VA?
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
    </section>
  );
};

export default About;