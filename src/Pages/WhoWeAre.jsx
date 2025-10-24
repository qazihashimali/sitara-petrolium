import React from "react";
import { Target, Eye, HeartHandshake } from "lucide-react";
import Title from "../Components/Title";
import { images } from "../assets/assets";

const WhoWeAre = () => {
  const infoCards = [
    {
      title: "Our Mission",
      desc: "To deliver superior petroleum and logistics solutions that fuel industries and communities while maintaining the highest standards of safety, efficiency, and sustainability.",
      icon: <Target size={40} className="text-red-600" />,
    },
    {
      title: "Our Vision",
      desc: "To lead Pakistan’s energy transition by embracing cleaner technologies, advancing infrastructure, and promoting responsible energy management for a sustainable tomorrow.",
      icon: <Eye size={40} className="text-blue-600" />,
    },
    {
      title: "Our Values",
      desc: "Integrity, safety, innovation, and sustainability guide every action we take — ensuring we deliver excellence and create lasting value for our customers and communities.",
      icon: <HeartHandshake size={40} className="text-green-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Left Side Text */}
        <div>
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            About Us
          </h2>
          <Title
            title="Who We Are"
            subtitle="Empowering Pakistan’s energy future through integrity, innovation, and excellence."
            align="left"
          />
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            Sitara Petroleum is a trusted energy company in Pakistan, dedicated
            to powering industries and communities with reliable, high-quality
            fuel solutions. For over two decades, we have built a reputation for
            operational excellence, sustainable practices, and customer
            commitment — ensuring safe and efficient energy delivery nationwide.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={images.hero3}
            alt="Sitara Petroleum Operations"
            className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
          />
        </div>
      </div>

      {/* Our Company Section */}
      <section className="py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="md:w-1/2 mb-8">
            <h3 className="text-red-600 text-xl sm:text-2xl font-semibold mb-4 tracking-wide">
              Our Company
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              Sitara Petroleum operates with a clear vision — to be a key player
              in Pakistan’s evolving energy landscape. Through continuous
              innovation, logistics expansion, and sustainable development, we
              aim to contribute to the nation’s economic growth while upholding
              global environmental and safety standards.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoCards.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
