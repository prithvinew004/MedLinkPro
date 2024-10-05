import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar5 from "../assets/avatar-5.png";
import { motion } from "framer-motion";
import TestimonialsComponent from "../Components/TestimonialsComponent.jsx";

const testimonials = [
  {
    text: "“The electronic health records feature is a game-changer! I can access patient information on the go, ensuring that I always have the latest data at my fingertips.”",
    name: "Dr. Patel ",
    title: "Specialist",
    avatarImg: avatar1,
  },
  {
    text: "“MedLinkPro has transformed my practice! The streamlined communication between my clinic, pharmacies, and labs saves me valuable time, allowing me to focus on patient care”",
    name: "Dr. Verma",
    title: "General Practitioner",
    avatarImg: avatar2,
  },
  {
    text: "“With MedLinkPro, my prescriptions and inventory has never been easier. The platform keeps everything organized, helping me serve my customers more efficiently.”",
    name: "Dr. Sharma",
    title: "Pharmacy Owner",
    avatarImg: avatar3,
  },
  {
    text: "“MedLinkPro has improved our operational efficiency across the board. The data analytics tools help us make informed decisions that enhance patient care and resource management”",
    name: "Mrs. Kaur ",
    title: " Patient",
    avatarImg: avatar1,
  },
  {
    text: "“The integration of lab data into MedLinkPro means I can share results with doctors and patients instantly. It has significantly improved our workflow and reduced errors”",
    name: " Mr. Gupta ",
    title: " Lab Technician",
    avatarImg: avatar5,
  },
];

export const Testimonials = () => {
  return (
    <>
      <section className="py-20 my-2  bg-[#EBEBEB] overflow-clip">
        <div className="container">
          <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
            Testimonials
          </h2>

          <div className="flex [mask-image:linear-gradient(to_left,transparent,black_45%,black_75%,transparent)]  mt-5">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex gap-5 p-5 flex-none"
            >
              {[...testimonials, ...testimonials].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="border bg-white border-white/15 p-6 md:p-10 rounded-xl max-w-xs md:max-w-md flex-none"
                >
                  <div className="text-lg md:text-xl text-justify">
                    {testimonial.text}
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className=" bg-white ">
                      <img
                        src={testimonial.avatarImg}
                        alt={`Avatar for ${testimonial.name}`}
                        className="h-11 w-11 rounded-lg"
                      />
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-black text-sm">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <TestimonialsComponent />
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
          className="flex justify-center items-center gap-14 flex-none p-4"
        >
          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>

          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>

          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>

          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>
          <p className="text-5xl">+</p>
          <p className="text-5xl text-white">Join Revolution</p>
        </motion.div>
      </div>
    </>
  );
};

export default Testimonials;
