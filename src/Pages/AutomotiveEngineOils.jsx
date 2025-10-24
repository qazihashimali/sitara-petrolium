import React from "react";
import { Droplets, Gauge, ShieldCheck } from "lucide-react";

const AutomotiveEngineOils = () => {
  return (
    <section className="relative bg-gradient-to-b from-yellow-50 via-white to-yellow-100 py-20 px-6 md:px-12 overflow-hidden">
      {/* Soft metallic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 via-transparent to-gray-100/40"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Side Image */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-yellow-200">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/08/12/22/engine-oil-2127636_1280.jpg"
            alt="Automotive Engine Oil"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
            <h3 className="text-2xl font-bold mb-1 tracking-wide text-yellow-300">
              Power That Protects
            </h3>
            <p className="text-sm text-gray-200 max-w-sm">
              Premium oil for precision performance and lasting reliability.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Automotive <span className="text-yellow-600">Engine Oils</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-yellow-700">Sitara Petroleum</strong> offers
            advanced <strong>engine oils</strong> formulated for modern engines
            — maximizing protection, reducing friction, and ensuring consistent
            performance under any condition.
          </p>

          {/* Feature Icons */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {/* Feature 1 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 text-yellow-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-yellow-200">
                <Gauge className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">Peak Performance</h4>
              <p className="text-sm text-gray-600">
                Tuned for maximum engine output and endurance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 text-yellow-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-yellow-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">Engine Protection</h4>
              <p className="text-sm text-gray-600">
                Fights wear, corrosion, and sludge build-up effectively.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 text-yellow-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-yellow-200">
                <Droplets className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">
                Superior Lubrication
              </h4>
              <p className="text-sm text-gray-600">
                Ensures smooth flow and minimal friction under pressure.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
              Explore Our Range
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveEngineOils;
