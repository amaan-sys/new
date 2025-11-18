import { motion } from "framer-motion";
import logoC from "../assets/logo-c.png";

export default function Contacts() {
  return (
    <section id="contact" className="bg-gray-100 py-20 font-serif">
      <div className="mx-auto grid max-w-6xl items-stretch gap-12 px-6 lg:grid-cols-2">
        {/* Left Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex h-full flex-col"
        >
          <h2 className="text-4xl font-extrabold text-red-600">Submit a Request</h2>
          <p className="mt-2 text-gray-600">
            Tell us more about your project and we&apos;ll reach out with the next steps.
          </p>

          <form
            action="https://formspree.io/f/xxxxxxx"
            method="POST"
            className="mt-8 flex flex-1 flex-col space-y-5"
          >
            {/* Name */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <motion.input
                id="name"
                name="name"
                required
                whileFocus={{ scale: 1.01 }}
                className="mt-2 w-full rounded border border-gray-300 p-3 focus:border-red-500 focus:outline-none"
                placeholder="Your Name"
              />
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <motion.input
                id="email"
                name="email"
                type="email"
                required
                whileFocus={{ scale: 1.01 }}
                className="mt-2 w-full rounded border border-gray-300 p-3 focus:border-red-500 focus:outline-none"
                placeholder="you@email.com"
              />
            </motion.div>

            {/* Phone */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <motion.input
                id="phone"
                name="phone"
                type="tel"
                required
                whileFocus={{ scale: 1.01 }}
                className="mt-2 w-full rounded border border-gray-300 p-3 focus:border-red-500 focus:outline-none"
                placeholder="(123) 456-7890"
              />
            </motion.div>

            {/* Service Dropdown */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                Select Service
              </label>
              <motion.select
                id="service"
                name="service"
                required
                whileFocus={{ scale: 1.01 }}
                className="mt-2 w-full rounded border border-gray-300 p-3 focus:border-red-500 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {[
                  "Landscape Maintenance",
                  "New Landscape Installation",
                  "Irrigation Systems",
                  "Hardscaping",
                  "Deck/Fence Work",
                  "Lawn/Sod Services",
                  "Seasonal Cleanup",
                  "Other",
                ].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </motion.select>
            </motion.div>

            {/* Message Box */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message / Details About Your Project
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={5}
                required
                whileFocus={{ scale: 1.01 }}
                className="mt-2 w-full rounded border border-gray-300 p-3 focus:border-red-500 focus:outline-none"
                placeholder="Share your vision, timeline, and any details we should know."
              ></motion.textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded bg-red-600 py-3 text-lg font-semibold text-white transition hover:bg-red-700"
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex h-full flex-col items-center justify-center gap-6 rounded-2xl bg-white p-8 text-center shadow-lg"
        >
          <img src={logoC} alt="Giovanni's Landscaping logo" className="h-75 w-75 object-contain" />
          <h3 className="text-3xl font-bold text-gray-900">Connect With Us</h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            At Giovanni’s Landscaping, we’re here to help you bring your outdoor vision to life. Whether you need
            regular maintenance or a complete landscape transformation, our team is ready to assist you.
          </motion.p>

          <div className="space-y-4 text-lg text-gray-800">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-red-600"
            >
              📞 Contact Information
            </motion.p>

            <motion.p whileHover={{ x: 6 }}>
              <span className="font-semibold text-gray-900">Phone:</span> (xxx) xxx-xxxx
            </motion.p>
            <motion.p whileHover={{ x: 6 }}>
              <span className="font-semibold text-gray-900">Email:</span> info@giovannislandscaping.com
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
