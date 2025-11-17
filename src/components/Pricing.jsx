
import React from "react";
import { useEffect, useRef } from "react";
import coffee from "../assets/coffee.png";
import flower from "../assets/flower.png";
import bulbline from "../assets/bulbline.png";
import { Link } from "react-scroll";

const Pricing = () => {
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

  const packages = [
    {
      name: "Ad Hoc Support",
      hours: "£30 per hour",
      points: [
        "Testing how we work together to solve your problem",
        "Minimum 2 hours billed to the nearest 15 minutes",
        "New clients will be required to pay a £60 deposit.",
      ],
      cta: "Enquire",
    },
    {
      name: "Ongoing Support",
      hours: "Available in 5, 10, 15, or 20-hour monthly packages",
      points: [
        "Invoiced upfront each month",
        "Unused hours cannot be carried over",
        "Ideal for clients seeking consistent, reliable support with guaranteed availability",
      ],
      cta: "Enquire",
    },
    {
      name: "Project based support",
      hours: "Price on enquiry",
      points: [
        "Designed for clearly defined, outcome-focused projects",
        "Suitable for event planning, system setup, digital organisation, and more",
        "Fixed project fee based on scope, timelines, and deliverables",
      ],
      cta: "Enquire",
    },
  ];

  return (
    <section id="pricing" name="pricing" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Floating decorative images */}
      <img
        className="absolute w-20 h-20 md:w-32 md:h-32 left-[5%] md:top-[5%] top-[2%] -rotate-12 z-1"
        src={coffee}
        alt="coffee Image"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <img
        className="absolute w-20 h-20 md:w-32 md:h-32 right-[5%] md:top-[5%] top-[2%] -rotate-12 z-1"
        src={flower}
        alt="flower Image"
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

      <div className="textpart max-w-4xl mx-auto space-y-3 px-5 mb-10 lg:mb-12">
        <h2
          ref={(el) => (elementsRef.current[0] = el)}
          data-delay="0"
          className="text-5xl sm:text-6xl lg:text-7xl text-rust leading-tight text-center font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pricing
        </h2>
        <p
          ref={(el) => (elementsRef.current[1] = el)}
          data-delay="150"
          className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center"
        >
          I offer a range of flexible packages to suit your needs.
        </p>
        <div ref={(el) => (elementsRef.current[2] = el)} data-delay="300">
          <img className="w-20 h-20 mx-auto" src={bulbline} alt="bulbline" />
        </div>
      </div>

      {/* packages section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 lg:py-28"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1752224543110-35faed040b91?ixlib=rb-4.0.0&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="packages grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10 px-5">
          {packages.map((pkg, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[3 + index] = el)}
              data-delay={index * 150}
              className="bg-cream-beige px-12 py-16 flex flex-col items-center text-center relative md:mb-0 mb-4"
            >
              {/* Number Badge */}
              <div className="absolute -top-8 w-20 h-20 rounded-full bg-white flex items-center justify-center font-bold text-2xl mb-6 text-deep-brown shadow-lg font-lato">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-800 mb-2 font-dancing">
                {pkg.name}
              </h3>

              {/* Hours */}
              <p className="text-deep-brown italic font-semibold mb-6">
                {pkg.hours}
              </p>

              {/* Description Points */}
              <ul className="text-gray-700 mb-8 flex-grow space-y-2 text-left font-lato">
                {pkg.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-rust font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="bg-coral-500 hover:bg-coral-600 font-bold py-2 px-8 rounded-full transition-colors bg-rust text-cream-beige hover:bg-[#ac5135] cursor-pointer">
                  {pkg.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;