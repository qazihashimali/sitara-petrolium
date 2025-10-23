import React from "react";
import Title from "./Title";
import { images } from "../assets/assets";

const CoreBusiness = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <Title
        title="Existing Core Business"
        subtitle="Strengthening our core in petroleum and logistics by ensuring smarter fuel delivery, wider reach, and operational excellence."
      />

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
        {/* Petrol Pumps */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary mb-3">Petrol Pumps</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Nationwide fuel stations offering premium fuels and added retail
            services through NFR outlets.
          </p>
          <div className="rounded-[30px] overflow-hidden shadow-lg">
            <img
              src={images.pump}
              alt="Petrol Pumps"
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Logistics */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-500 mb-3">Logistics</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Safe and reliable fuel transportation with 400+ dedicated vehicles
            nationwide.
          </p>
          <div className="rounded-[30px] overflow-hidden shadow-lg">
            <img
              src={images.logistic}
              alt="Logistics"
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBusiness;
