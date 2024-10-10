import React from "react";
import dflogo from "../assets/dflogo.svg";
import logo1 from "../assets/logo1.svg";
import x from "../assets/x.svg";
import insta from "../assets/insta.svg";
import linkdin from "../assets/linkdin.svg";
import Calendar from "../assets/Calendar.svg";
import fb from "../assets/fb.svg";

function FooterSection() {
  return (
    <>
      {/* Outer container with padding and rounded corners */}
      <div className="bg-[#EBEBEB] p-6 sm:p-10 lg:p-14 mx-4 mt-4 rounded-3xl overflow-clip">
        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 sm:p-6 mx-4 lg:mx-24 rounded-2xl shadow-md">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 text-center md:text-left">
            EXCITED? US TOO. LET'S GET MOVING.
          </h2>
          <div className="flex mt-4 md:mt-0 rounded-3xl bg-[#0065FB]">
            <button className="text-white px-4 py-2 sm:px-6 sm:py-3 rounded-3xl">
              SCHEDULE A CALL
            </button>
            <img src={Calendar} alt="" className="pr-2 sm:pr-4 w-6 sm:w-8" />
          </div>
        </div>

        {/* Main Branding and Links Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 bg-[#EBEBEB] px-4 sm:px-10 lg:px-14 pt-6 lg:pt-10 m-4 lg:m-10">
          {/* MedLinkPro Branding Section */}
          <div className="col-span-1 bg-[#0065FB] rounded-3xl shadow-lg overflow-hidden">
            <p className="text-3xl sm:text-4xl lg:text-5xl pt-4 sm:pt-8 px-8 sm:px-16 text-white">
              MedLinkPro
            </p>
            <div className="flex items-center justify-center pt-4 sm:pt-6">
              <img
                src={logo1}
                alt=""
                className="w-[100px] sm:w-[150px] lg:w-[200px]"
              />
            </div>
          </div>

          {/* Links and Legal Section */}
          <div className="col-span-1 bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-[#0065FB] w-[150px] sm:w-[200px] flex items-center justify-center p-4 rounded-3xl m-4 sm:m-8">
              <img src={dflogo} alt="" />
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 gap-4 px-6 sm:px-10 pt-8">
              <a
                href="#"
                className="text-black hover:text-gray-900 text-sm sm:text-lg"
              >
                Services
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-900 text-sm sm:text-lg"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-900 text-sm sm:text-lg"
              >
                Collaborations
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-900 text-sm sm:text-lg"
              >
                About
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-900 text-sm sm:text-lg"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-900 text-sm sm:text-lg"
              >
                Testimonials
              </a>
            </div>

            {/* Legal Section */}
            <div className="px-6 sm:px-10 py-4 flex justify-between items-center">
              <p className="text-xs sm:text-sm">&copy; 2024 MedLinkPro</p>
              <div className="space-x-2 sm:space-x-5">
                <a
                  href="#"
                  className="hover:underline text-black text-xs sm:text-sm"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:underline text-black text-xs sm:text-sm"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-4 sm:mt-6">
          {/* Adjusted width and height for alignment */}
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[150px] sm:w-[200px] lg:w-[300px] h-[120px] sm:h-[150px] lg:h-[180px]">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} alt="Twitter" className="w-10 sm:w-14 lg:w-16" />
            </a>
          </div>
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[150px] sm:w-[200px] lg:w-[300px] h-[120px] sm:h-[150px] lg:h-[180px]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="w-10 sm:w-14 lg:w-16"
              />
            </a>
          </div>
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[150px] sm:w-[200px] lg:w-[300px] h-[120px] sm:h-[150px] lg:h-[180px]">
            <a
              href="https://linkdin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkdin}
                alt="LinkedIn"
                className="w-10 sm:w-14 lg:w-16"
              />
            </a>
          </div>
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[150px] sm:w-[200px] lg:w-[300px] h-[120px] sm:h-[150px] lg:h-[180px]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" className="w-10 sm:w-14 lg:w-16" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
