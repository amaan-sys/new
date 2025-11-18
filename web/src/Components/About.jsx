import React from 'react';
import { motion } from "framer-motion";
import whoweare from "../assets/whoweare.webp";



// Target Icon for Vision

const VisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-red-600 mb-4 mx-auto"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// Rocket Icon for Mission
const MissionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-red-600 mb-4 mx-auto"
  >
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);




export default function About() {
  return (
    <section id='about' className="py-16 md:py-10 bg-[#f9f7f4] font-[Inter]">

      {/* ABOUT US HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-4xl font-extrabold text-red-600 tracking-tight">
          About Us
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">

          {/* Soft background card effect */}
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl blur-[2px] -z-10 opacity-70"></div>

          {/* Layout Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE BLOCK */}
            <div className="relative">
              {/* Pink soft blob */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-red-200/50 rounded-3xl blur-2xl -z-10 hidden sm:block"></div>

              <motion.img
                src={whoweare}
                alt="Who We Are - Landscaping Team"
                className="rounded-xl shadow-2xl object-cover w-full h-[300px] md:h-[420px]"
              />
              {/* <span className="absolute bottom-4 right-4 text-xs bg-red-600 text-white px-3 py-1 rounded-lg opacity-80">
                Crafting Quality Outdoors
              </span> */}
            </div>

            {/* RIGHT TEXT BLOCK */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-extrabold text-red-600 mb-2"
              >
                Who We Are
              </motion.h2>

              {/* Red vertical accent line + subtitle */}
              <div className="flex items-start gap-4 mb-3">
                <div className="w-1 bg-red-600 rounded-full h-10 shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed pt-1.5">
                  Creating natural, welcoming, timeless environments.
                </p>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Giovanni’s Landscaping is a team of passionate professionals
                dedicated to building beautiful outdoor environments. From lawn
                maintenance and tree care to irrigation systems and custom outdoor
                designs. Our work reflects decades of craftsmanship and a
                commitment to long-lasting quality, ensuring every client's vision
                is brought to life with precision and care.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(220, 38, 38, 0.1)" }}
                  className="bg-red-50/50 shadow-lg rounded-xl p-4 text-center border border-red-200 transition duration-300 cursor-default"
                >
                  <p className="text-2xl font-bold text-red-600">20 +</p>
                  <p className="text-gray-600 text-sm mt-1 font-medium">Years Experience</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(220, 38, 38, 0.1)" }}
                  className="bg-red-50/50 shadow-lg rounded-xl p-4 text-center border border-red-200 transition duration-300 cursor-default"
                >
                  <p className="text-2xl font-bold text-red-600">500 +</p>
                  <p className="text-gray-600 text-sm mt-1 font-medium">Projects Completed</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(220, 38, 38, 0.1)" }}
                  className="bg-red-50/50 shadow-lg rounded-xl p-4 text-center border border-red-200 transition duration-300 cursor-default"
                >
                  <p className="text-2xl font-bold text-red-600">4.9 ★</p>
                  <p className="text-gray-600 text-sm mt-1 font-medium">Client Rating</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>


        {/* Vission & Mission*/}

        <div className="mt-20 md:mt-15 px-4">
          <div className="text-center mb-12">
            <p className="text-xl font-semibold text-red-500 uppercase tracking-widest">Our Guiding Principles</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* VISION CARD */}
            <div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                translateY: -5,
                boxShadow: "0 15px 30px rgba(220, 38, 38, 0.15)"
              }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-red-100/50 transition duration-300"
            >
              <div className="text-center">
                <VisionIcon />
                <h3 className="text-3xl font-extrabold text-red-600 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  To be the recognized leader in sustainable, high-end landscaping,
                  creating unique and regenerative outdoor sanctuaries that blend
                  flawlessly with their natural surroundings and enhance the well-being of our clients.
                </p>
              </div>
            </div>

            {/* MISSION CARD */}
            <div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                translateY: -5,
                boxShadow: "0 15px 30px rgba(220, 38, 38, 0.15)"
              }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-red-100/50 transition duration-300"
            >
              <div className="text-center">
                <MissionIcon />
                <h3 className="text-3xl font-extrabold text-red-600 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  To deliver dependable, expert landscaping services through meticulous
                  planning, innovative techniques, and unwavering attention to detail,
                  always prioritizing client satisfaction and responsible environmental stewardship.
                </p>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}