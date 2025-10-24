import React from "react";
import { Factory, Cog, Shield } from "lucide-react";

const IndustrialLubricants = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6 md:px-12 overflow-hidden">
      {/* Subtle metallic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 via-transparent to-gray-100/40"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Side Image */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-yellow-200">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/31/11/21/machine-2552660_1280.jpg"
            alt="Industrial Lubricants"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
            <h3 className="text-2xl font-bold mb-1 tracking-wide text-yellow-300">
              Strength Meets Precision
            </h3>
            <p className="text-sm text-gray-200 max-w-sm">
              Industrial-grade lubricants built for endurance and efficiency.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Industrial <span className="text-yellow-600">Lubricants</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-yellow-700">Sitara Petroleum’s</strong>{" "}
            <strong>industrial lubricants</strong> are engineered to deliver
            maximum protection and performance for heavy-duty machinery,
            reducing friction, wear, and downtime across industries.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {/* Feature 1 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 text-yellow-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-yellow-200">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">
                Heavy-Duty Strength
              </h4>
              <p className="text-sm text-gray-600">
                Designed to withstand extreme pressures and temperatures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 text-yellow-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-yellow-200">
                <Cog className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">Smooth Operation</h4>
              <p className="text-sm text-gray-600">
                Ensures efficient machinery movement with minimal friction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 text-yellow-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3 shadow-md border border-yellow-200">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-800">
                Long-Term Protection
              </h4>
              <p className="text-sm text-gray-600">
                Extends machinery life by reducing wear and tear.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
              Discover Industrial Range
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialLubricants;
