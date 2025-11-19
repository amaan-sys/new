import { Leaf, Star, Recycle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <Leaf size={24} />,
      bg: "bg-red-100",
      textColor: "text-red-600",
      title: "Built on Trust",
      subtitle: "Reliable service, strong local reputation.",
    },
    {
      icon: <Star size={24} />,
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
      title: "Excellence",
      subtitle: "We deliver precision on every project.",
    },
    {
      icon: <Recycle size={24} />,
      bg: "bg-green-100",
      textColor: "text-green-600",
      title: "Sustainable Practices",
      subtitle: "Always adopting eco-friendly solutions.",
    },
    {
      icon: <CheckCircle size={24} />,
      bg: "bg-blue-100",
      textColor: "text-blue-600",
      title: "Meticulous Detail",
      subtitle: "No shortcuts — pure craftsmanship.",
    },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Soft red background accents */}
      <div className="absolute top-0 -right-32 w-96 h-96 bg-red-100 rounded-full blur-7xl opacity-40"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
    <section className="py-24 px-12 bg-white relative overflow-hidden">
      
      {/* Floating gradient blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 -right-32 w-96 h-96 bg-red-200 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-red-600 mb-3">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mb-10 max-w-lg leading-relaxed">
            Trusted, experienced, and focused on long-term landscape health — what sets Giovanni's Landscaping apart.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.00 }}
                className="p-5 bg-white rounded-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-gray-200 flex items-center gap-4 group hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center ${item.textColor} group-hover:scale-110 transition`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
        <div className="bg-red-50 p-10 rounded-4xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E8F5E8]">
          <h3 className="text-2xl font-bold text-red-600 mb-6">Our Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-10 text-[17px]">
            Our reputation is built on trust, quality, and meticulous attention to detail. We take pride in our work, use sustainable and organic methods whenever possible, and treat every project — big or small — with the same level of care and craftsmanship.
=======
        </motion.div>

        {/* RIGHT SIDE — TEXT BOX */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-red-50 p-12 rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-red-100"
        >
          <h3 className="text-2xl font-bold text-red-600 mb-6">
            Our Approach
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6 text-[17px]">
            Our reputation is built on trust, exceptional quality, and meticulous attention to detail. We take pride in every project, using sustainable and organic methods whenever possible.
>>>>>>> 9266cf4b3875b22fe37b31b864e8184227c4e192
          </p>

          <p className="text-gray-700 leading-relaxed text-[17px]">
            Your landscape is a long-term investment — we’re here to help it grow, flourish, and stay healthy season after season.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
