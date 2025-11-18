import { Leaf, Star, Recycle, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Soft red background accents */}
      <div className="absolute top-0 -right-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-8 lg:px-14 grid lg:grid-cols-2 items-start gap-20 relative z-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 mb-3">Why Choose Us</h2>
          <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
            Trusted, experienced, and focused on long-term landscape health — what sets Giovanni's Landscaping apart.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#E8EBE5] h-[120px] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-green-600">
                <Leaf size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Built on Trust</h3>
                <p className="text-gray-500 text-sm mt-1">Reliable service, local reputation.</p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#E8EBE5] h-[120px] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <Star size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Quality Craftsmanship</h3>
                <p className="text-gray-500 text-sm mt-1">Attention to detail in every project.</p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#E8EBE5] h-[120px] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <Recycle size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Sustainable Methods</h3>
                <p className="text-gray-500 text-sm mt-1">Organic practices whenever possible.</p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#E8EBE5] h-[120px] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CheckCircle size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">Meticulous Detail</h3>
                <p className="text-gray-500 text-sm mt-1">Precision in design, planting, and care.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-12 rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E8F5E8]">
          <h3 className="text-2xl font-bold text-red-600 mb-6">Our Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-[17px]">
            Our reputation is built on trust, quality, and meticulous attention to detail. We take pride in our work, use sustainable and organic methods whenever possible, and treat every project — big or small — with the same level of care and craftsmanship.
          </p>
          <p className="text-gray-700 leading-relaxed text-[17px]">Your landscape is a long-term investment, and we’re here to help it thrive.</p>
        </div>
      </div>
    </section>
  );
}
