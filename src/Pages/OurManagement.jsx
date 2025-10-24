import React from "react";
import Title from "../Components/Title";

// Sample Management Data
const managementTeam = [
  {
    name: "Mr. Ahmed Raza",
    position: "Chief Operating Officer (COO)",
    image:
      "https://avatars.mds.yandex.net/i?id=4c196d276085afd8c4a2738fe339c5b4-4903160-images-thumbs&ref=rim&n=33&w=375&h=250",
    description:
      "Ahmed leads the daily operations of Sitara Petroleum, ensuring efficiency and quality across all retail and logistics channels.",
  },
  {
    name: "Ms. Fatima Khan",
    position: "Chief Financial Officer (CFO)",
    image: "https://via.placeholder.com/300x300",
    description:
      "Fatima oversees financial strategy and performance, focusing on sustainable growth and resource optimization.",
  },
  {
    name: "Mr. Bilal Sheikh",
    position: "Head of Retail & Network Development",
    image: "https://via.placeholder.com/300x300",
    description:
      "Bilal manages expansion of Sitara Petroleum’s nationwide fuel station network and ensures premium customer experiences.",
  },
  {
    name: "Ms. Sana Iqbal",
    position: "Head of Corporate Communications",
    image: "https://via.placeholder.com/300x300",
    description:
      "Sana drives internal and external communication strategies, strengthening Sitara Petroleum’s brand and reputation.",
  },
  {
    name: "Mr. Usman Tariq",
    position: "Head of Logistics & Supply Chain",
    image: "https://via.placeholder.com/300x300",
    description:
      "Usman manages petroleum logistics, ensuring smooth fuel distribution and supply chain optimization across Pakistan.",
  },
  {
    name: "Ms. Nida Hussain",
    position: "Head of Sustainability & Compliance",
    image: "https://via.placeholder.com/300x300",
    description:
      "Nida ensures all operations align with environmental, safety, and regulatory standards — advancing Sitara’s sustainability goals.",
  },
];

const OurManagement = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      {/* Page Header */}
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
  );
};

export default OurManagement;
