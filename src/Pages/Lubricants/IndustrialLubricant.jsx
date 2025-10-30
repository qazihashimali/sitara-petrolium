import React from "react";
import { Factory, Cog, Shield } from "lucide-react";
import Title from "../../Components/Title";

const IndustrialLubricants = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-white to-gray-50 py-20 px-6 md:px-12 overflow-hidden">
      {/* Subtle metallic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(253,230,138,0.25),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 items-start relative z-10">
        {/* Left Side Content */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Industrial <span className="text-amber-600">Lubricants</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            <strong className="text-amber-700">Our</strong>{" "}
            <strong>industrial lubricants</strong> are designed to offer maximum
            protection and performance for heavy-duty machinery, effectively
            reducing friction, wear, and downtime across various industries.
            From manufacturing plants to construction sites, we provide
            high-performance lubricants that ensure smooth industrial
            operations, even in the most demanding conditions.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            {/* Feature 1 */}
            <div className="group text-center p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-1">
                Heavy-Duty Strength
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Our industrial lubricants are formulated to endure extreme
                environments. They are designed to{" "}
                <b>
                  withstand high loads, extreme temperatures, and continuous
                  operations
                </b>
                , maintaining film strength under pressure to ensure
                uninterrupted performance in heavy-duty applications such as
                compressors, turbines, gear systems, and hydraulic equipment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                <Cog className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-1">
                Smooth Operation
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Engineered for precision and efficiency, our lubricants help
                reduce internal resistance in mechanical systems. This results
                in{" "}
                <b>
                  lower operating temperatures, smoother mechanical movement,
                  and reduced energy consumption
                </b>
                , ultimately boosting the overall efficiency of your industrial
                setup.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800 text-lg mb-1">
                Long-Term Protection
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Our lubricants form a durable protective layer that minimises
                <b>
                  metal-to-metal contact, corrosion, and component degradation.
                </b>
                This leads to <b>longer machinery lifespan</b>, fewer
                breakdowns, and less unscheduled downtime, saving you money and
                maintenance effort over time.
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="pt-6">
            <Title
              title="Built for Industry. Backed by Science."
              subtitle={`Our industrial lubricants use advanced additive technology for:<br />
              • Power plants and utilities<br />
              • Manufacturing and processing industries<br />
              • Mining and construction operations<br />
              • Agricultural and heavy transport sectors<br />
              Each product complies with relevant OEM standards and international certifications.`}
              align="left"
              textColor="text-gray-900"
              subtitleColor="text-gray-600"
            />
          </div>
        </div>

        {/* Right Side Image (aligned with title top) */}
        <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/50 group self-stretch">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/31/11/21/machine-2552660_1280.jpg"
            alt="Industrial Lubricants"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-1 tracking-wide text-amber-300">
              Strength Meets Precision
            </h3>
            <p className="text-sm md:text-base text-gray-200 max-w-xs leading-relaxed">
              Industrial-grade lubricants built for endurance and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialLubricants;
