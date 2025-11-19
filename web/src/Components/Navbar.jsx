import { useEffect, useState } from "react";
import Logo from "../assets/logo-c.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      setShowNav(current < lastScroll || current < 10);
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      bg-white/70 backdrop-blur-xl shadow-lg border-b border-red-100`}
    >
      <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={Logo}
            alt="Giovanni's Landscaping Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-all duration-300 hover:scale-110"
          />

          {/* Responsive text size + spacing */}
          <span
            className="text-base sm:text-lg md:text-xl font-bold tracking-tight hover:text-red-700 transition-all"
            style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
          >
            Giovanni’s Landscaping
          </span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer font-medium text-lg relative group transition"
            >
              <span
                className={`transition-all duration-300 ${
                  active === item.id
                    ? "text-red-600"
                    : "text-gray-900 group-hover:text-red-500"
                }`}
              >
                {item.label}
              </span>

              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300 ${
                  active === item.id
                    ? "w-full bg-red-600"
                    : "w-0 group-hover:w-full bg-red-300"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden text-red-600 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden bg-white shadow-lg transition-all duration-500
          ${isOpen ? "max-h-80 p-4" : "max-h-0 p-0 overflow-hidden"}
        `}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              w-full text-left py-4 text-lg font-medium border-b
              ${active === item.id ? "text-red-600" : "text-gray-900"}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
