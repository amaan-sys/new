import logoC from "../assets/logo-c.png";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
        <div className="grid gap-8 text-center md:grid-cols-[1.5fr_repeat(2,1fr)] md:text-left">
          <div className="space-y-3">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <img src={logoC} alt="Giovanni's Landscaping logo" className="h-24 w-auto md:h-28" />
              <div className="text-base text-white/80 md:text-lg">
                <p className="text-2xl font-semibold text-white md:text-3xl">Giovanni&apos;s Landscaping</p>
                <p>Rooted in service since 1998.</p>
                <p>Transforming Bay Area homes with care.</p>
              </div>
            </div>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-base text-white md:text-lg">
              <li>
                <a href="#home" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base">Contact</h3>
            <ul className="mt-4 space-y-2 text-base text-white md:text-lg">
              <li>
                <a href="tel:+15105212171" className="transition hover:text-white">
                  Phone: (510) 521-2171
                </a>
              </li>
              <li>
                <a href="mailto:giovannis@giovannislandscaping.net" className="transition hover:text-white">
                  giovannis@giovannislandscaping.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-sm text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} Giovanni&apos;s Landscaping. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white">
              Terms
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}