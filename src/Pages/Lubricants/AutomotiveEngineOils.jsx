import React from "react";
import { Droplets, Gauge, ShieldCheck } from "lucide-react";
import Title from "../../Components/Title";

const AutomotiveEngineOils = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-white to-gray-50 py-20 px-6 md:px-12 overflow-hidden">
      {/* Subtle metallic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(254,202,202,0.25),transparent_70%)]"></div>

      <div class className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* -------------------------------------------------
            1. TEXT + IMAGE (left / right) – Reversed from Insights
        ------------------------------------------------- */}
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* LEFT – Text */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Automotive <span className="text-amber-600">Engine Oils</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong className="text-amber-700">We</strong> offers advanced{" "}
              <strong>engine oils</strong> formulated explicitly for modern
              engines. Our products maximise protection, reduce friction, and
              ensure consistent performance in all conditions. Whether for
              everyday commuters or high-performance fleets, our engine oils are
              engineered to meet the rigorous demands of today’s engines,
              delivering long-lasting reliability, thermal stability, and
              optimal lubrication in every driving environment.
            </p>
          </div>

          {/* RIGHT – Image */}
          <div className="md:col-span-3 relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/50 group h-80 md:h-full">
            <img
              src="/Sustainability-Banner.png"
              alt="Automotive Engine Oil"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-wide text-amber-300">
                Power That Protects
              </h3>
              <p className="text-sm text-gray-200 max-w-xs leading-relaxed">
                Premium oil for precision performance and lasting reliability.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------
            2. THREE FEATURE CARDS
        ------------------------------------------------- */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-amber-200 group-hover:scale-110 transition-transform duration-300">
              <Gauge className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">
              Peak Performance
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Our lubricants are designed to meet the stringent requirements of
              modern engine technology. With advanced viscosity control and
              thermal stability, Our engine oils help maintain{" "}
              <b>maximum power output, endurance, and fuel efficiency</b>—even
              under extreme conditions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-amber-200 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">
              Engine Protection
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The longevity of an engine depends on adequate protection, and
              that’s where we excel. Our oils help prevent wear, corrosion, and
              sludge buildup, preserving critical engine components and reducing
              long-term maintenance costs for both passenger and commercial
              vehicles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-amber-200 group-hover:scale-110 transition-transform duration-300">
              <Droplets className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">
              Superior Lubrication
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Every drop of our engine oil is engineered to minimise friction
              where it matters most. Using high-quality base oils and
              precision-formulated additives, Our engine oils provide
              <b>
                smooth flow, rapid start-up circulation, and dependable
                lubrication under high pressure and temperature.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveEngineOils;
