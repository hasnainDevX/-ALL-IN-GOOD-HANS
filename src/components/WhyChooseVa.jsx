import React from "react";
import { Check } from 'lucide-react';
import { Link } from "react-scroll";

const WhyChooseVa = () => {
  const benefits = [
    {
      title: "Get Your Time and Headspace Back",
      description:
        "Spend your time on strategy, clients, and growth while I manage the admin. You will have more space to breathe and plan ahead.",
    },
    {
      title: "Save Money Without Losing Quality",
      description:
        "No National Insurance, no holiday pay, no office costs. You only pay for the time you actually need.",
    },
    {
      title: "Stay Flexible and Ready for Anything",
      description:
        "Whether you need support for a week, a month, or a full project, I can adapt to your workload, your systems, and your way of working.",
    },
  ];

  return (
    <section className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
      {/* Left - Text Content */}
      <div className="flex items-center justify-center px-8 py-16 lg:px-16 lg:py-28">
        <div className="max-w-xl">
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl text-rust leading-tight mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Hire a Virtual Assistant?
          </h2>

          {/* Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 lg:gap-6">
                <div className="flex-shrink-0 pt-1">
                  <Check className="w-10 h-10 lg:w-12 lg:h-12 text-[#6B9BD1]" />
                </div>
                <div>
                  <h3
                    className="text-xl lg:text-2xl font-bold text-[#3A3331] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-base lg:text-lg text-[#3A3331]/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
            <Link to="services" smooth={true} duration={500} offset={-70}>
            <button
              className="group bg-rust text-white px-4 sm:px-6 py-2 sm:py-3.5 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#ac5135] transition-all duration-300  hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer mt-6"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Explore my Services
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
      </div>

      {/* Right - Image */}
      <div
        className="bg-center bg-cover min-h-[400px] lg:min-h-full"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1723662162058-cbe2746d22ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387')",
        }}
      />
    </section>
  );
};

export default WhyChooseVa;
