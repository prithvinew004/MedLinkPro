import React from "react";
import customimg1 from "../assets/customimg1.png";
import customimg2 from "../assets/customimg2.png";

function CustomComponent() {
  return (
    <>
      <div className="flex items-center justify-center bg-[#EBEBEB] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-clip">
        <div className="flex flex-col justify-center space-y-2 pl-4 sm:pl-8 md:pl-16 lg:pl-[120px]">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
            Connecting the care that
          </p>

          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
            never
            <span className="inline-block rounded-full overflow-hidden">
              <img
                src={customimg1}
                alt="Icon"
                className="w-[100px] h-[30px] sm:w-[120px] sm:h-[40px] md:w-[140px] md:h-[40px] lg:w-[160px] lg:h-[45px] xl:w-[180px] xl:h-[50px] object-cover"
              />
            </span>
            connected -
          </p>

          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
            MedLinkPro is here to Link it
          </p>

          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
            all together.
            <span className="inline-block rounded-full overflow-hidden">
              <img
                src={customimg2}
                alt="Icon"
                className="w-[100px] h-[30px] sm:w-[120px] sm:h-[40px] md:w-[140px] md:h-[40px] lg:w-[160px] lg:h-[45px] xl:w-[180px] xl:h-[50px] object-cover"
              />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CustomComponent;
