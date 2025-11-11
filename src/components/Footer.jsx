import React from 'react'
import { Instagram, Facebook, Mail } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
  ]

  const instagramImages = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  ]

  return (
    <footer className="bg-[#F5F1E8] pt-16 pb-4 px-5 lg:px-20">
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
            <button className="bg-[#B8956A] text-white font-bold py-3 px-12 mb-8 hover:bg-[#9d7d54]">
              CONTACT
            </button>      
          </div>

          {/* Resources Column */}
          <div>
            <h3 
              className="text-4xl mb-8 text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Resources
            </h3>
            <div className="space-y-4 mb-6">
              <a 
                href="#"
                className="text-[#B8956A] text-lg hover:text-[#9d7d54] inline-block border-b-2 border-[#B8956A]"
              >
                30% off HoneyBook
              </a>
              <br />
              <a 
                href="#"
                className="text-[#B8956A] text-lg hover:text-[#9d7d54] inline-block border-b-2 border-[#B8956A]"
              >
                Template by Big Cat Creative
              </a>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              All In Good Hans supports busy professionals and entrepreneurs with virtual assistant services, 
              operational setup, and organisational systems to help them streamline and grow their businesses.
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
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <img 
                    src={img}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href="#"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div> 
      </div>
       <p className="text-gray-600 text-sm text-center">© All In Good Hans</p>
    </footer>
  )
}

export default Footer