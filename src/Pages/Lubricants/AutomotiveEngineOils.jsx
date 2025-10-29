import React from "react";
import { Droplets, Gauge, ShieldCheck } from "lucide-react";

const AutomotiveEngineOils = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-white to-amber-100 py-24 px-6 md:px-12 overflow-hidden">
      {/* Background texture / gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(253,230,138,0.2),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side Image */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-amber-200 backdrop-blur-sm">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/08/12/22/engine-oil-2127636_1280.jpg"
            alt="Automotive Engine Oil"
            className="w-full h-[480px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>

          {/* Floating caption */}
          <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-1 tracking-wide text-amber-300">
              Power That Protects
            </h3>
            <p className="text-sm md:text-base text-gray-200 max-w-xs leading-relaxed">
              Premium oil for precision performance and lasting reliability.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-7">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Automotive <span className="text-amber-600">Engine Oils</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-amber-700">Sitara Petroleum</strong> offers
            advanced <strong>engine oils</strong> formulated explicitly for
            modern engines. Our products maximise protection, reduce friction,
            and ensure consistent performance in all conditions. Whether for
            everyday commuters or high-performance fleets, our engine oils are
            engineered to meet the rigorous demands of today’s engines,
            delivering long-lasting reliability, thermal stability, and optimal
            lubrication in every driving environment.
          </p>

          {/* Feature Icons */}
          <div className="grid sm:grid-cols-3 gap-8 pt-2">
            {/* Feature 1 */}
            <div className="group text-center p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                <Gauge className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-2">
                Peak Performance
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our lubricants are designed to meet the stringent requirements
                of modern engine technology. With advanced viscosity control and
                thermal stability, Sitara engine oils help maintain{" "}
                <b>maximum power output, endurance, and fuel efficiency</b>—even
                under extreme conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-2">
                Engine Protection
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The longevity of an engine depends on adequate protection, and
                that’s where we excel. Our oils help prevent wear, corrosion,
                and sludge buildup, preserving critical engine components and
                reducing long-term maintenance costs for both passenger and
                commercial vehicles.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-2">
                Superior Lubrication
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every drop of our engine oil is engineered to minimise friction
                where it matters most. Using high-quality base oils and
                precision-formulated additives, Sitara engine oils provide
                <b>
                  smooth flow, rapid start-up circulation, and dependable
                  lubrication under high pressure and temperature.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveEngineOils;
