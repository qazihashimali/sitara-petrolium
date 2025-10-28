import React from "react";
import Title from "../../Components/Title";

// Sample Data
const directors = [
  {
    name: "Mr. Imran Sheikh",
    position: "Chairman & CEO",
    image:
      "https://avatars.mds.yandex.net/i?id=d420ff4e2ee25574ab9b865016886eb8d423cee4-5859964-images-thumbs&n=13",
    description:
      "Mr. Imran brings over 20 years of experience in the petroleum and logistics industry, leading Sitara Petroleum’s strategic vision and growth.",
  },
  {
    name: "Ms. Sara Ahmed",
    position: "Director of Operations",
    image: "https://via.placeholder.com/300x300",
    description:
      "Sara oversees core operations, ensuring efficiency and excellence across refinery, distribution, and retail networks.",
  },
  {
    name: "Mr. Ali Khan",
    position: "Director of Finance",
    image: "https://via.placeholder.com/300x300",
    description:
      "Ali manages corporate finances, investments, and sustainability projects that support long-term company growth.",
  },
  {
    name: "Ms. Hina Malik",
    position: "Director of Sustainability",
    image: "https://via.placeholder.com/300x300",
    description:
      "Hina leads environmental and social responsibility initiatives, focusing on green energy and community development.",
  },
];

const BoardOfDirector = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
          OUR LEADERSHIP
        </h2>
        <Title
          title="Board of Directors"
          subtitle="Meet the leaders driving Sitara Petroleum’s vision — combining decades
          of experience in energy, logistics, and sustainability to shape a
          brighter, cleaner future."
        />
      </div>

      {/* Directors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {director.name}
              </h3>
              <p className="text-red-600 text-sm font-medium mb-3">
                {director.position}
              </p>
              <p className="text-gray-600 text-sm">{director.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirector;
