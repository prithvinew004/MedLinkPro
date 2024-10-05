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
              <div className="md:w-[478px] lg:w-[1200px]">
                <p className=" text-black mt-4 text-[90px] h-[50px] px-[100px]">
                  At the Heart Of
                </p>
                <p className=" text-black text-[180px] h-[150px] px-[100px]">
                  Healthcare
                </p>
                <p className=" text-black mt-12 text-[90px] px-[100px]">
                  Bringing it All Together!
                </p>

                <div className="absolute right-24">
                  <p className="text-[#595959] text-2xl">/EST 2024</p>
                </div>

                <div className="absolute bg-[#0067FF] border flex items-center justify-center text-white w-52 right-20 top-24 rounded-full p-5">
                  <p className="text-xl">Learn More</p>
                </div>

                <div className=" mt-14 mx-[250px]">
                  <p className="text-2xl text-[#010d3e] tracking-tight ">
                    MedLinkPro connects doctors, patients, pharmacies,
                  </p>
                  <p className="text-2xl text-[#010d3e] tracking-tight ">
                    and labs for seamless healthcare. Experience
                  </p>
                  <p className="text-2xl text-[#010d3e] tracking-tight  ">
                    efficient, accurate care-all in one place.
                  </p>
                </div>

                <div className="absolute right-[300px] z-50 bottom-[-200px]">
                  <img src={heartimg} alt="" className="h-[400px] w-[400px]" />
                </div>

                <div className="flex gap-5 px-14 pt-10 ">
                  <p className="text-xl">Available On:</p>
                  <p className="text-[#0067FF] text-xl">Play Store</p>
                  <p>/</p>
                  <p className="text-[#0067FF] text-xl">Apple Store</p>
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
            className="flex justify-center items-center gap-14 p-4 whitespace-nowrap"
          >
            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>

            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>

            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>

            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>
            <p className="text-5xl">+</p>
            <p className="text-5xl text-white">Connecting Care</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
