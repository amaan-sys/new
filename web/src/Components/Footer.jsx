import { motion } from "framer-motion";
import logoC from "../assets/logo-c.png";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
        <div className="grid gap-8 text-center md:grid-cols-[1.5fr_repeat(2,1fr)] md:text-left">
          {/* Logo + Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <motion.img
                src={logoC}
                alt="Giovanni's Landscaping logo"
                className="h-24 w-auto md:h-28"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <div className="text-base text-white/80 md:text-lg">
                <p className="text-2xl font-semibold text-white md:text-3xl">Giovanni&apos;s Landscaping</p>
                <p>Rooted in service since 1998.</p>
                <p>Transforming Bay Area homes with care.</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:justify-self-center"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-base text-white md:text-lg">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 6 }}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:justify-self-end"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-base text-white md:text-lg">
              <motion.li whileHover={{ x: 6 }}>
                <a href="tel:+15105212171" className="transition hover:text-white">
                  Phone: (510) 521-2171
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 6 }}>
                <a
                  href="mailto:giovannis@giovannislandscaping.net"
                  className="transition hover:text-white"
                >
                  giovannis@giovannislandscaping.net
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-sm text-white/70 md:flex-row"
        >
          <p>© {new Date().getFullYear()} Giovanni&apos;s Landscaping. All rights reserved.</p>
          <div className="flex gap-4">
            {[{ label: "Privacy" }, { label: "Terms" }, { label: "Contact" }].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.label.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}