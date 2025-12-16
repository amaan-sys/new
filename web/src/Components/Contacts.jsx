import { motion } from "framer-motion";
import logoC from "../assets/logo-c.png";
import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 font-serif">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        {/* LEFT SECTION — FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col w-full"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600">
            Submit a Request
          </h2>

          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
            Tell us more about your project and we&apos;ll reach out with the
            next steps.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-5 w-full"
          >
            {/* NAME */}
            <motion.div className="w-full">
              <label className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <motion.input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-red-500 focus:outline-none"
                placeholder="Your Name"
              />
            </motion.div>

            {/* EMAIL */}
            <motion.div className="w-full">
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <motion.input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-red-500 focus:outline-none"
                placeholder="you@email.com"
              />
            </motion.div>

            {/* PHONE */}
            <motion.div className="w-full">
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <motion.input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-red-500 focus:outline-none"
                placeholder="(123) 456-7890"
              />
            </motion.div>

            {/* SERVICE DROPDOWN */}
            <motion.div className="w-full">
              <label className="block text-sm font-semibold text-gray-700">
                Select Service
              </label>
              <motion.select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                defaultValue=""
                whileFocus={{ scale: 1.01 }}
                className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-red-500 focus:outline-none"
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
                  <option key={service}>{service}</option>
                ))}
              </motion.select>
            </motion.div>

            {/* MESSAGE */}
            <motion.div className="w-full">
              <label className="block text-sm font-semibold text-gray-700">
                Message / Project Details
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-sm sm:text-base focus:border-red-500 focus:outline-none"
                placeholder="Share your vision, timeline, and details we should know."
              ></motion.textarea>
            </motion.div>

            {/* BUTTON */}
            <motion.button
  type="submit"
  disabled={loading}
  whileHover={!loading ? { scale: 1.01 } : {}}
  whileTap={!loading ? { scale: 0.95 } : {}}
  className={`w-full rounded-lg py-3 text-base sm:text-lg font-semibold text-white transition
    ${loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-red-600 hover:bg-red-700"
    }`}
>
  {loading ? "Sending..." : "Submit Request"}
</motion.button>


            {status && (
  <p
    className={`text-sm text-center mt-2 ${
      status.includes("success")
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {status}
  </p>
)}

          </form>
        </motion.div>

        {/* RIGHT SECTION — LOGO + CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between rounded-2xl rounded-3xl border border-gray-300 p-6 sm:p-10 text-center shadow-xl w-full"
        >
          <img
            src={logoC}
            alt="Giovanni's Landscaping logo"
            className="h-32 w-32 sm:h-75 sm:w-75 object-contain"
          />

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            Connect With Us
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 text-sm sm:text-base px-1 sm:px-4 leading-relaxed mt-3"
          >
            At Giovanni’s Landscaping, we’re here to help you bring your outdoor
            vision to life.
          </motion.p>

          <div className="space-y-3 text-gray-800 mt-6">
            <p className="font-semibold text-red-600 text-base sm:text-lg">
              📞 Contact Information
            </p>

            <motion.p className="text-sm sm:text-base">
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              510.521.2171
            </motion.p>

            <motion.p className="text-sm sm:text-base">
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              giovannis@giovannislandscaping.net
            </motion.p>
          </div>

          {/* BOOK APPOINTMENT BUTTON */}
          <motion.a
            href="https://giovannislandscaping.youcanbook.me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full rounded-lg bg-red-600 py-3 text-base sm:text-lg font-semibold text-white transition hover:bg-red-700 shadow-lg text-center block"
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
