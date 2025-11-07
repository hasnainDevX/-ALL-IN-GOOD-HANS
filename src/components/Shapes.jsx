import React from 'react';

const ShapeCards = () => {
  const cards = [
    {
      title: "START UP COACHING",
      price: "$999",
      image: "https://images.unsplash.com/photo-1663524789641-ac21f6ee2301?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      text: "I'm a Virtual Assistant based in York, UK (Geordie at heart) who helps small business owners find calm in the admin chaos."
    },
    {
      title: "BUSINESS ACCELERATOR",
      price: "$1,999",
      image: "https://plus.unsplash.com/premium_photo-1666299356682-e65e8854e769?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      text: "I take care of the background work so you can focus on growth, creativity, and the parts of your business that bring you joy."
    },
    {
      title: "COMPLETE UPGRADE",
      price: "$4,999",
      image: "https://plus.unsplash.com/premium_photo-1683309563937-5ec089c1ebd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      text: "If you are spinning plates, missing opportunities, or just need more headspace, you are in the right place."
    }
  ];

  return (
    <div className="w-full bg-white px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-96 h-72 md:w-full md:h-96 mb-8">
                <svg viewBox="0 0 300 320" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <clipPath id={`archCenter-${idx}`}>
                      <path d="M 40 320 L 40 100 Q 40 40, 150 35 Q 260 40, 260 100 L 260 320 Z" />
                    </clipPath>
                  </defs>
                  <image 
                    href={card.image}
                    x="0" y="0" width="300" height="320"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#archCenter-${idx})`}
                  />
                </svg>
              </div>
              <p className="text-xs font-light tracking-widest text-amber-500 mb-3 uppercase">& Offer</p>
              <h3 
                className="text-center text-xl md:text-2xl font-semibold text-amber-950 mb-4 leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em' }}
              >
                {card.title}
              </h3>
              <p className="text-center md:text- font-light text-gray-600 leading-relaxed max-w-xs">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShapeCards;