import React from "react";

const getstarted = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="textpart max-w-4xl mx-auto space-y-3 px-5 mb-16 lg:mb-24">
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl text-rust leading-tight text-center font-semibold capitalize"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          How to get Started
        </h2>
      </div>
      {/* packages section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 lg:py-28 h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557485061-e9bd0cb8d052?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=866')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

export default getstarted;
