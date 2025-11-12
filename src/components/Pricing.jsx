import React from "react";
import coffee from "../assets/coffee.png";
import flower from "../assets/flower.png";
import bulbline from "../assets/bulbline.png";
import { Link } from "react-scroll";
const Pricing = () => {
  const packages = [
    {
      name: "Ad Hoc Support",
      hours: "£30 per hour",
      points: [
        "Ideal for one-off tasks or testing our service",
        "Minimum 2 hours billed to the nearest 15 minutes",
        "New clients receive a £60 upfront deposit option",
      ],
      cta: "Enquire",
    },
    {
      name: "A Happy Medium",
      hours: "10 hours per week",
      points: [
        "Our most popular package for regular support",
        "Perfect for managing a high volume of tasks",
        "Valuable extension to your business operations",
      ],
      cta: "Enquire",
    },
    {
      name: "The Life Changer",
      hours: "20 hours per week",
      points: [
        "Perfect package for those with busy schedules",
        "Heavily involved support across your business",
        "Gives you time to focus on what you do best",
      ],
      cta: "Enquire",
    },
  ];
  return (
    <section id="pricing" name="pricing" className="py-28 lg:py-36 relative">
      <img
        className=" absolute w-20 h-20 md:w-32 md:h-32 left-[5%] md:top-[5%] top-[2%] -rotate-12 z-1"
        src={coffee}
        alt="coffee Image"
      />
      <img
        className=" absolute w-20 h-20 md:w-32 md:h-32 right-[5%] md:top-[5%] top-[2%] -rotate-12 z-1"
        src={flower}
        alt="flower Image"
      />
      <div className="textpart max-w-4xl mx-auto space-y-3 px-5 mb-10 lg:mb-12">
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl text-rust leading-tight text-center font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pricing
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed transition-all duration-700 text-center">
          Detailed pricing information will be provided here soon. Stay tuned!
          Detailed pricing information will be provided here soon. Stay tuned!
          Detailed pricing
        </p>
      <img className="w-20 h-20 mx-auto" src={bulbline} alt="bulbline" />
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
              className="bg-cream-beige px-12 py-16 flex flex-col items-center text-center relative md:mb-0 mb-4"
            >
              {/* Number Badge */}
              <div className="absolute -top-8 w-20 h-20 rounded-full bg-white flex items-center justify-center font-bold text-2xl  mb-6  -rust text-deep-brown shadow-lg font-lato">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-800 mb-2 font-dancing ">
                {pkg.name}
              </h3>

              {/* Hours */}
              <p className="text-blue-400 italic font-semibold mb-6">
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
