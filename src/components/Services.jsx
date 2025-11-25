import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import { client } from "../SanityClient";
import leaves from "../assets/element2.png";
import bulbline from "../assets/bulbline.png";

const Services = () => {
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);
  const buttonRef = useRef(null);
  const decorRef = useRef(null);

  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .fetch('*[_type == "servicesSection"][0]')
      .then((data) => {
        if (data) setContent(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;

            if (target === headerRef.current) {
              setTimeout(() => {
                target.style.opacity = "1";
                target.style.transform = "translateY(0)";
              }, 0);
            }

            serviceRefs.current.forEach((service, idx) => {
              if (target === service) {
                setTimeout(() => {
                  service.style.opacity = "1";
                  service.style.transform = "translateY(0)";
                }, 100 + idx * 200);
              }
            });

            if (target === buttonRef.current) {
              setTimeout(() => {
                target.style.opacity = "1";
                target.style.transform = "translateY(0)";
              }, 0);
            }

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
  }, [isLoading]);

  return (
    <section name="services" id="services" className="relative bg-terracotta py-24 px-6 md:py-32 lg:py-40 overflow-hidden">
      <img ref={decorRef} className="absolute w-20 h-20 md:w-96 md:h-96 right-[5%] md:-right-28 md:top-0 top-[1%] -rotate-12 z-1" src={leaves} alt="leaves" />
      
      <div className="absolute top-20 left-10 opacity-10"><Sparkles className="w-32 h-32 text-white" /></div>
      <div className="absolute bottom-20 left-10 opacity-10"><Sparkles className="w-24 h-24 text-white" /></div>
      <div className="absolute top-[10%] left-5 opacity-15"><div className="w-96 h-96 bg-white/5 rounded-full" /></div>
      <div className="absolute top-[38%] right-5 opacity-15"><div className="w-96 h-96 bg-white/5 rounded-full" /></div>
      <div className="absolute bottom-[20%] left-5 opacity-15"><div className="w-96 h-96 bg-white/5 rounded-full" /></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-16 md:mb-32 lg:mb-36">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-3 relative capitalize font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.heading}
            </h2>
            <div className="w-[60%] h-px bg-white/40 mx-auto my-4"></div>
          </div>
        </div>

        {content.services?.map((service, index) => (
          <React.Fragment key={index}>
            <div ref={(el) => (serviceRefs.current[index] = el)} className={`grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start px-4 md:px-12 mb-20 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
              <div className={`md:col-span-5 space-y-6 ${index % 2 === 0 ? "" : "md:col-start-8"}`}>
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

              <div className={`md:col-span-7 space-y-8 ${index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"}`}>
                <p className="text-white/95 text-lg md:text-xl leading-relaxed font-light" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {service.description}
                </p>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-white/40" />
                    <p className="text-white/80 uppercase tracking-widest text-sm font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>What's included</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                    {service.includes?.map((item, idx) => (
                      <div key={idx} className="flex gap-2 items-start group">
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-white/90 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lato', sans-serif" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/20">
                  <p className="text-white/85 italic leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lato', sans-serif" }}>{service.ideal}</p>
                </div>
              </div>
            </div>

            {index !== content.services.length - 1 && (
              <div className="w-full h-28 md:h-40 my-20 bg-repeat-x bg-center opacity-20" style={{ backgroundImage: `url(${bulbline})`, backgroundSize: "contain" }} />
            )}
          </React.Fragment>
        ))}

        <div ref={buttonRef}>
          <Link to="pricing" smooth={true} duration={500} offset={-70}>
            <button className="group bg-white text-terracotta shadow-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white/90 hover:shadow-xl cursor-pointer block mx-auto mt-24" style={{ fontFamily: "'Lato', sans-serif" }}>
              Take me to Pricing
              <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;