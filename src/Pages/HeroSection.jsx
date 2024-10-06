import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Navbar from "../Components/Navbar";
import heartimg from "../assets/heart-organ.png";

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
    console.log(latestValue);
  });

  return (
    <>
      <div className="bg-white p-4 overflow-hidden ">
        <section
          ref={heroRef}
          className="pt-8 pb-20 rounded-3xl md:pt-5 md:pb-10 bg-[#EBEBEB] overflow-x-clip min-h-screen"
        >
          <Navbar />
          <div className="container relative">
            <div className="md:flex items-center">
              <div className="md:w-full lg:w-[1200px]">
                <p className="text-black mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-auto px-4 sm:px-8 md:px-16 lg:px-24">
                  At the Heart Of
                </p>

                <p className="text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl h-auto px-4 sm:px-8 md:px-16 lg:px-24">
                  Healthcare
                </p>

                <div className="md:w-full lg:w-[1200px]">
                  <p className="text-black mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 sm:px-8 md:px-16 lg:px-24">
                    Bringing it All Together!
                  </p>
                </div>

                <div className="absolute right-5 sm:right-10 md:right-24">
                  <p className="text-[#595959] text-2xl">/EST 2024</p>
                </div>

                <div className="absolute bg-[#0067FF] border flex items-center justify-center text-white w-28 sm:w-36 md:w-44 lg:w-52 right-[5%] sm:right-[8%] md:right-[12%] lg:right-[20%] top-[10%] sm:top-[15%] md:top-[18%] lg:top-24 rounded-full p-2 sm:p-3 md:p-4 lg:p-5">
                  <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
                    Learn More
                  </p>
                </div>

                <div className="mt-14 mx-auto md:mx-[100px] lg:mx-[250px]">
                  <p className="text-lg sm:text-xl md:text-2xl text-[#010d3e] tracking-tight">
                    MedLinkPro connects doctors, patients, pharmacies,
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-[#010d3e] tracking-tight">
                    and labs for seamless healthcare. Experience
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-[#010d3e] tracking-tight">
                    efficient, accurate care—all in one place.
                  </p>
                </div>

                <div className="absolute right-[5%] sm:right-[10%] md:right-[15%] lg:right-[20%] z-50 bottom-[-150px] sm:bottom-[-175px] md:bottom-[-200px]">
                  <img
                    src={heartimg}
                    alt="Heart"
                    className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
                  />
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-5 px-4 sm:px-10 md:px-14 pt-10 mb-[120px] sm:mb-[140px] md:mb-[180px] lg:mb-[200px]">
                  <p className="text-sm sm:text-lg md:text-xl">Available On:</p>
                  <p className="text-[#0067FF] text-sm sm:text-lg md:text-xl">
                    Play Store
                  </p>
                  <p>/</p>
                  <p className="text-[#0067FF] text-sm sm:text-lg md:text-xl">
                    Apple Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#0067FF] rounded-2xl mt-4 overflow-hidden flex">
          <motion.div
            animate={{
              translateX: "-100%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex justify-center items-center gap-10 sm:gap-12 md:gap-14 p-2 sm:p-4 whitespace-nowrap"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl text-white">
              Connecting Care
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl">+</p>
            <p className="text-3xl sm:text-4xl md:text-5xl text-white">
              Connecting Care
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl">+</p>
            <p className="text-3xl sm:text-4xl md:text-5xl text-white">
              Connecting Care
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
