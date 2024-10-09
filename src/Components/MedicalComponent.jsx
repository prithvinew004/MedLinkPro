import React from "react";
import heart from "../assets/heart.png";
import lungs from "../assets/lungs.png";
import kidney from "../assets/kidney.png";
import liver from "../assets/liver.png";

const MedicalComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
        Process.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 sm:px-8 md:px-12">
        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <img
              src={heart}
              alt="Heart Icon"
              className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-[150px] sm:h-[200px] md:h-[230px] lg:h-[250px]"
            />

            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Doctor
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <img
              src={lungs}
              alt="Lungs Icon"
              className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[390px]"
            />
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Patient
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <img
              src={kidney}
              alt="Kidney Icon"
              className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[428px]"
            />
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Laboratory
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl saturate-0 hover:saturate-100 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <img
              src={liver}
              alt="Liver Icon"
              className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[390px]"
            />
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Pharmacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalComponent;
