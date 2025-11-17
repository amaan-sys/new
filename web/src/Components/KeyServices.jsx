export default function KeyServices() {
  const services = [
    {
      title: "Landscape Creation & Installation",
      text: "Complete builds — design, plants, pathways, structural features.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      title: "Landscape Maintenance",
      text: "Monthly care: pruning, feeding, pest control, irrigation checks.",
      img: "https://images.unsplash.com/photo-1473445730015-841f29a9490b",
    },
    {
      title: "Irrigation Systems",
      text: "Installations, repairs, upgrades, and optimization.",
      img: "https://images.unsplash.com/photo-1602124582971-c7c29f0f1410",
    },
    {
      title: "Hardscaping & Stonework",
      text: "Patios, walkways, retaining walls, and stone features.",
      img: "https://images.unsplash.com/photo-1607923432681-e6e3c3b022ad",
    },
    {
      title: "Deck & Fence Services",
      text: "Construction, restoration, refinishing, and repairs.",
      img: "https://images.unsplash.com/photo-1539035104074-dee66086a3f8",
    },
    {
      title: "Sod Installation & Restoration",
      text: "Leveling, soil prep, sod installation, turf rehab.",
      img: "https://images.unsplash.com/photo-1586099840928-2d6a9c2f6e53",
    },
    {
      title: "Lighting & Drainage",
      text: "Low-voltage lighting + drainage for safety & beauty.",
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    },
    {
      title: "Seasonal & Deep Cleanups",
      text: "Leaf removal, pruning, weed control & seasonal care.",
      img: "https://images.unsplash.com/photo-1597701347891-dcead3c2b575",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center text-red-600 mb-14 tracking-tight">
          Our Key Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
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

                {/* Accent Animated Bar */}
                <div className="
                  mt-4 
                  h-1 
                  w-0 
                  bg-red-500 
                  rounded-full 
                  transition-all 
                  duration-700 
                  group-hover:w-full
                "></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
