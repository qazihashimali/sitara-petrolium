import React from "react";
import {
  Fuel,
  Gauge,
  Droplet,
  FlaskConical,
  ShieldCheck,
  Settings,
  Leaf,
  Shield,
} from "lucide-react";
import { images } from "../assets/assets";
import Title from "../Components/Title";

const FuelProduct = () => {
  const mainColor = "#c84347";

  return (
    <div className="min-h-screen bg-white font-inter text-gray-800">
      {/* Hero Section */}
      <section
        className="relative text-white py-28 md:py-36 text-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            " url('data:image/jpeg;base64,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')",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div> */}

        <div className="relative max-w-5xl mx-auto px-6 z-10">
          <span className="inline-block bg-white/90 text-xs font-semibold px-4 py-1 rounded-full uppercase mb-5 tracking-wider text-[#c84347] shadow-md">
            Fuel Products
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-xl">
            Optimized Power. Guaranteed Purity.
          </h2>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-95">
            Sitara Petroleum delivers a full range of premium motor fuels,
            engineered to maximize performance, efficiency, and reliability.
          </p>
        </div>
      </section>

      {/* Our Core Fuel Offerings */}
      <section className="py-20 px-6 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Title
              title="Our Core Fuel Offerings"
              subtitle="Reliable, high-performance fuels designed for every type of
              vehicle and industry."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="w-8 h-8 mr-3" />,
                title: "Sitara PMG 92",
                desc: "Clean-burning gasoline optimized for modern engines, ensuring fuel efficiency and lower emissions.",
                list: [
                  "92 RON premium-grade",
                  "Improved combustion & mileage",
                  "Anti-knock & detergent additives",
                ],
              },
              {
                icon: <Gauge className="w-8 h-8 mr-3" />,
                title: "Sitara HOBC 97",
                desc: "High-octane fuel engineered for high-performance and luxury vehicles.",
                list: [
                  "97 RON with detergents",
                  "Prevents engine knocking",
                  "Ideal for turbo engines",
                ],
              },
              {
                icon: <Fuel className="w-8 h-8 mr-3" />,
                title: "Sitara HSD",
                desc: "Premium diesel designed for consistent power, reduced emissions, and engine longevity.",
                list: [
                  "Meets Euro IV/V standards",
                  "Improved lubricity",
                  "Protects system components",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-md border-t-4 hover:shadow-2xl transition transform hover:-translate-y-1"
                style={{ borderColor: mainColor }}
              >
                <div className="flex items-center mb-4 text-[#c84347]">
                  {item.icon}
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                </div>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
                  {item.list.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
              Our Promise
            </h2>

            <Title
              title="Guaranteed Fuel Quality"
              subtitle="Sitara Petroleum follows strict quality control to ensure purity,
              efficiency, and trust in every drop of fuel."
              align="left"
            />

            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <FlaskConical className="w-5 h-5 mr-3 mt-1 text-[#c84347]" />
                  ),
                  text: "Mobile Lab Testing — Regular quality audits at retail outlets using certified testing kits.",
                },
                {
                  icon: (
                    <ShieldCheck className="w-5 h-5 mr-3 mt-1 text-[#c84347]" />
                  ),
                  text: "Temperature Compensation — Advanced dispensers adjust volume for true energy equivalence.",
                },
                {
                  icon: (
                    <Droplet className="w-5 h-5 mr-3 mt-1 text-[#c84347]" />
                  ),
                  text: "Additive Enhancement — Detergents and corrosion inhibitors for cleaner engines.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  {item.icon}
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={images.hero5}
              alt="Fuel quality testing lab"
              className="rounded-2xl  w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Engine Care */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Title
            title="Long-Term Engine Health"
            subtitle="Our fuels deliver performance and protection — reducing maintenance
            costs and extending engine life."
          />

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Settings className="w-8 h-8 text-[#c84347] mx-auto mb-3" />
                ),
                title: "Cleaner Injectors",
                desc: "Advanced detergents eliminate carbon build-up for efficient spray.",
              },
              {
                icon: <Leaf className="w-8 h-8 text-[#c84347] mx-auto mb-3" />,
                title: "Lower Emissions",
                desc: "Cleaner combustion means fewer emissions and better air quality.",
              },
              {
                icon: (
                  <Shield className="w-8 h-8 text-[#c84347] mx-auto mb-3" />
                ),
                title: "Corrosion Protection",
                desc: "Inhibitors guard fuel systems from rust and moisture damage.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-lg border-b-4 border-gray-200 hover:border-[#c84347] hover:shadow-xl transition"
              >
                {item.icon}
                <h4 className="text-2xl font-bold mb-2 text-[#c84347]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuelProduct;
