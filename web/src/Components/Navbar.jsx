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
      setShowNav(current < lastScroll);
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
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        bg-white/80 backdrop-blur-xl shadow-lg border-b border-red-100
      `}
    >
      <nav className="max-w-8xl mx-auto w-full px-8 py-2 flex justify-between items-center">

        {/* Logo + Text */}
        <div
          className="flex items-center gap-3 ml-0"
          onClick={() => scrollToSection("about")}
        >
          <img
            src={Logo}
            alt="Giovanni's Landscaping Logo"
            className="h-15 w-15 object-contain transition-transform duration-500 group-hover:scale-110"
          />

          <span
            className="text-xl font-bold tracking-tight group-hover:text-red-700 transition-all"
            style={{ fontFamily: "'Times New Roman', Georgia, 'Times New Roman', Times,  serif" }}
          >
            Giovanni’s Landscaping
          </span>


        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer font-medium text-lg relative transition duration-300 group"
            >
              <span
                className={`
                  transition-all duration-300
                  ${active === item.id ? "text-red-600" : "text-gray-800 group-hover:text-red-500"}
                `}
              >
                {item.label}
              </span>

              {/* Animated Underline */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300
                  ${active === item.id ? "w-full bg-red-600" : "w-0 group-hover:w-full bg-red-300"}
                `}
              ></span>

              {/* Glow hover effect */}
              <span
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-10
                  bg-red-500 blur-xl rounded-full transition-all duration-300
                "
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
       
        <button
          className="md:hidden text-red-600 "
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden flex flex-col bg-white shadow-lg overflow-hidden transition-all duration-500
          ${isOpen ? "max-h-64 p-4" : "max-h-0 p-0"}
        `}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              text-left py-3 text-lg font-medium border-b 
              ${active === item.id ? "text-red-600" : "text-gray-800"}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
