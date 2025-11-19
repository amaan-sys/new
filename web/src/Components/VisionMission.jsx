import { motion } from "framer-motion";
import visionImg from "../assets/ourvision.avif";
import missionImg from "../assets/ourmission.png";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden py-18 bg-red-600 font-serif">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide"
      >
        Mission & Vision
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-3xl mx-auto text-white text-lg leading-relaxed mb-16"
      >
        Guided by a clear vision and mission, we strive to transform outdoor spaces through sustainable design,
        expert craftsmanship, and long‑term landscape care.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
        >
          <img
            src={visionImg}
            className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-200 text-sm md:text-base max-w-sm">
              Empowering communities with sustainable and beautifully crafted outdoor environments.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
        >
          <img
            src={missionImg}
            className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-200 text-sm md:text-base max-w-sm">
              To deliver innovative, eco‑friendly landscaping solutions that elevate outdoor living.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
