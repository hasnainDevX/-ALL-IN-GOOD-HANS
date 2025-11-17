import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import coffee from "../assets/coffee.png";
import flower from "../assets/flower.png";
import grid from "../assets/grid.png";
import bulbline from "../assets/bulbline.png";
import theticborder from "../assets/theticborder.png";
import hearts from "../assets/hearts.png";

const Packages = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "Inbox and Calendar Management",
      subtitle: "£450/month",
      points: [
        "Twice-daily inbox checks (Mon–Fri): inbox reviewed and cleared at strategic times to maintain control and responsiveness",
        "Professional correspondence: simple holding messages and standard replies sent to ensure timely, consistent communication",
        "Custom email organisation: tailored folders and priority categories for a streamlined, easy-to-manage inbox",
        "Meeting coordination: client and internal meetings scheduled with all required details handled",
        "Time considerations included: travel and preparation time incorporated into all scheduling",
        "Weekly overview: concise report outlining the week ahead, key priorities, and any scheduling conflicts",
        "Optional Add-On - £100/month Task extraction into your project management system: actions identified in emails added to your PM tool with clear deadlines and assigned owners ",
      ],
    },
    {
      name: "Digital Declutter Starter",
      subtitle:
        "Create calm and clarity in your digital space. — £199 (fixed price)",
      points: [
        "Google Drive migration & organisation — streamline and structure your files for easy access",
        "Archiving & deletion — remove outdated or redundant files to reduce clutter",
        "Folder structure & naming system — consistent, intuitive, and scalable",
      ],
    },
  ];

  return (
    <div
      id="packages"
      name="packages"
      className="py-24 px-5 relative overflow-hidden"
    >
      {/* Floating decorative images */}
      <img
        className="absolute w-20 h-20 md:w-28 md:h-28 left-[5%] top-[0%] -rotate-12 z-1 opacity-90"
        src={hearts}
        alt="grid decoration"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      <img
        className="absolute w-20 h-20 md:w-28 md:h-28 right-[5%] top-[0%] -rotate-12 z-1 opacity-90"
        src={theticborder}
        alt="border decoration"
        style={{
          animation: "float 6s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
      `}</style>

      <div className="max-w-4xl mx-auto md:px-10">
        <div className="text-center mb-20 space-y-3">
          <h2
            ref={(el) => (elementsRef.current[0] = el)}
            data-delay="0"
            className="text-5xl sm:text-6xl text-rust leading-tight font-playfair font-semibold"
          >
            Packages & Projects
          </h2>
          <p
            ref={(el) => (elementsRef.current[1] = el)}
            data-delay="150"
            className="text-gray-700 text-[15px] max-w-xl mx-auto leading-relaxed"
          >
            Every business is different. These examples show how support can
            look in practice, but everything is tailored to your needs.
          </p>
          <div ref={(el) => (elementsRef.current[2] = el)} data-delay="300">
            <img
              className="w-16 h-16 mx-auto opacity-80"
              src={bulbline}
              alt="bulbline"
            />
          </div>
        </div>

        {/* Elegant single-column stacked layout */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[3 + index] = el)}
              data-delay={index * 200}
              className="relative"
            >
              {/* Scalloped decoration */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-16 opacity-95">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <path
                    d="M0,60 Q25,0 50,60 Q75,0 100,60 L100,60 L0,60 Z"
                    fill="#fff085"
                  />
                </svg>
              </div>

              {/* Main Card */}
              <div className="bg-[#FFF9ED] rounded-[32px] px-12 py-20 flex flex-col w-full shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#F2E9D8]">
                <h3 className="text-3xl text-terracotta mb-6 text-center font-playfair font-semibold tracking-tight leading-snug">
                  {project.name}
                </h3>

                <p className="text-gray-700 text-[14.5px] mb-10 text-center italic leading-relaxed max-w-lg mx-auto opacity-90">
                  {project.subtitle}
                </p>

                {/* soft divider */}
                <div className="w-full h-px bg-[#E8DCC7] mb-10"></div>

                <ul className="space-y-5 mb-12">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#B85C3E] font-bold text-base leading-[1] mt-[3px] opacity-80">
                        •
                      </span>
                      <span className="text-gray-800 text-[14.5px] leading-[1.9] tracking-[0.1px] opacity-95">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="contact" smooth={true} duration={500} offset={200}>
                  <button className="w-full bg-rust text-white font-semibold py-3.5 rounded-full text-sm tracking-wide hover:bg-rust/90 transition-colors cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    I want this!
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
