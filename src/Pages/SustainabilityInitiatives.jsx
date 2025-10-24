import React from "react";
import {
  Leaf,
  Droplets,
  Sun,
  Recycle,
  Factory,
  HeartHandshake,
} from "lucide-react";
import Title from "../Components/Title";

const SustainabilityInitiatives = () => {
  const initiatives = [
    {
      icon: <Leaf size={36} className="text-green-600" />,
      title: "Eco-Friendly Energy",
      desc: "We are investing in cleaner energy solutions such as EV charging stations, solar-assisted operations, and emission control systems at our fuel stations.",
    },
    {
      icon: <Droplets size={36} className="text-blue-500" />,
      title: "Water Conservation",
      desc: "Through water recycling at service stations and efficient logistics cleaning systems, Sitara Petroleum reduces unnecessary water waste across operations.",
    },
    {
      icon: <Sun size={36} className="text-yellow-500" />,
      title: "Renewable Integration",
      desc: "Our future growth strategy includes renewable energy integration — solar-powered fuel sites and sustainable lighting infrastructure.",
    },
    {
      icon: <Recycle size={36} className="text-green-500" />,
      title: "Waste Management",
      desc: "We ensure all oil residues, lubricants, and packaging materials are responsibly handled and recycled to minimize environmental impact.",
    },
    {
      icon: <Factory size={36} className="text-gray-700" />,
      title: "Sustainable Operations",
      desc: "Modernized logistics and fuel storage systems are designed to optimize efficiency, reduce emissions, and support long-term energy resilience.",
    },
    {
      icon: <HeartHandshake size={36} className="text-red-600" />,
      title: "Community Engagement",
      desc: "Sitara Petroleum collaborates with local communities for green education, tree plantation drives, and sustainability awareness campaigns.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="relative w-full py-8 px-6 md:px-12 text-center">
        <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-1 tracking-wide">
          SUSTAINABILITY INITIATIVES
        </h2>
        <div className="mb-3">
          <Title
            title="Building a Greener Future Together"
            subtitle="At Sitara Petroleum, sustainability is embedded into our business operations — from eco-friendly fuel infrastructure to responsible community initiatives that protect our environment for generations ahead."
            align="center"
          />
        </div>
      </div>

      {/* Initiatives Grid */}
      <section className="py-6 px-6 md:px-12 lg:px-20 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-[#f5f9fb] text-black rounded-xl py-8 px-6 text-center max-w-5xl mx-auto shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Our Sustainability Vision
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">
            Sitara Petroleum aims to drive progress through innovation,
            integrity, and environmental responsibility. By integrating green
            technologies, improving logistics efficiency, and nurturing local
            partnerships, we are ensuring a sustainable energy transition for
            Pakistan’s future.
          </p>
          <a
            href="mailto:sustainability@sitarapetroleum.com"
            className="bg-white text-gray-900 px-5 py-2 rounded-full font-medium text-sm shadow hover:bg-red-300 hover:text-white transition duration-300"
          >
            Contact Sustainability Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityInitiatives;
