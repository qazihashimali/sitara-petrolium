import React from "react";
import Title from "../../Components/Title";
import { images } from "../../assets/assets";

// Sample Management Data
const managementTeam = [
  {
    name: "Mr. Ahmed Raza",
    position: "Chief Operating Officer (COO)",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description:
      "Ahmed leads the daily operations of Sitara Petroleum, ensuring efficiency and quality across all retail and logistics channels.",
  },
  {
    name: "Ms. Fatima Khan",
    position: "Chief Financial Officer (CFO)",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description:
      "Fatima oversees financial strategy and performance, focusing on sustainable growth and resource optimization.",
  },
  {
    name: "Mr. Bilal Sheikh",
    position: "Head of Retail & Network Development",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description:
      "Bilal manages expansion of Sitara Petroleum’s nationwide fuel station network and ensures premium customer experiences.",
  },
  {
    name: "Ms. Sana Iqbal",
    position: "Head of Corporate Communications",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description:
      "Sana drives internal and external communication strategies, strengthening Sitara Petroleum’s brand and reputation.",
  },
  {
    name: "Mr. Usman Tariq",
    position: "Head of Logistics & Supply Chain",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description:
      "Usman manages petroleum logistics, ensuring smooth fuel distribution and supply chain optimization across Pakistan.",
  },
  {
    name: "Ms. Nida Hussain",
    position: "Head of Sustainability & Compliance",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    description:
      "Nida ensures all operations align with environmental, safety, and regulatory standards — advancing Sitara’s sustainability goals.",
  },
];

const OurManagement = () => {
  return (
    <div className="min-h-screen bg-white ">
      <section
        className="relative h-[50vh] md:h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${images.whoweare})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-50"></div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Management
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
            Empowering Pakistan’s energy future through reliability, efficiency,
            safety and service excellence.
          </p>
        </div>
      </section>
      {/* Page Header */}
      <div className="px-2 py-4 sm:px-4 sm:py-6 md:px-12 md:py-10">
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            OUR MANAGEMENT
          </h2>
          <Title
            title="Meet Our Management Team"
            subtitle="The leaders driving Sitara Petroleum’s vision  combining decades of experience in energy, logistics, and sustainability to shape a brighter, cleaner future."
          />
        </div>

        {/* Management Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-red-600 text-sm font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurManagement;
