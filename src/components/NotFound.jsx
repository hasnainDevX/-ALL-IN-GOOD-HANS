import React from 'react';
import { useState, useEffect } from 'react';

export default function NotFoundPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#ECDAC8' }}>
      {/* Soft gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#D1A693' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: '#D8966F' }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#955749" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="text-center max-w-3xl">
          
          {/* 404 with elegant simplicity */}
          <div className="mb-8">
            <h1 
              className={`text-[140px] md:text-[180px] font-light leading-none tracking-tight transition-all duration-1000 ${isLoading ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
              style={{ 
                color: '#955749',
                fontFamily: "Playfair Display, serif",
              }}
            >
              404
            </h1>
          </div>

          {/* Elegant minimal divider */}
          <div className="mb-8 flex items-center justify-center">
            <div className="h-px w-20" style={{ backgroundColor: '#BF5B3C' }} />
          </div>

          {/* Heading */}
          <h2 
            className="text-4xl md:text-5xl font-light mb-4 tracking-wide"
            style={{ 
              color: '#955749',
              fontFamily: "Playfair Display, serif",
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            Page Not Found
          </h2>

          {/* Elegant subline */}
          <p 
            className="text-sm md:text-base font-light mb-12 px-4 max-w-xl mx-auto leading-relaxed"
            style={{ 
              color: '#955749',
              opacity: 0.8,
              animation: 'fadeInUp 0.8s ease-out 0.3s both'
            }}
          >
            The page you're looking for has gracefully stepped away. Let's help you find your way back to what matters.
          </p>

          {/* Decorative ornament */}
          <div className="mb-12 flex justify-center" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#D8966F" strokeWidth="1" opacity="0.6"/>
              <circle cx="20" cy="20" r="12" stroke="#BF5B3C" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="20" cy="20" r="3" fill="#D8966F" opacity="0.5"/>
            </svg>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}
          >
            {/* Primary button */}
            <a 
              href="/"
              className="group relative px-10 py-3.5 text-sm font-light uppercase tracking-[0.15em] transition-all duration-500"
              style={{ color: '#ECDAC8' }}
            >
              <div 
                className="absolute inset-0 rounded-sm transition-all duration-500 group-hover:shadow-lg"
                style={{ backgroundColor: '#955749' }}
              />
              <span className="relative flex items-center gap-2 justify-center">
                Return Home
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Secondary button */}
            <a 
              href="/#contact"
              className="group px-10 py-3.5 text-sm font-light uppercase tracking-[0.15em] rounded-sm border transition-all duration-500 hover:shadow-lg"
              style={{ 
                borderColor: '#BF5B3C',
                color: '#955749',
                borderWidth: '1px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D8966F';
                e.currentTarget.style.color = '#ECDAC8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#955749';
              }}
            >
              Contact
            </a>
          </div>

          {/* Footer */}
          <div 
            className="pt-12 border-t"
            style={{ borderColor: '#D1A693', borderOpacity: 0.3, animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
          >
            <p 
              className="text-xs font-light tracking-widest uppercase"
              style={{ color: '#955749', opacity: 0.7 }}
            >
              All in Good Hans • Virtual Assistance Services
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}