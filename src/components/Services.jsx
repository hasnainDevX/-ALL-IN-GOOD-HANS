import React from "react";
import { Sparkles } from "lucide-react";
import bulbline from "../assets/bulbline.png";
import coffee from "../assets/coffee.png";
import flower from "../assets/flower.png";
import grid from "../assets/grid.png";  
import tlogo from "../assets/tlogo.png";

const Services = () => {
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
      image: bulbline,
    },
  ];

  return (
    <section className="relative bg-rust py-24 px-6 md:py-32 lg:py-40 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-5">
        <Sparkles className="w-32 h-32 text-yellow-200" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5">
        <Sparkles className="w-24 h-24 text-yellow-200" />
      </div>

         <div className="absolute top-[10%] left-5 opacity-10">
        <img src={tlogo} alt="" />
      </div>

         <div className="absolute top-[35%] right-5 opacity-10">
        <img src={tlogo} alt="" />
      </div>

       <div className="absolute bottom-[16%] left-5 opacity-10">
        <img src={tlogo} alt="" />
      </div>


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-32 lg:mb-36">
          <div className="inline-block">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-yellow-200 mb-3 relative capitalize"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What I support with
            </h2>
             <div className="w-[60%] h-px bg-terracotta mx-auto my-4"></div>
          </div>
        </div>

        {services.map((service, index) => (
          <React.Fragment key={index}>
            {/* Single Service Block */}
            <div
              className={`grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start px-12 ${
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
                    <div
                      className="text-cream-beige text-8xl md:text-9xl font-light leading-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.number}
                    </div>
                  </div>

                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl text-[#E89B7E] leading-tight"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: "500",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-2xl md:text-3xl text-yellow-200/90"
                    style={{ fontFamily: "'Yellowtail', cursive" }}
                  >
                    {service.tagline}
                  </p>

                  <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-200/50 to-transparent" />
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`md:col-span-7 space-y-8 ${
                  index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"
                }`}
              >
                <p
                  className="text-white text-lg md:text-2xl leading-relaxed font-light"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {service.description}
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-yellow-200/30" />
                    <p className="text-yellow-200/70 uppercase tracking-widest font-medium">
                      What's included
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex gap-3 items-start group">
                        <div className="w-1 h-1 rounded-full bg-[#E89B7E] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-white/90 leading-relaxed text-sm md:text-base font-light">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <p
                    className="text-white italic leading-relaxed text-sm md:text-base font-light"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {service.ideal}
                  </p>
                </div>
              </div>
            </div>

            {/* Bulbline Divider (Between Services) */}
            {index !== services.length - 1 && (
              <div
                className="w-full h-10 md:h-14 my-20 bg-repeat-x bg-center opacity-90"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "contain",
                }}
              />
            )}
          </React.Fragment>
        ))}

         <button
              className="group bg-cream-beige text-deep-brown shadow-2xl shadow-deep-brown px-4 sm:px-6 py-3.5 sm:py-3.5 rounded-full text-xs uppercase tracking-[0.15em]  transition-all duration-300  hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer block mx-auto mt-24"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
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
      </div>
    </section>
  );
};

export default Services;
