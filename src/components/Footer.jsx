import React from "react";
import { Instagram, Facebook, Mail } from "lucide-react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Footer = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Packages", href: "#packages" },
  ];

  const instagramImages = [
    image1,
    image2,
    image3,
  ];

  return (
    <footer className="bg-cream-beige/40 pt-16 pb-4 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Navigate Column */}
          <div>
            <h3
              className="text-4xl mb-8 text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Navigate
            </h3>
            <nav className="space-y-4 mb-8">
              {navLinks.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.href}
                    className="text-[#B8956A] text-lg hover:text-[#9d7d54] inline-block border-b-2 border-[#B8956A]"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>
            <button className="bg-rust text-white font-bold py-3 px-12 mb-8 hover:bg-terracotta cursor-pointer">
              CONTACT
            </button>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3
              className="text-4xl mb-8 text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Privacy Policy
            </h3>
            <div className="text-deep-brown">
              <div className="italic">Click below to see the Privacy Policy</div>
              <a className="underline" href="https://drive.google.com/file/d/1vNlJQP8s29n5Eba6rz0ShupGZZ1HLyva/view?usp=drivesdk">
                Privacy Policy
              </a>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              All In Good Hans supports busy professionals and entrepreneurs
              with virtual assistant services, operational setup, and
              organisational systems to help them streamline and grow their
              businesses.
            </p>
          </div>

          {/* Instagram Column */}
          <div>
            <h3
              className="text-4xl mb-8 text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              @allIngoodHans
            </h3>
            <div className="grid grid-cols-3 gap-2 mb-8">
              {instagramImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full "
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/allingoodhans"
                className="w-10 h-10 bg-rust rounded-full flex items-center justify-center hover:bg-terracotta"
                target="_blank"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/1Gso45Wwfw/silent"
                target="_blank"
                className="w-10 h-10 bg-rust rounded-full flex items-center justify-center hover:bg-terracotta"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:allingoodhans@gmail.com"
                className="w-10 h-10 bg-rust rounded-full flex items-center justify-center hover:bg-terracotta"
                target="_blank"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm text-center">All in Good Hans © 2025 | All Rights Reserved </p>
    </footer>
  );
};

export default Footer;
