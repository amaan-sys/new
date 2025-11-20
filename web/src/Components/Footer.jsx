import { Link } from "react-router-dom";
import logoC from "../assets/logo-c.png";
import emailIcon from "../assets/email-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-12 px-6 sm:px-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-12">

        {/* --- TOP GRID --- */}
        <div className="grid gap-12 text-center md:grid-cols-[1.5fr_1fr_1fr] md:text-left">

          {/* --- Logo + Description --- */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
              <img
                src={logoC}
                alt="Giovanni's Landscaping Logo"
                className="h-20 w-auto sm:h-24 md:h-28"
              />

              <div className="text-base text-white/90 md:text-lg max-w-xs md:max-w-none">
                <p className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                  Giovanni&apos;s Landscaping
                </p>
                <p className="text-white/90">Rooted in service since 1998.</p>
                <p className="text-white/90">Transforming Bay Area homes with care.</p>
              </div>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div className="md:justify-self-center">
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-white/70">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-base sm:text-lg">
              <li><a href="/#home" className="hover:text-white transition">Home</a></li>
              <li><a href="/#about" className="hover:text-white transition">About</a></li>
              <li><a href="/#services" className="hover:text-white transition">Services</a></li>
              <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div className="md:justify-self-end">
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-white/70">
              Contact
            </h3>

            <ul className="mt-4 space-y-2 text-base sm:text-lg">
              <li>
                <a href="tel:+15105212171" className="hover:text-white transition">
                  Phone: (510) 521-2171
                </a>
              </li>

              <li>
                <a
                  href="mailto:giovannis@giovannislandscaping.net"
                  className="hover:text-white flex items-center justify-center md:justify-start gap-2"
                >
                  <img
                    src={emailIcon}
                    alt="Email Icon"
                    className="h-5 w-5 object-contain"
                  />
                  giovannis@giovannislandscaping.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-white/80">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Giovanni&apos;s Landscaping. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/condition" className="hover:text-white transition">Terms</Link>
            <a href="/#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
