import React from "react";
import { Check, Star } from "lucide-react";

const getstarted = () => {
  const steps = [
    "Decide what you would like to delegate",
    "Get in touch by email or through the contact form.",
    "I will confirm how I can help and suggest next steps.",
    "We will have a short discovery call to chat it through.",
    "If we both agree it is a good fit, I will send your booking form and contract.",
    "Once signed and your deposit is received, we can get started."
  ];
  return (
    <section
      id="achievements"
      className="py-20 relative md:mt-[4rem] flex items-center justify-center bg-center bg-cover"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1557485061-e9bd0cb8d052?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD%3D&auto=format&fit=crop&q=80&w=866")`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-terracotta opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white max-w-6xl mx-auto px-6">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight text-center font-semibold capitalize font-playfair mb-16">
          How to get Started?
        </h2>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex gap-5 items-start group transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="relative">
                  <Star 
                    fill="#D8966F" 
                    className="w-8 h-8 text-[#ffeed3] transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" 
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xl lg:text-2xl text-white leading-relaxed font-light">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default getstarted;
