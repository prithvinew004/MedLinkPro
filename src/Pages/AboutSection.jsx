import React from 'react'
import docimg1 from '../assets/docimg1.png'
import docimg2 from '../assets/docimg2.png'
import docimg3 from '../assets/docimg3.png'
import child from '../assets/child.png'
import logo1 from '../assets/logo1.svg'

function AboutSection() {
  return (
    <>
    <div className="flex items-center justify-center  m-10 overflow-hidden">
        <h1 className="text-7xl font-bold">About Us.</h1>
    </div> 

     <div className="bg-[#EBEBEB] mx-4 rounded-3xl my-4 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-[#0065FB] pb-8">MedLinkPro</span>
            Unifying Healthcare Sectors Through Innovation
          </h2>
          <p className="mt-6 text-xl text-justify text-gray-500">
            At MedLinkPro, our mission is to unify healthcare sectors through innovative
            technology solutions. We enhance collaboration among doctors, hospitals,
            pharmacies, and laboratories, improving communication and operational
            efficiency. By integrating digital tools, we create a cohesive healthcare
            ecosystem that prioritizes patient care and ensures access to vital
            information, transforming healthcare delivery across India.
          </p>
          
        </div>
        <div>
        <div className="grid grid-cols-3 gap-2">
        <div className="relative rounded-3xl overflow-hidden ">
          <img
            src={docimg1} 
            alt="Healthcare Professional"
            className="w-full h-full object-cover"
          />

        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={child} 
            alt="Smiling Patient"
            className="w-full h-full object-cover"
          />
         
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={docimg2} 
            alt="Confident Doctor"
            className="w-full h-full object-cover"
          />
          
        </div>

        <div className="flex items-center justify-center bg-blue-100 rounded-3xl overflow-hidden">
          <img src={logo1} alt="" />
        </div>

        <div className="relative  rounded-3xl overflow-hidden">
          <img
            src={docimg3} 
            alt="Patient Consultation"
            className="w-full h-full object-cover"
          />
          
        </div>

        </div>
        <div className="grid grid-cols-3 gap-8 text-center sm:grid-cols-3 mt-10">
            <div>
              <span className="block text-4xl font-extrabold text-[#0065FB]">
                5
              </span>
              <span className="mt-2 block text-base font-medium text-black">
                Healthcare Partners
              </span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-[#0065FB]">
                10k
              </span>
              <span className="mt-2 block text-base font-medium text-black">
                Users
              </span>
            </div>
            <div>
              <span className="block text-4xl font-extrabold text-[#0065FB]">
                4.8
              </span>
              <span className="mt-2 block text-base font-medium text-black">
                Rating
              </span>
            </div>
          </div>
      </div>

     
      </div>
       
    </div>

    



    </>
  )
}

export default AboutSection