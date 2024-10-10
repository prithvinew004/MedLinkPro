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
      <div className="bg-white p-4 overflow-hidden">
        <section
          ref={heroRef}
          className="pt-8 pb-20 rounded-3xl md:pt-5 md:pb-10 bg-[#EBEBEB] overflow-x-clip w-full min-h-screen relative"
        >
          <div className="flex justify-end">
            <Navbar />
          </div>

          <div className="w-full relative">
            <div className="md:flex items-center">
              <div className="md:w-full lg:w-[1200px]">
                <p className="text-black mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-auto px-4 sm:px-8 md:px-16 lg:px-24">
                  At the Heart Of
                </p>

                <p className="text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl h-auto px-4 sm:px-8 md:px-16 lg:px-24">
                  Healthcare
                </p>

                <div className="md:w-full lg:w-[1200px]">
                  <p className="text-black mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 sm:px-8 md:px-16 lg:px-24">
                    Bringing it All Together!
                  </p>
                </div>

                <div className="absolute right-5 sm:right-10 md:right-24">
                  <p className="text-[#595959] text-2xl">/EST 2024</p>
                </div>

                <div
                  className="bg-[#0067FF] border flex items-center justify-center text-white w-28 sm:w-36 md:w-44 lg:w-52 right-4 sm:right-8 md:right-12 lg:right-16 top-[50px] sm:top-[80px] md:top-[100px] lg:top-[130px] rounded-full p-2 sm:p-3 md:p-4 lg:p-5
                  relative sm:absolute mt-4 sm:mt-0"
                >
                  <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
                    Learn More
                  </p>
                </div>

                <div className="absolute right-[5%] sm:right-[10%] md:right-[12%] lg:right-[15%] z-30 bottom-[-80px] sm:bottom-[-100px] md:bottom-[-120px] lg:bottom-[-150px] hidden sm:block">
                  <img
                    src={heartimg}
                    alt="Heart"
                    className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]"
                  />
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

                <div className="flex gap-3 sm:gap-4 md:gap-5 px-4 sm:px-10 md:px-14 pt-10 mb-[100px] sm:mb-[120px] md:mb-[160px] lg:mb-[180px]">
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
