import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import leaves from "../assets/element2.png";
import bulbline from "../assets/bulbline.png";

const Services = () => {
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);
  const buttonRef = useRef(null);
  const decorRef = useRef(null);

  const services = [
    {
      number: "01",
      title: "Administrative Support",
      tagline: "Your behind-the-scenes powerhouse",
      description:
        "When your inbox never stops and your to-do list keeps growing, I help bring everything back under control.",
      includes: [
        "Inbox and diary management",
        "Document creation & proofreading",
        "Data entry & spreadsheets",
        "Filing systems",
        "Client communication",
        "Meeting support & scheduling",
      ],
      ideal:
        "Perfect for solo business owners, consultants, and small teams who need steady admin support.",
      image: bulbline,
    },
    {
      number: "02",
      title: "Operations Support",
      tagline: "Systems that set you free",
      description:
        "Strong systems keep a business running smoothly. I help you build and maintain clear processes so your operations feel easy to manage.",
      includes: [
        "Streamlining workflows",
        "Creating SOPs",
        "Tracking tasks & projects",
        "Organising digital files",
        "Onboarding support",
        "Training materials",
      ],
      ideal:
        "Perfect for growing small businesses that need more structure and clear systems.",
      image: bulbline,
    },
    {
      number: "03",
      title: "Event Support",
      tagline: "From planning to perfection",
      description:
        "From planning to follow-up, I look after the details so your events run smoothly and feel effortless.",
      includes: [
        "Venue & supplier research",
        "Managing RSVPs",
        "Coordinating logistics",
        "Creating event documents",
        "On-the-day support",
        "Post-event evaluation",
      ],
      ideal:
        "Perfect for businesses hosting workshops, launches, or client events who need reliable coordination.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Header animation
            if (target === headerRef.current) {
              setTimeout(() => {
                target.style.opacity = "1";
                target.style.transform = "translateY(0)";
              }, 0);
            }
            
            // Service blocks
            serviceRefs.current.forEach((service, idx) => {
              if (target === service) {
                setTimeout(() => {
                  service.style.opacity = "1";
                  service.style.transform = "translateY(0)";
                }, 100 + idx * 200);
              }
            });
            
            // Button
            if (target === buttonRef.current) {
              setTimeout(() => {
                target.style.opacity = "1";
                target.style.transform = "translateY(0)";
              }, 0);
            }
            
            // Decorative element
            if (target === decorRef.current) {
              setTimeout(() => {
                target.style.opacity = "1";
              }, 0);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    // Set initial states
    if (headerRef.current) {
      headerRef.current.style.opacity = "0";
      headerRef.current.style.transform = "translateY(30px)";
      headerRef.current.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
      observer.observe(headerRef.current);
    }

    serviceRefs.current.forEach((service) => {
      if (service) {
        service.style.opacity = "0";
        service.style.transform = "translateY(25px)";
        service.style.transition = "opacity 600ms ease-out, transform 600ms ease-out";
        observer.observe(service);
      }
    });

    if (buttonRef.current) {
      buttonRef.current.style.opacity = "0";
      buttonRef.current.style.transform = "translateY(20px)";
      buttonRef.current.style.transition = "opacity 600ms ease-out, transform 600ms ease-out";
      observer.observe(buttonRef.current);
    }

    if (decorRef.current) {
      decorRef.current.style.opacity = "0";
      decorRef.current.style.transition = "opacity 800ms ease-out";
      observer.observe(decorRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      name="services"
      id="services"
      className="relative bg-terracotta py-24 px-6 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative Elements */}
      <img
        ref={decorRef}
        className="absolute w-20 h-20 md:w-96 md:h-96 right-[5%] md:-right-28 md:top-0 top-[1%] -rotate-12 z-1"
        src={leaves}
        alt="leaves Image"
      />
      <div className="absolute top-20 left-10 opacity-10">
        <Sparkles className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Sparkles className="w-24 h-24 text-white" />
      </div>

      <div className="absolute top-[10%] left-5 opacity-15">
        <div className="w-96 h-96 bg-white/5 rounded-full" />
      </div>

      <div className="absolute top-[38%] right-5 opacity-15">
        <div className="w-96 h-96 bg-white/5 rounded-full" />
      </div>

      <div className="absolute bottom-[20%] left-5 opacity-15">
        <div className="w-96 h-96 bg-white/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-32 lg:mb-36">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-3 relative capitalize font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              What I support with
            </h2>
            <div className="w-[60%] h-px bg-white/40 mx-auto my-4"></div>
          </div>
        </div>

        {services.map((service, index) => (
          <React.Fragment key={index}>
            {/* Single Service Block */}
            <div
              ref={(el) => (serviceRefs.current[index] = el)}
              className={`grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start px-4 md:px-12 mb-20 ${
                index % 2 === 0 ? "" : "md:grid-flow-dense"
              }`}
            >
              {/* Number & Title Column */}
              <div
                className={`md:col-span-5 space-y-6 ${
                  index % 2 === 0 ? "" : "md:col-start-8"
                }`}
              >
                <div className="space-y-5">
                  <div className="relative inline-block">
                    <div className="text-cream-beige text-8xl md:text-9xl font-light leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.number}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>

                  <p className="text-2xl md:text-3xl text-[#FFF4E0]" style={{ fontFamily: "Yellowtail, cursive" }}>
                    {service.tagline}
                  </p>

                  <div className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent" />
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`md:col-span-7 space-y-8 ${
                  index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"
                }`}
              >
                <p className="text-white/95 text-lg md:text-xl leading-relaxed font-light" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {service.description}
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-white/40" />
                    <p className="text-white/80 uppercase tracking-widest text-sm font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
                      What's included
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex gap-3 items-start group">
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-white/90 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lato', sans-serif" }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/20">
                  <p className="text-white/85 italic leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lato', sans-serif" }}>
                    {service.ideal}
                  </p>
                </div>
              </div>
            </div>

            {/* Bulbline Divider (Between Services) */}
            {index !== services.length - 1 && (
              <div
                className="w-full h-28 md:h-40 my-20 bg-repeat-x bg-center opacity-20"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "contain",
                }}
              />
            )}
          </React.Fragment>
        ))}
        <div ref={buttonRef}>
          <Link to="pricing" smooth={true} duration={500} offset={-70}>
            <button className="group bg-white text-terracotta shadow-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white/90 hover:shadow-xl cursor-pointer block mx-auto mt-24" style={{ fontFamily: "'Lato', sans-serif" }}>
              Take me to Pricing
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
    </section>
  );
};

export default Services;