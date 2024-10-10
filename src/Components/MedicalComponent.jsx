import React from "react";
import heart from "../assets/heart.png";
import lungs from "../assets/lungs.png";
import kidney from "../assets/kidney.png";
import liver from "../assets/liver.png";

const MedicalComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">
        Process.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 sm:px-8 md:px-12">
        {/* Doctor Card */}
        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-start p-4 sm:p-6 flex-wrap">
            {" "}
            {/* Added flex-wrap to allow wrapping */}
            <img
              src={heart}
              alt="Heart Icon"
              className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto" // Adjusted image size for better responsiveness
            />
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold ml-4">
              {" "}
              {/* Adjusted text size for smaller screens */}
              Doctor
            </p>
          </div>
        </div>

        {/* Patient Card */}
        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-start p-4 sm:p-6 flex-wrap">
            <img
              src={lungs}
              alt="Lungs Icon"
              className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto"
            />
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold ml-4">
              Patient
            </p>
          </div>
        </div>

        {/* Laboratory Card */}
        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-start p-4 sm:p-6 flex-wrap">
            <img
              src={kidney}
              alt="Kidney Icon"
              className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto"
            />
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold ml-4">
              Laboratory
            </p>
          </div>
        </div>

        {/* Pharmacy Card */}
        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-start p-4 sm:p-6 flex-wrap">
            <img
              src={liver}
              alt="Liver Icon"
              className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto"
            />
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold ml-4">
              Pharmacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalComponent;
