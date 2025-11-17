import React, { useState } from "react";
import { Instagram, Facebook, Mail, X, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import achievementImage from "../assets/certificate.png";

const Footer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Packages", href: "#packages" },
  ];

  const instagramImages = [image1, image2, image3];
  const achievement = achievementImage; // Replace with actual path later
  const allImages = [...instagramImages,achievementImage ];

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(allImages[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  return (
    <>
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

            {/* Privacy Policy Column */}
            <div className="space-y-4">
              <div className="text-deep-brown">
                {/* <div className="italic">Click below to see the Privacy Policy</div> */}
                <a
                  className="underline"
                  href="https://drive.google.com/file/d/1vNlJQP8s29n5Eba6rz0ShupGZZ1HLyva/view?usp=drivesdk"
                >
                  Privacy Policy
                </a>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                All In Good Hans supports busy professionals and entrepreneurs
                with virtual assistant services, operational setup, and
                organisational systems to help them streamline and grow their
                businesses.
              </p>
              {/* <p className="text-gray-700 text-sm">
                ICO registered
              </p> */}
              <p className="text-gray-700 text-sm">
                ICO reference: ZC007202
              </p>
              <div 
                className="mt-4 overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openImage(3)}
              >
                <img
                  src={achievementImage}
                  alt="Privacy policy reference"
                  className="w-[40%] "
                />
              </div>
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
                    className="overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImage(index)}
                  >
                    <img
                      src={img}
                      alt={`Instagram post ${index + 1}`}
                      className="w-full h-full"
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
        <hr className="text-gray-400 my-3" />
        <p className="text-gray-600 text-sm text-center">
          All in Good Hans © 2025 | All Rights Reserved
        </p>
      </footer>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base">
            {currentIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;