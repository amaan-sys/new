import logoC from "../assets/logo-c.png";
import emailIcon from "../assets/email-logo.jpg"; // make sure the file exists

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
        <div className="grid gap-8 text-center md:grid-cols-[1.5fr_repeat(2,1fr)] md:text-left">

          {/* Logo + About Text */}
          <div className="space-y-3">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <img
                src={logoC}
                alt="Giovanni's Landscaping logo"
                className="h-24 w-auto md:h-28"
              />

              <div className="text-base text-white/80 md:text-lg">
                <p className="text-2xl font-semibold text-white md:text-3xl">
                  Giovanni&apos;s Landscaping
                </p>
                <p>Rooted in service since 1998.</p>
                <p>Transforming Bay Area homes with care.</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-base text-white md:text-lg">
              {[
                { label: "Home", href: "./Hero.jsx" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base">
              Contact
            </h3>

            <ul className="mt-4 space-y-2 text-base text-white md:text-lg">
              <li>
                <a href="tel:+15105212171" className="transition hover:text-white">
                  Phone: (510) 521-2171
                </a>
              </li>

              <li>
                <a
                  href="mailto:giovannis@giovannislandscaping.net"
                  className="transition hover:text-white md:text-lg  items-center gap-2"
                >
                  <img
                    src={emailIcon}
                    alt="Email Icon"
                    className="inline h-5 w-5 object-contain justify-center"
                  />
                  giovannis@giovannislandscaping.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-sm text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} Giovanni&apos;s Landscaping. All rights reserved.</p>

          <div className="flex gap-4">
            {["Privacy", "Terms", "Contact"].map((label, i) => (
              <a
                key={i}
                href={`#${label.toLowerCase()}`}
                className="hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
