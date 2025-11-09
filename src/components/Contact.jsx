import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="h-">
      <h2 className="text-5xl sm:text-6xl text-rust leading-tight mb-12 font-semibold px-8 pt-16 lg:px-16 lg:pt-28 text-center max-w-5xl mx-auto font-playfair capitalize">
        Interested in a happier way to grow your business?
      </h2>
      <div className="formcontainer bg-terracotta text-white flex justify-center items-center gap-16 p-8 lg:p-16 rounded-lg h-auto">
        <div className="textpart flex-1 p-8 flex flex-col gap-8 justify-center">
          <h3 className="text-4xl lg:text-5xl font-extrabold font-playfair">
            Lets Chat
          </h3>
          <div className="emailinfo">
            <h4 className="text-2xl font-semibold text-yellow-100">Email</h4>
            <h4>allingoodhans@gmail.com</h4>
          </div>
          <div className="socialinfo">
            <h4 className="text-2xl font-semibold text-yellow-100">
              Social Media
            </h4>
            <div className="icons flex gap-5 justify-start items-center mt-4">
              <Instagram
                className="text-cream-beige cursor-pointer"
                size={25}
              />
              <Linkedin className="text-cream-beige cursor-pointer" size={25} />
              <Mail className="text-cream-beige cursor-pointer" size={25} />
            </div>
          </div>
          <div className="calendlyinfo">
            <h4 className="text-2xl font-semibold text-yellow-100">
              Book a Call
            </h4>
            <Link
              className="calendly-link"
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <button
                className="group bg-rust text-white px-4 sm:px-6 py-3.5 sm:py-3.5  rounded-full text-xs uppercase tracking-wider hover:bg-[#ac5135] transition-all duration-300  hover:shadow-xl border border-rust/20 2xl:px-16 2xl:py-8 2xl:text-2xl cursor-pointer mt-4 -translate-x-1"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Book a Call
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
        <div className="formpart flex-2 h-full w-full">
          <form className="flex flex-col gap-6 h-[90vh] rounded-2xl bg-[#FFF9ED] w-[80%] p-8 h-full font-lato">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">
                  First name <span className="text-rust">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="border-b-2 border-gray-800 bg-transparent focus:outline-none focus:border-rust transition-colors py-2 text-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">
                  Last name <span className="text-rust">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="border-b-2 border-gray-800 bg-transparent focus:outline-none focus:border-rust transition-colors py-2 text-gray-800"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-800 mb-2">
                Email <span className="text-rust">*</span>
              </label>
              <input
                type="email"
                required
                className="border-b-2 border-gray-800 bg-transparent focus:outline-none focus:border-rust transition-colors py-2 text-gray-800"
              />
            </div>

            {/* Company/Business */}
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-800 mb-2">
                Company/Business & SM Handles{" "}
                <span className="text-rust">*</span>
              </label>
              <input
                type="text"
                required
                className="border-b-2 border-gray-800 bg-transparent focus:outline-none focus:border-rust transition-colors py-2 text-gray-800"
              />
            </div>

            {/* Services Interested */}
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-800 mb-3">
                What services are you interested in?{" "}
                <span className="text-rust">*</span>
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-rust" />
                  <span className="text-gray-800">Administrative Support</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-rust" />
                  <span className="text-gray-800">Operations Support</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-rust" />
                  <span className="text-gray-800">Event Support</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col flex-1">
              <label className="text-sm font-bold text-gray-800 mb-2">
                Tell me a little about your business and how we can support you!{" "}
                <span className="text-rust">*</span>
              </label>
              <textarea
                required
                rows="4"
                className="border-b-2 border-gray-800 bg-transparent focus:outline-none focus:border-rust transition-colors py-2 text-gray-800 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-rust text-white py-3 px-8 cursor-pointer font-bold uppercase text-sm tracking-wider hover:shadow-2xl transition-colors duration-300 self-start mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
