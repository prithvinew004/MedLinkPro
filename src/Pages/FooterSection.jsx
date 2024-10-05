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
      <div className="bg-[#EBEBEB] p-14 mx-4 mt-4 rounded-3xl overflow-clip">
        <div className="flex justify-between items-center bg-white p-6 mx-24 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800">
            EXCITED? US TOO. LET'S GET MOVING.
          </h2>
          <div className="flex rounded-3xl bg-[#0065FB]">
            <button className=" text-white p-4 rounded-3xl">
              SCHEDULE A CALL
            </button>
            <img src={Calendar} alt="" className="pr-4" />
          </div>
        </div>

        {/* Main Branding Section */}
        <div className="mt-6 grid grid-cols-2 gap-8 bg-[#EBEBEB] px-14 pt-10 m-10">
          <div className="col-span-1 bg-[#0065FB] rounded-3xl shadow-lg overflow-hidden">
            <p className="text-5xl pt-8 px-16 text-white">MedLinkPro</p>
            <div className="flex items-center justify-center pt-6">
              <img src={logo1} alt="" className="w-[200px]" />
            </div>
          </div>

          <div className="col-span-1 bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-[#0065FB] w-[250px] flex items-center justify-center p-4 rounded-3xl m-8">
              <img src={dflogo} alt="" />
            </div>

            <div className="flex gap-6 px-10 pt-14">
              <a href="#" className="text-black hover:text-gray-900 text-xl">
                Services
              </a>
              <a href="#" className="text-black hover:text-gray-900 text-xl">
                Pricing
              </a>
              <a href="#" className="text-black hover:text-gray-900 text-xl">
                Collaborations
              </a>
            </div>
            <div className="flex gap-6 px-10 pt-3">
              <a href="#" className="text-black hover:text-gray-900 text-xl">
                About
              </a>
              <a href="#" className="text-black hover:text-gray-900 text-xl">
                Contact
              </a>
              <a href="#" className="text-black hover:text-gray-900 text-xl">
                Testimonials
              </a>
            </div>

            <div className="px-10 py-4 flex justify-between items-center">
              <p>&copy; 2024 MedLinkPro</p>

              <div className="space-x-5">
                <a href="#" className="hover:underline text-black text-bold">
                  Terms
                </a>
                <a href="#" className="hover:underline text-black text-bold">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-5">
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[280px] h-[171px]">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} alt="Twitter" className="w-22" />
            </a>
          </div>
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[280px] h-[171px]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Twitter" className="w-22" />
            </a>
          </div>
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[280px] h-[171px]">
            <a
              href="https://linkdin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkdin} alt="Twitter" className="w-22" />
            </a>
          </div>
          <div className="p-4 flex items-center justify-center border rounded-3xl bg-white w-[280px] h-[171px]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Twitter" className="w-22" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
