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
import { images } from "../../assets/assets";
import Title from "../../Components/Title";

const FuelProduct = () => {
  const mainColor = "#c84347";

  return (
    <div className="min-h-screen bg-white font-inter text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] md:h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${images.FuelProduct})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-50"></div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Optimized Power. Guaranteed Purity.
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
            We provide a complete range of premium motor fuels designed to
            maximise performance, efficiency, and long-term reliability for
            personal vehicles, fleets, and heavy-duty industrial applications.
            Each drop of our fuel is tested, refined, and distributed with a
            commitment to purity and quality.
          </p>
        </div>
      </section>

      {/* Our Core Fuel Offerings */}
      <section className="py-20 px-6 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Title
              title="Our Core Fuel Offerings"
              subtitle="<b>Reliable, High-Performance Fuels for Every Vehicle and Industry.</b>"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="w-8 h-8 mr-3" />,
                title: "PMG 92",
                desc: "<b>Clean-burning gasoline</b> is optimised for modern engines, delivering excellent fuel economy and reduced emissions.",
                list: [
                  "92 RON premium-grade petrol",
                  "Improved combustion and mileage",
                  "Anti-knock agents and detergent additives for cleaner operation",
                  "Ideal for: Sedans, hatchbacks, and daily-use vehicles",
                ],
              },
              {
                icon: <Gauge className="w-8 h-8 mr-3" />,
                title: "HOBC 97",
                desc: "<b>High-octane petrol</b> is designed for luxury and performance vehicles that demand precision and power.",
                list: [
                  "97 RON with built-in detergents",
                  "Prevents knocking and pre-ignition",
                  "Perfect for turbocharged and high-compression engines",
                  "Ideal for: High-end, turbocharged, and imported cars",
                ],
              },
              {
                icon: <Fuel className="w-8 h-8 mr-3" />,
                title: "HSD",
                desc: "A <b>premium diesel</b> fuel designed for heavy-duty use, offering sustained engine performance, clean emissions, and enhanced protection for the fuel system.",
                list: [
                  "Meets Euro IV/V diesel emission standards",
                  "High lubricity reduces engine wear",
                  "Stabilised formulation protects sensitive components",
                  "Ideal for: Trucks, buses, generators, and fleet vehicles",
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
              subtitle="Petroleum is committed to delivering <b>uncompromised purity and performance</b> with every litre of fuel we provide."
              align="left"
            />

            <h3 className="text-lg font-semibold mb-4">
              Quality Assurance Measures
            </h3>

            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <FlaskConical className="w-5 h-5 mr-3 mt-1 text-[#c84347]" />
                  ),
                  text: "<b>Mobile Lab Testing:</b> Regular site-level fuel testing is conducted using certified equipment and approved test kits.",
                },
                {
                  icon: (
                    <ShieldCheck className="w-5 h-5 mr-3 mt-1 text-[#c84347]" />
                  ),
                  text: "<b>Temperature Compensation Technology:</b> Advanced dispensers automatically adjust fuel volume to reflect the actual energy content at varying temperatures.",
                },
                {
                  icon: (
                    <Droplet className="w-5 h-5 mr-3 mt-1 text-[#c84347]" />
                  ),
                  text: "<b>Additive Enhancement:</b> Each type of fuel is treated with detergents, stabilisers, and corrosion inhibitors for optimised combustion and system longevity.",
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
              src={images.hero1}
              alt="Fuel quality testing lab"
              className="rounded-2xl  w-full max-w-lg object-cover h-[45vh]"
            />
          </div>
        </div>
      </section>

      {/* Engine Care */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Title
            title="Long-Term Engine Health"
            subtitle="Our fuels not only power your engine but also actively <b>protect it over time</b>, reducing wear and enhancing performance."
          />

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Settings className="w-8 h-8 text-[#3bb273] mx-auto mb-3" />
                ),
                title: "Cleaner Injectors",
                desc: "Precision detergents <b>eliminate carbon deposits</b>, keeping injectors clean and improving combustion and throttle response.",
              },
              {
                icon: <Leaf className="w-8 h-8 text-[#3bb273] mx-auto mb-3" />,
                title: "Lower Emissions",
                desc: "Enhanced fuel formulations ensure <b>more complete combustion</b>, resulting in <b>fewer particulates, reduced CO₂ emissions</b>, and cleaner air with every drive.",
              },
              {
                icon: (
                  <Shield className="w-8 h-8 text-[#3bb273] mx-auto mb-3" />
                ),
                title: "Corrosion Protection",
                desc: "Advanced fuel additives create a protective barrier within fuel lines, injectors, and tanks, helping prevent moisture buildup, rust, and fuel system degradation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-lg border-b-4 border-gray-200 hover:border-[#3bb273] hover:shadow-xl transition"
              >
                {item.icon}
                <h4 className="text-2xl font-bold mb-2 text-[#3bb273]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <Title
            title="Fuel with Confidence"
            subtitle="Whether you are refuelling your family car, powering a fleet, or running industrial operations, Our fuels are engineered for <b>performance, protection, and peace of mind</b>—trusted throughout Pakistan."
            className="mt-16"
          />
        </div>
      </section>
    </div>
  );
};

export default FuelProduct;
