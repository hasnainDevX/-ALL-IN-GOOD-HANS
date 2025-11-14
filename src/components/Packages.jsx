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
        ref.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "Inbox and Calendar Reset",
      subtitle: "Regain control of your inbox, schedule, and peace of mind.",
      points: [
        "Dedicated inbox checks",
        "Prioritising and organising emails",
        "Tracking actions and follow ups",
        "Scheduling and diary management",
        "Optional CRM updates or data entry",
      ],
    },
    {
      name: "Digital Declutter Starter",
      subtitle: "Create calm and clarity in your digital space.",
      points: [
        "Google Drive migration and organisation",
        "Archiving and deleting outdated files",
        "Folder structure design and clear naming",
      ],
    },
    {
      name: "Operational Assets Setup",
      subtitle:
        "Bring consistency and professionalism to your business operations.",
      points: [
        "SOP creation and documentation",
        "Onboarding guides and training templates",
        "Organised, shareable document library",
      ],
    },
  ];

  return (
    <div id="packages" name="packages" className="py-20 px-5 relative overflow-hidden">
      {/* Floating decorative images */}
      <img
        className="absolute w-20 h-20 md:w-32 md:h-32 left-[5%] top-[0%] -rotate-12 z-1"
        src={hearts}
        alt="grid decoration"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <img
        className="absolute w-20 h-20 md:w-32 md:h-32 right-[5%] top-[0%] -rotate-12 z-1"
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

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2
            ref={(el) => (elementsRef.current[0] = el)}
            data-delay="0"
            className="text-5xl sm:text-6xl lg:text-7xl text-rust leading-tight text-center font-semibold font-playfair"
          >
            Packages & Projects
          </h2>
          <p
            ref={(el) => (elementsRef.current[1] = el)}
            data-delay="150"
            className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center"
          >
            Every business is different. These examples show how support can
            look in practice, but everything is tailored to your needs.
          </p>
          <div ref={(el) => (elementsRef.current[2] = el)} data-delay="300">
            <img className="w-20 h-20 mx-auto" src={bulbline} alt="bulbline" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[3 + index] = el)}
              data-delay={index * 150}
              className="relative md:flex"
            >
              {/* Scalloped top decoration */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-16">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <path
                    d="M0,60 Q25,0 50,60 Q75,0 100,60 L100,60 L0,60 Z"
                    fill="#fff085"
                  />
                </svg>
              </div>

              <div className="bg-[#FFF9ED] rounded-3xl px-12 py-16 flex flex-col w-full">
                <h3 className="text-3xl text-terracotta mb-3 text-center font-lato font-semibold">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm mb-8 text-center italic">
                  {project.subtitle}
                </p>

                <ul className="space-y-3 mb-8 md:flex-grow">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#B85C3E] font-bold text-lg">
                        •
                      </span>
                      <span className="text-gray-800 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="contact" smooth={true} duration={500} offset={200}>
                  <button className="w-full capitalize bg-[#9BB5D6] text-white font-bold py-3 rounded-full text-sm tracking-wide hover:bg-[#7A9CC1] transition-colors cursor-pointer">
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