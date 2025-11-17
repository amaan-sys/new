import { useEffect, useState } from "react";
import whoWeAreImg from "../assets/whoweare.webp"
import mission from "../assets/ourmission.png"
import vision from "../assets/ourvision.avif"

export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reveal = () => {
      if (window.scrollY > 200) setVisible(true);
    };
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const fadeUp = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <section className="w-full py-15 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black text-red-600 mb-14 text-center tracking-tight">
          About Us
        </h2>

        {/* WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE CARD – ANGLED SHAPE */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-red-600 rounded-tr-[80px] rounded-bl-[80px] opacity-20"></div>
            <img
              src={whoWeAreImg}
              className="w-full h-[380px] object-cover shadow-xl rounded-lg"
            />
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div className="space-y-5">
            <h3 className="text-3xl font-bold text-red-600 leading-tight ">
              Who We Are
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Giovanni’s Landscaping is a team of passionate professionals dedicated
              to building beautiful outdoor environments. We specialize in complete
              landscape care — from lawn maintenance and tree care to irrigation
              systems and custom outdoor designs. Our work reflects decades of
              craftsmanship, precision, and commitment to quality.
            </p>
          </div>
        </div>




{/* VISION + LINE + MISSION SECTION */}
<div className="mt-24 max-w-6xl mx-auto px-6">

  <div className="grid md:grid-cols-3 gap-12 items-center text-center">

    {/* LEFT — VISION */}
    <div className="space-y-5">
      <h3 className="text-3xl font-extrabold text-red-600 leading-tight">
        Our Vision
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed font-semibold">
        Our vision is to create outdoor spaces that inspire, enrich, and bring
        lasting value to our clients. We aim to become a leading landscaping
        company known for innovative designs, exceptional service quality, and
        environmental responsibility.
      </p>
    </div>

    {/* CENTER — RED DIVIDER LINE */}
    <div className="flex justify-center">
      <div className="w-1 h-60 bg-red-600 rounded-full"></div>
    </div>

    {/* RIGHT — MISSION */}
    <div className="space-y-5">
      <h3 className="text-3xl font-extrabold text-red-600 leading-tight">
        Our Mission
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed font-semibold">
        Our mission is to deliver dependable, high-quality landscaping
        solutions that enhance the beauty, health, and functionality of your
        outdoor space. We strive to exceed expectations through attention to
        detail, professional expertise, and a strong focus on customer
        satisfaction.
      </p>
    </div>

  </div>
</div>




      </div>
    </section>


  );
}