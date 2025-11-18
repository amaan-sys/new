import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Leaf, Check } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className=" bg-white relative overflow-hidden px-4 pt-22 py-8">
      {/* Soft red background accents */}
      <div className="absolute top-0 -right-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-8 lg:px-14 grid lg:grid-cols-2 items-start gap-20 relative z-10">

        {/* LEFT SIDE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-red-600 mb-6 tracking-tight"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-lg leading-relaxed mb-12 max-w-xl"
          >
           With trusted experience and a dedication to long-term landscape health, Giovanni’s Landscaping stands apart for unmatched quality and reliability.
          </motion.p>

          {/* FEATURE GRID */}
          <div className="grid sm:grid-cols-2 gap-8">

            {/* Card */}
            {[{
              title: "Built on Trust",
              desc: "Reliable service, local reputation.",
              icon: <ShieldCheck className="text-green-600" />,
              bg: "bg-green-100"
            },{
              title: "Quality Craftsmanship",
              desc: "Attention to detail in every project.",
              icon: <Star className="text-yellow-600" />,
              bg: "bg-yellow-100"
            },{
              title: "Sustainable Methods",
              desc: "Organic practices where possible.",
              icon: <Leaf className="text-green-600" />,
              bg: "bg-green-100"
            },{
              title: "Meticulous Detail",
              desc: "Precision in design, planting, and care.",
              icon: <Check className="text-blue-600" />,
              bg: "bg-blue-100"
            }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.00, translateY: -1 }}
                className="bg-white border border-red-200 shadow-lg p-6 rounded-2xl flex gap-4 items-start transition-all cursor-pointer hover:shadow-2xl hover:border-red-400"
              >
                <div className={`p-3 rounded-xl ${item.bg}`}>{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – OUR APPROACH */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-red-50 border border-red-200 shadow-xl p-12 rounded-3xl h-fit hover:shadow-2xl transition-all hover:border-red-300 mt-20 my-25"
        >
          <h3 className="text-3xl font-bold text-red-600 mb-6">Our Approach</h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
           Our reputation is built on trust, exceptional quality, and meticulous attention to detail. We take pride in every project, using sustainable and organic methods whenever possible, and delivering the same level of craftsmanship whether the job is big or small.
          </p>

          <motion.p
            // whileHover={{ scale: 1.03 }}
            className="text-gray-900 font-semibold text-xl bg-white p-4 rounded-xl shadow-md border border-red-100"
          >
            Your landscape is a long-term investment, and we're here to help it thrive.
          </motion.p>
        </motion.div>


        
      </div>
    </section>
  );
}
