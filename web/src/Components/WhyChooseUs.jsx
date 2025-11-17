import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) setShow(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Soft red background accent */}
      <div className="absolute top-0 -right-20 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative">

        {/* SECTION HEADER */}
        <h2 className="text-4xl font-extrabold text-red-600 tracking-tight mb-10">
          Why Choose Us
        </h2>

        {/* MAIN CARD */}
        <div
          className={`bg-white shadow-xl rounded-3xl p-10 border border-red-200 transition-all duration-1000 mx-auto max-w-3xl
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >

          {/* Decorative top red bar */}
          <div className="w-20 h-2 mx-auto mb-6 bg-red-600 rounded-full"></div>

          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Our reputation is built on trust, quality, and meticulous attention to
            detail. We take pride in our work, use sustainable and organic methods
            whenever possible, and treat every project — big or small — with the
            same level of care and craftsmanship. 
          </p>
          <p className="text-gray-700 text-lg mt-4 leading-relaxed font-medium">
            Your landscape is a long-term investment, and we’re here to help it
            thrive.
          </p>

          {/* Bottom animated red line */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
