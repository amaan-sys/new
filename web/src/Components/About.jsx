import React from "react";
import { motion } from "framer-motion";
import whoweare from "../assets/whoweare.webp";


export default function About() {
  return (
    <section
      id="about"
      className=" md:py-12 py-10  font-[Inter] mx-auto"
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
        className="max-w-6xl mx-auto px-4 sm:px-6 "
      >
        <div className="bg-[#f9f7f4] rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl relative overflow-hidden border border-red-500">

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
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed py-1.5">
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

      </motion.div>
    </section>
  );
}