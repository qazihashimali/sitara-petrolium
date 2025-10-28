import React from "react";
import { Wrench, CircleGauge, Car, ShieldCheck } from "lucide-react";

export default function SitaraAutoService() {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-red-600" />,
      title: "Oil & Filter Change",
      description:
        "Keep your engine performing at its best with premium oil and expert filter replacement — fast, efficient, and reliable.",
    },
    {
      icon: <CircleGauge className="h-12 w-12 text-red-600" />,
      title: "Tire Replacement & Balancing",
      description:
        "Ensure smooth rides with top-quality tires, precision balancing, and alignment services from our skilled technicians.",
    },
    {
      icon: <Car className="h-12 w-12 text-red-600" />,
      title: "Brake & Safety Inspection",
      description:
        "Comprehensive brake system checks, pad replacements, and safety diagnostics for confident driving every day.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-10">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          SITARA AUTO SERVICE
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Reliable Car Care, Trusted by Drivers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Experience professional maintenance, quick repairs, and genuine care.
          Sitara Auto Service keeps your vehicle running smoothly with expert
          technicians, transparent pricing, and trusted quality.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center"
          >
            <div className="mb-5">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* INFO SECTION */}
      <div className="text-center mt-16 bg-white border border-gray-200 rounded-2xl shadow-sm py-12 px-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Expert Technicians, Quality Service
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          Our service centers feature state-of-the-art diagnostic tools, genuine
          parts, and certified professionals dedicated to providing efficient and
          trustworthy car care — every single time.
        </p>
        <ul className="text-gray-700 text-sm space-y-2 max-w-md mx-auto text-left mb-8">
          <li>✅ Genuine parts and transparent pricing</li>
          <li>✅ Express servicing for minimal downtime</li>
          <li>✅ Comfortable customer waiting area</li>
          <li>✅ 24/7 roadside assistance at select stations</li>
        </ul>
        <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all">
          Schedule Service
        </button>
      </div>
    </section>
  );
}
