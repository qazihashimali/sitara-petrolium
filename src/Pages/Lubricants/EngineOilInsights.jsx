import React from "react";
import { Droplets, Gauge, ShieldCheck } from "lucide-react";

const EngineOilInsights = () => {
  return (
    <section className="relative bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-20 px-6 md:px-12 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-100/30 via-transparent to-yellow-50/40"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Side Image */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-yellow-200">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/09/09/30/motor-oil-1247633_1280.jpg"
            alt="Engine Oil Insights"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
            <h3 className="text-2xl font-bold mb-1 tracking-wide text-yellow-300">
              Engineered for Performance
            </h3>
            <p className="text-sm text-gray-200 max-w-sm">
              Precision-engineered lubricants for superior engine care.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Engine Oil <span className="text-red-600">Insights</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-red-700">Sitara Petroleum’s</strong> advanced
            <strong> automotive engine oils</strong> are formulated with next-gen
            additives to ensure high thermal stability, smooth engine
            performance, and protection against sludge formation.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {/* Feature 1 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-red-200">
                <Droplets className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">Superior Lubrication</h4>
              <p className="text-sm text-gray-600">
                Reduces engine friction and enhances fuel efficiency.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-red-200">
                <Gauge className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">High Thermal Stability</h4>
              <p className="text-sm text-gray-600">
                Maintains performance in extreme heat and high-speed conditions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-red-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">Long-Lasting Protection</h4>
              <p className="text-sm text-gray-600">
                Prevents sludge, oxidation, and engine wear for longevity.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
              Discover Engine Oils
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineOilInsights;