export default function WhyChooseUs() {
  return (
    <section className="py-24 text-red-600">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-700 mb-10 leading-relaxed max-w-lg">
            Trusted, experienced, and focused on long-term landscape health — 
            what sets Giovanni's Landscaping apart.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 bg-white rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.05)] border border-red-100 h-[110px] flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-green-100 ring-1 ring-red-200 flex items-center justify-center text-2xl">🌿</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Built on Trust</h3>
                <p className="text-gray-600 text-sm">Reliable service, local reputation.</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.05)] border border-red-100 h-[110px] flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-yellow-100 ring-1 ring-red-200 flex items-center justify-center text-2xl">⭐</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Quality Craftsmanship</h3>
                <p className="text-gray-600 text-sm">Attention to detail in every project.</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.05)] border border-red-100 h-[110px] flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-teal-100 ring-1 ring-red-200 flex items-center justify-center text-2xl">♻️</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Sustainable Methods</h3>
                <p className="text-gray-600 text-sm">Organic practices whenever possible.</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.05)] border border-red-100 h-[110px] flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-blue-100 ring-1 ring-red-200 flex items-center justify-center text-2xl">✔️</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Meticulous Detail</h3>
                <p className="text-gray-600 text-sm">Precision in design, planting, and care.</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — APPROACH */}
        <div className="bg-white p-12 rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.05)] border border-red-100">
          <h3 className="text-2xl font-extrabold text-red-600 mb-6">
            Our Approach
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6 text-[17px]">
            Our reputation is built on trust, quality, and meticulous attention 
            to detail. We take pride in our work, use sustainable and organic 
            methods whenever possible, and treat every project — big or small — 
            with the same level of care and craftsmanship.
          </p>

          <p className="text-gray-700 leading-relaxed text-[17px]">
            Your landscape is a long-term investment, and we’re here to help it thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
