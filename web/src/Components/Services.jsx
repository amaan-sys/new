export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-red-600 mb-10">Our Services</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Lawn Care Card */}
        <div className="relative group transition-all transform hover:scale-105 hover:shadow-lg overflow-hidden rounded-xl">
          <div className="absolute inset-0  from-red-500 to-red-700 opacity-40 group-hover:opacity-50 transition-all"></div>
          <div className="relative z-10 p-6 bg-white rounded-xl shadow-md group-hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600 group-hover:animate-bounce transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Lawn Care</h3>
            <p className="text-gray-600">Weekly maintenance, mowing, trimming, and cleanup for a lush lawn.</p>
          </div>
        </div>

        {/* Hardscaping Card */}
        <div className="relative group transition-all transform hover:scale-105 hover:shadow-lg overflow-hidden rounded-xl">
          <div className="absolute inset-0  from-red-500 to-red-700 opacity-40 group-hover:opacity-50 transition-all"></div>
          <div className="relative z-10 p-6 bg-white rounded-xl shadow-md group-hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600 group-hover:animate-bounce transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3l-4 4h3v12H6V7h3L5 3" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Hardscaping</h3>
            <p className="text-gray-600">Designing patios, retaining walls, pathways, and outdoor living spaces.</p>
          </div>
        </div>

        {/* Irrigation Card */}
        <div className="relative group transition-all transform hover:scale-105 hover:shadow-lg overflow-hidden rounded-xl">
          <div className="absolute inset-0  from-red-500 to-red-700 opacity-40 group-hover:opacity-50 transition-all"></div>
          <div className="relative z-10 p-6 bg-white rounded-xl shadow-md group-hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600 group-hover:animate-bounce transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v22m11-11H1" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Irrigation</h3>
            <p className="text-gray-600">Install and maintain efficient irrigation systems for your landscape.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
