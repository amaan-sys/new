import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [active, setActive] = useState("home");
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Hide navbar when scrolling down
      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Shrink navbar slightly when scrolled
      if (current > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToSection = (id) => {
    setActive(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${shrink ? "py-2 bg-white/20 shadow-lg" : "py-4 bg-white/40"}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Giovanni's Landscaping"
          className={`h-12 w-auto transition-all duration-500 cursor-pointer ${
            shrink ? "scale-90 opacity-90" : "scale-100 opacity-100"
          }`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActive("home");
          }}
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-red-600 font-semibold">
          {["home", "services", "about", "contact"].map((item) => (
            <li
              key={item}
              onClick={() =>
                item === "home"
                  ? (window.scrollTo({ top: 0, behavior: "smooth" }), setActive("home"))
                  : scrollToSection(item)
              }
              className={`cursor-pointer capitalize transition-all duration-300 relative group ${
                active === item ? "text-black" : "text-red-600"
              }`}
            >
              {item}
              {/* underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div
            className={`h-1 w-7 bg-red-600 mb-1 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-7 bg-red-600 mb-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-7 bg-red-600 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col bg-white/80 backdrop-blur-lg text-red-700 font-medium text-lg absolute w-full left-0 shadow-xl transition-all duration-500 overflow-hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        {["home", "services", "about", "contact"].map((item) => (
          <a
            key={item}
            onClick={() =>
              item === "home"
                ? (window.scrollTo({ top: 0, behavior: "smooth" }), setActive("home"), setOpen(false))
                : scrollToSection(item)
            }
            className={`p-4 border-b cursor-pointer transition-all duration-300 ${
              active === item
                ? "bg-red-600 text-white"
                : "hover:bg-red-600 hover:text-white"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
