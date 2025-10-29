import React from "react";
import {
  Shield,
  Leaf,
  HeartPulse,
  Zap,
  AlertTriangle,
  Handshake,
} from "lucide-react";
import Title from "../../Components/Title";

const HealthSafety = () => {
  const principles = [
    {
      title: "Safety First",
      desc: "We believe every incident is preventable. Continuous training and strict safety standards protect our employees, contractors, and communities.",
      icon: <Shield size={40} className="text-red-600" />,
    },
    {
      title: "Environmental Care",
      desc: "We actively minimize emissions, conserve energy, and manage waste responsibly at all fuel stations, terminals, and logistics operations.",
      icon: <Leaf size={40} className="text-green-600" />,
    },
    {
      title: "Employee Well-being",
      desc: "Our people are our strength. We ensure health awareness programs, regular checkups, and emergency preparedness for every team member.",
      icon: <HeartPulse size={40} className="text-red-500" />,
    },
    {
      title: "Sustainable Operations",
      desc: "We adopt eco-friendly technologies, energy-efficient equipment, and EV charging solutions for a greener, more sustainable future.",
      icon: <Zap size={40} className="text-yellow-500" />,
    },
    {
      title: "Emergency Preparedness",
      desc: "Every facility follows strict emergency management systems with fire safety drills, spill prevention, and 24/7 response readiness.",
      icon: <AlertTriangle size={40} className="text-orange-500" />,
    },
    {
      title: "Community Responsibility",
      desc: "We engage with communities to create awareness, promote safety education, and ensure our operations contribute positively to society.",
      icon: <Handshake size={40} className="text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/Health-safety-banner.png')", // ⬅️ Replace with your actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Foreground Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-red-500 text-xl sm:text-2xl font-semibold mb-3 tracking-wide uppercase">
            Health, Safety & Environment
          </h2>

          <Title
            title="Commitment to Safety & Sustainability"
            subtitle="We believe every incident is preventable. Continuous training and strict safety standards protect our employees, contractors, and communities."
            align="center"
            textColor="text-white"
            subtitleColor="text-gray-200"
          />
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-6 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="bg-[#f5f9fb] text-black rounded-xl py-8 px-6 text-center max-w-3xl mx-auto shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Our Promise for a Safer Tomorrow
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-5 text-black">
            From transportation to retail operations, Sitara Petroleum upholds
            the highest standards of safety and environmental compliance. We
            continue to invest in innovation and training to build a safer,
            cleaner, and more sustainable energy future.
          </p>
          <a
            href="mailto:hse@sitarapetroleum.com"
            className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-red-300 hover:text-white transition"
          >
            Contact HSE Department
          </a>
        </div>
      </section>
    </div>
  );
};

export default HealthSafety;
