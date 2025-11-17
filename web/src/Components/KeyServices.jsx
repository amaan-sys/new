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
      title: "Landscape Creation & Installation",
      text: "Complete builds — design, plants, pathways, structural features.",
      img: creationImg,
    },
    {
      title: "Landscape Maintenance",
      text: "Monthly care: pruning, feeding, pest control, irrigation checks.",
      img: maintenanceImg,
    },
    {
      title: "Irrigation Systems",
      text: "Installations, repairs, upgrades, and optimization.",
      img: irrigationImg,
    },
    {
      title: "Hardscaping & Stonework",
      text: "Patios, walkways, retaining walls, and stone features.",
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
    <section id="services" className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center text-red-600 mb-14 tracking-tight">
          Our Key Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group 
                relative 
                bg-white 
                rounded-xl 
                overflow-hidden 
                shadow-md 
                hover:shadow-2xl 
                transform 
                hover:-translate-y-2 
                transition-all 
                duration-700 
                border border-red-100
              "
            >

              {/* Service Image */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white/90 backdrop-blur-md transition-colors duration-500 group-hover:bg-red-50">
                <h3 className="text-2xl font-bold text-red-600 mb-2 group-hover:text-red-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {service.text}
                </p>

                {/* Animated Accent Bar */}
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
