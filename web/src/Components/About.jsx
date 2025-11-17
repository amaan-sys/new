import { useEffect, useState } from "react";

export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reveal = () => {
      if (window.scrollY > 200) setVisible(true);
    };
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-center text-red-600 mb-16 tracking-tight">
          About Giovanni’s Landscaping
        </h2>

        {/* Cards Grid */}
        <div
          className={`grid md:grid-cols-2 gap-10 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          {/* Who We Are Card */}
          <div className="
            bg-white rounded-2xl p-10 shadow-lg border border-red-200 
            hover:border-red-400 hover:shadow-red-200 
            hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.00]
            transition-all duration-500 md:col-span-2
          ">
            <h3 className="text-3xl font-bold text-red-600 mb-4 text-center">Who We Are</h3>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Founded in Alameda, California, Giovanni's Landscaping has proudly served the Bay Area for over
              <span className="font-bold text-red-600"> 25 years</span>. We go beyond basic gardening to focus on
              long-term plant health, soil care, design, and construction — creating landscapes that are both
              healthy and beautiful.
            </p>
          </div>

          {/* Vision Card */}
          <div className="
            bg-white rounded-2xl p-10 shadow-lg border border-red-200 
            hover:border-red-400 hover:shadow-red-200 
            hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.00]
            transition-all duration-500
          ">
            <h3 className="text-3xl font-bold text-red-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To create and maintain outdoor spaces that blend beauty, functionality, and sustainability —
              where thoughtful design and expert care bring lasting enjoyment and value to every property.
            </p>
          </div>

          {/* Mission Card */}
          <div className="
            bg-white rounded-2xl p-10 shadow-lg border border-red-200 
            hover:border-red-400 hover:shadow-red-200 
            hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.00]
            transition-all duration-500
          ">
            <h3 className="text-3xl font-bold text-red-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At Giovanni's Landscaping, we're dedicated to delivering quality craftsmanship and personalized
              service in every project we undertake. From detailed maintenance to landscape transformations,
              our mission is to help clients enjoy landscapes that thrive year-round.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
