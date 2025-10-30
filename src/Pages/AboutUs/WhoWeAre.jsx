import React from "react";
import { Target, Eye, Scale, ShieldCheck, Award, Mountain } from "lucide-react";
import Title from "../../Components/Title";
import { images } from "../../assets/assets";

const WhoWeAre = () => {
  const infoCards = [
    {
      title: "Our Vision",
      desc: "To be a leading integrated petroleum, retail, logistics & storage company known for reliability, efficiency, safety and service excellence.",
      icon: <Eye size={40} className="text-blue-600" />,
    },
    {
      title: "Our Mission",
      desc: "Serving the industry through a robust retail network providing high quality petroleum products and services including logistics and storage solutions.",
      icon: <Target size={40} className="text-red-600" />,
    },
    {
      title: "Our Values",
      desc: "Integrity, Courage, Service Excellence, and Safety define our culture and guide every decision we make as we build a sustainable and responsible future.",
      icon: <Scale size={40} className="text-green-600" />,
    },
  ];

  const values = [
    {
      icon: <Scale size={36} className="text-green-600" />,
      title: "Integrity",
    },
    {
      icon: <Mountain size={36} className="text-blue-700" />,
      title: "Courage",
    },
    {
      icon: <Award size={36} className="text-red-600" />,
      title: "Service Excellence",
    },
    {
      icon: <ShieldCheck size={36} className="text-purple-600" />,
      title: "Safety",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated */}
      <section
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${images.whoweare})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-50"></div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
            Empowering Pakistan’s energy future through reliability, efficiency,
            safety and service excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div>
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            About Us
          </h2>
          <Title
            title="Building Trust Through Energy"
            subtitle="Sitara Petroleum is a trusted energy company in Pakistan, dedicated to powering industries and communities with reliable, high-quality fuel solutions."
            align="left"
          />
          <p className="text-gray-700  sm:text-lg text-justify mt-4">
            For over two decades, we have built a reputation for operational
            excellence, sustainable practices, and customer commitment —
            ensuring safe and efficient energy delivery nationwide.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={images.heero4}
            alt="Sitara Petroleum Operations"
            className="w-full h-[300px] md:h-[300px] lg:h-[360px] object-cover"
          />
        </div>
      </div>

      {/* Strategic Framework Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="md:w-1/2 mb-8">
            <h3 className="text-red-600 text-xl sm:text-2xl font-semibold mb-4 tracking-wide">
              Our Strategic Framework
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Guided by a strong vision, mission, and core values, Sitara
              Petroleum continues to strengthen its position as a trusted name
              in the petroleum and logistics industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {infoCards.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition"
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-3">{value.icon}</div>
                <p className="font-medium text-gray-800">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
