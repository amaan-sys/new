import React from "react";
import { motion } from "framer-motion";
import whoweare from "../assets/whoweare.webp";

// Vision Icon
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

// Mission Icon
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
    <section
      id="about"
      className="py-16 md:py-20 bg-[#f9f7f4] font-[Inter] mx-auto"
    >
      {/* ABOUT HEADING */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight">
          About Us
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl relative overflow-hidden">

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-200/40 rounded-3xl blur-2xl -z-10 hidden md:block"></div>

              <motion.img
                src={whoweare}
                alt="Who We Are"
                className="
                  rounded-2xl shadow-xl object-cover w-full
                  h-[240px] sm:h-[300px] md:h-[420px]
                "
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="px-1">
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 mb-3"
              >
                Who We Are
              </motion.h2>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 bg-red-600 rounded-full h-10"></div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Creating natural, welcoming, timeless environments.
                </p>
              </div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Giovanni’s Landscaping is a team of passionate professionals
                dedicated to building beautiful outdoor environments. From lawn
                maintenance and tree care to irrigation systems and custom outdoor
                designs — our work reflects decades of craftsmanship and
                long-lasting quality.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">

                {/* Stat 1 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-50/60 shadow-md rounded-xl p-3 sm:p-4 text-center border border-red-200"
                >
                  <p className="text-xl sm:text-2xl font-bold text-red-600">
                    20 +
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    Years Experience
                  </p>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-50/60 shadow-md rounded-xl p-3 sm:p-4 text-center border border-red-200"
                >
                  <p className="text-xl sm:text-2xl font-bold text-red-600">
                    500 +
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    Projects Completed
                  </p>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-50/60 shadow-md rounded-xl p-3 sm:p-4 text-center border border-red-200"
                >
                  <p className="text-xl sm:text-2xl font-bold text-red-600">
                    4.9 ★
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    Client Rating
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </div>

        {/* VISION + MISSION */}
        <div className="mt-20 px-2 sm:px-4">

          <div className="text-center mb-10">
            <p className="text-lg sm:text-xl font-semibold text-red-500 uppercase tracking-widest">
              Our Guiding Principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-red-100"
            >
              <div className="text-center">
                <VisionIcon />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  To be the recognized leader in sustainable, high-end landscaping —
                  creating beautiful outdoor sanctuaries that enhance life.
                </p>
              </div>
            </motion.div>

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-red-100"
            >
              <div className="text-center">
                <MissionIcon />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  To deliver dependable, expert landscaping services with precision,
                  innovation, and a commitment to client satisfaction.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
