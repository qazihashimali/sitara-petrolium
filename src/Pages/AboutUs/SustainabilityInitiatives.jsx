import React from "react";
import {
  Leaf,
  Droplets,
  Sun,
  Recycle,
  Factory,
  HeartHandshake,
} from "lucide-react";
import Title from "../../Components/Title";

const SustainabilityInitiatives = () => {
  const initiatives = [
    {
      icon: <Leaf size={36} className="text-green-600" />,
      title: "Eco-Friendly Energy",
      desc: "We are investing in cleaner energy solutions to reduce the carbon footprint of our operations. This includes installing electric vehicle (EV) charging stations at key retail locations, using solar-assisted power at fuel stations, and implementing advanced emission control systems to enhance our environmental performance.",
    },
    {
      icon: <Droplets size={36} className="text-blue-500" />,
      title: "Water Conservation",
      desc: "Our fuel stations and logistics facilities use water-recycling systems for vehicle cleaning and maintenance. By optimising water use and reducing waste, we promote resource conservation throughout all operational touchpoints.",
    },
    {
      icon: <Sun size={36} className="text-yellow-500" />,
      title: "Renewable Integration",
      desc: "Sitara Petroleum is dedicated to incorporating renewable energy technologies into its infrastructure. Our long-term strategy includes developing solar-powered fuel stations, installing sustainable lighting systems, and adopting energy-efficient operations to lessen dependence on the grid.",
    },
    {
      icon: <Recycle size={36} className="text-green-500" />,
      title: "Waste Management",
      desc: "We adhere to strict protocols for managing oil residues, used lubricants, and packaging waste. Hazardous materials are processed safely, while recyclable waste is sorted and handled by certified recycling partners, helping us minimise our environmental impact.",
    },
    {
      icon: <Factory size={36} className="text-gray-700" />,
      title: "Sustainable Operations",
      desc: "We are enhancing our systems to improve energy efficiency and reduce emissions across the entire supply chain, from fuel storage to fleet logistics. Our upgraded tanker fleet, automated fueling systems, and digital monitoring tools ensure safer, cleaner, and more reliable energy delivery across Pakistan",
    },
    {
      icon: <HeartHandshake size={36} className="text-red-600" />,
      title: "Community Engagement",
      desc: "We actively engage local communities in sustainability programs that align with our operations. This includes tree-planting campaigns at our locations, green education initiatives in partnership with nearby schools, and awareness drives on clean fueling practices. Environmental stewardship is a shared journey, and we are committed to leading it responsibly",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/*Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/Sustainability-Banner.png')", // ⬅️ Replace with your actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Foreground content */}
        <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-red-500 text-xl sm:text-2xl font-semibold mb-3 tracking-wide uppercase">
            Sustainability Initiatives
          </h2>

          <Title
            title="Building a Greener Future Together"
            subtitle="At Sitara Petroleum, sustainability is not an afterthought; it is integral to how we fuel Pakistan every day. We are dedicated to providing reliable energy while minimizing our environmental impact. From developing EV infrastructure to ensuring ecological responsibility throughout our supply chain, we are committed to preparing for a cleaner tomorrow."
            align="center"
            textColor="text-white"
            subtitleColor="text-gray-200"
          />
        </div>
      </section>

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
            Sitara Petroleum is committed to the belief that energy leadership
            should align with environmental accountability. Our vision is to
            promote sustainable progress through: <br /> - The integration of
            green technologies <br /> - Efficient fuel logistics <br /> -
            Partnerships that prioritise community benefits <br /> By balancing
            performance with responsibility, we aim to shape the future of
            energy in Pakistan with a clear purpose.
            <br />
            <br />
            With every litre delivered and every initiative launched, we are
            fueling a more sustainable Pakistan—one step, one station, and one
            community at a time.
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
