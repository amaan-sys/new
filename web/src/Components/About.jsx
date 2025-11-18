import { motion } from "framer-motion";
import yourImage from "../assets/whoweare.webp"; // change to your image

export default function about() {
  return (

    <section id='about' className="py-8  bg-[#f9f7f4]">

      {/* ABOUT US HEADING */}
      <div className="text-center mb-8 ">
        <h2 className="text-4md md:text-4xl font-extrabold text-red-600 tracking-tight">
          About Us
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 bg-white rounded-3xl p-10 shadow-lg relative"
      >
        {/* Soft background card */}
        <div className="absolute inset-0 bg-white rounded-3xl shadow-xl blur-[2px] -z-10"></div>


        {/* Layout Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center ">

          {/* LEFT IMAGE BLOCK */}
          <div className="relative">
            {/* Pink soft blob */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-red-200/50 rounded-3xl blur-2xl -z-10"></div>

            <motion.img
              src={yourImage}
              alt="Who We Are"
              // whileHover={{ scale: 1.02 }}
              // transition={{ type: "spring", stiffness: 120 }}
              className="rounded-xl shadow-xl object-cover w-full h-[420px]"
            />
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div>

            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-red-600 mb-4"
            >
              Who We Are
            </motion.h2>

            {/* Red vertical accent line + subtitle */}
            <div className="flex items-start gap-4">
              <div className="w-1 bg-red-600 rounded-full h-10 "></div>
              <p className="text-gray-700 text-lg leading-relaxed pt-1.5">
                Crafting outdoor spaces that feel natural, welcoming, and timeless.
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Giovanni’s Landscaping is a team of passionate professionals
              dedicated to building beautiful outdoor environments. From lawn
              maintenance and tree care to irrigation systems and custom outdoor
              designs. Our work reflects decades of craftsmanship and a
              commitment to long-lasting quality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="bg-white shadow-md rounded-xl p-4 text-center border"
              >
                <p className="text-2xl font-bold text-red-600">20+</p>
                <p className="text-gray-600 text-sm mt-1">Years Experience</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="bg-white shadow-md rounded-xl p-4 text-center border"
              >
                <p className="text-2xl font-bold text-red-600">500+</p>
                <p className="text-gray-600 text-sm mt-1">Projects Completed</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="bg-white shadow-md rounded-xl p-4 text-center border"
              >
                <p className="text-2xl font-bold text-red-600">4.9★</p>
                <p className="text-gray-600 text-sm mt-1">Client Rating</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* VISION + LINE + MISSION SECTION */}
      <div className="mt-24 max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12 items-center text-center">

          {/* LEFT — VISION */}
          <div className="space-y-5">
            <h3 className="text-3xl font-extrabold text-red-600 leading-tight">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed ">
              Our vision is to create outdoor spaces that inspire, enrich, and bring
              lasting value to our clients. We aim to become a leading landscaping
              company known for innovative designs, exceptional service quality, and
              environmental responsibility.
            </p>
          </div>

          {/* CENTER — RED DIVIDER LINE */}
          <div className="flex justify-center">
            <div className="w-2 h-10 bg-red-600 rounded-full"></div>
          </div>

          {/* RIGHT — MISSION */}
          <div className="space-y-5">
            <h3 className="text-3xl font-extrabold text-red-600 leading-tight">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed ">
              Our mission is to deliver dependable, high-quality landscaping
              solutions that enhance the beauty, health, and functionality of your
              outdoor space. We strive to exceed expectations through attention to
              detail, professional expertise, and a strong focus on customer
              satisfaction.
            </p>
          </div>

        </div>
      </div>






    </section>
  );
}
