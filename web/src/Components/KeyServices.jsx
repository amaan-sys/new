import creationImg from "../assets/services/card1.jpg";
import maintenanceImg from "../assets/services/card2.jpg";
import irrigationImg from "../assets/services/card3.jpg";
import hardscapeImg from "../assets/services/card4.jpg";
import deckImg from "../assets/services/card5.jpg";
import sodImg from "../assets/services/card6.jpg";
import lightingImg from "../assets/services/card7.jpg";
import cleanupImg from "../assets/services/card8.jpg";

export default function KeyServices() {
  const services = [
    {
      title: "Landscape Build Installation",
      text: "Complete landscape builds with expert design, plants, pathways, features, and detailed finishing.",
      img: creationImg,
    },
    {
      title: "Landscape Maintenance",
      text: "Healthy landscapes through monthly care, ensuring vibrant growth, proper maintenance, and long-lasting beauty.",
      img: maintenanceImg,
    },
    {
      title: "Irrigation Systems Services",
      text: "We provide installations, repairs, upgrades, and optimization for reliable system performance.",
      img: irrigationImg,
    },
    {
      title: "Hardscaping Stonework",
      text: "Patios, walkways, retaining walls, and stone features crafted for durability, beauty, and function.",
      img: hardscapeImg,
    },
    {
      title: "Deck & Fence Services",
      text: "Construction, restoration, refinishing, and repairs.",
      img: deckImg,
    },
    {
      title: "Sod Installation & Restoration",
      text: "Leveling, soil prep, sod installation, turf rehab.",
      img: sodImg,
    },
    {
      title: "Lighting & Drainage",
      text: "Low-voltage lighting + drainage for safety & beauty.",
      img: lightingImg,
    },
    {
      title: "Seasonal & Deep Cleanups",
      text: "Leaf removal, pruning, weed control & seasonal care.",
      img: cleanupImg,
    },
  ];

  return (
    <section id="services" className="py-16 bg-white mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-14 tracking-tight">
          Our Key Services
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group 
                bg-white 
                rounded-2xl 
                overflow-hidden 
                shadow-md 
                hover:shadow-xl 
                transition-all 
                duration-500 
                border border-red-100
                hover:-translate-y-2
              "
            >

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 bg-white/90 backdrop-blur-md">
                <h3 className="text-xl font-bold text-red-600 mb-2 group-hover:text-red-700 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-800 transition">
                  {service.text}
                </p>

                {/* Accent Bar */}
                <div
                  className="
                    mt-4
                    h-1 
                    w-0 
                    bg-red-500 
                    rounded-full 
                    transition-all 
                    duration-700 
                    group-hover:w-full
                  "
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
