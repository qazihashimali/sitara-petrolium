import React from "react";
import { Droplets, Gauge, ShieldCheck } from "lucide-react";
import Title from "../../Components/Title";

const EngineOilInsights = () => {
  return (
    <section className="relative bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-20 px-6 md:px-12 overflow-hidden">
      {/* Subtle metallic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(254,202,202,0.25),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* -------------------------------------------------
            1. TEXT + IMAGE (left / right)
        ------------------------------------------------- */}
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* LEFT – Text */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Engine Oil <span className="text-red-600">Insights</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong className="text-red-700">Our</strong>{" "}
              <strong>automotive engine oils</strong> are formulated with
              next-generation additives to ensure high thermal stability, smooth
              engine performance, and protection against sludge formation.
              Designed for modern engines, our lubricants blend
              chemistry and engineering to deliver performance you can rely on,
              from daily drives to high-demand operating conditions.
            </p>
          </div>

          {/* RIGHT – Image */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl border border-red-200/50 group">
            <img
              src="/Sustainability-Banner.png"
              alt="Engine Oil Insights"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-wide text-red-300">
                Engineered for Performance
              </h3>
              <p className="text-sm text-gray-200 max-w-xs leading-relaxed">
                Precision-engineered lubricants for superior engine care.
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
            <div className="bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-red-200 group-hover:scale-110 transition-transform duration-300">
              <Droplets className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">
              Superior Lubrication
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Our engine oils are crafted to provide{" "}
              <b>low-friction performance</b>, helping your engine run smoother
              and cooler. By minimising internal friction, our oils optimise{" "}
              <b>fuel efficiency</b> and reduce overall wear.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-red-200 group-hover:scale-110 transition-transform duration-300">
              <Gauge className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">
              High Thermal Stability
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Extreme heat shouldn’t lead to excessive wear. Our engine oils
              are engineered for <b>temperature resilience</b>, maintaining oil
              viscosity even during high-speed driving or intense stop-and-go
              conditions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="bg-red-100 text-red-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-red-200 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">
              Long-Lasting Protection
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              With powerful anti-oxidation and anti-sludge technologies, our
              oils <b>prevent harmful deposits</b>, reduce corrosion, and{" "}
              <b>extend engine life</b> over thousands of kilometres.
            </p>
          </div>
        </div>

        {/* -------------------------------------------------
            3. WHAT SETS OUR OILS APART?
        ------------------------------------------------- */}
        <div className="pt-6">
          <Title
            title="What Sets Our Oils Apart?"
            subtitle={`• Advanced additive packages for cleaner performance<br />
                     • Tested for both petrol and diesel engines<br />
                     • Compliant with OEM and international standards<br />
                     • Multiple viscosity grades suited for all climates`}
            align="left"
            textColor="text-gray-900"
            subtitleColor="text-gray-600"
          />
        </div>
      </div>
    </section>
  );
};

export default EngineOilInsights;
