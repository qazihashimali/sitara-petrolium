import React from "react";
import { motion } from "framer-motion";
import { Building2, Truck, MapPin, ShieldCheck, Network } from "lucide-react";
import Title from "../../Components/Title";
import { images } from "../../assets/assets";

const OurOperations = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${images.OurOperations})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-50"></div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Operations
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
            Empowering Pakistan’s energy future through reliability, efficiency,
            safety and service excellence.
          </p>
        </div>
      </section>

      {/* Fuel Station Management */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="/Fuel-Station-Management.png"
              alt="Fuel Station"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <Title
              title="Fuel Station Management"
              subtitle="Sitara Petroleum proudly manages a growing network of modern and customer-centric retail fuel stations that deliver more than just fuel — they offer a complete convenience experience."
              align="left"
              textColor="#266d1b"
            />
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>
                <strong>Active Outlets:</strong> Currently operating 52 retail
                stations across Pakistan, with several new sites under
                development.
              </li>
              <li>
                <strong>Customer Experience:</strong> Stations include
                convenience stores, food outlets, car wash, and essential travel
                services.
              </li>
              <li>
                <strong>Strategic Expansion:</strong> Located along highways and
                in key urban centers for maximum accessibility.
              </li>
              <li>
                <strong>Regional Presence:</strong> Active in three provinces,
                reflecting strong national growth.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fuel Transportation & Logistics */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Title
              title="Fuel Transportation & Logistics"
              subtitle="Sitara Petroleum operates one of Pakistan’s most reliable and wide-reaching fuel transportation networks. With decades of operational experience, we ensure safe, compliant, and efficient movement of petroleum products nationwide."
              align="left"
              textColor="#266d1b"
            />
          </div>
          <div className="md:w-1/2">
            <img
              src="/Fuel-Transportation-Logistics.png"
              alt="Fuel Logistics"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <Title
            title="Our Capabilities"
            subtitle="Delivering reliability, safety, and efficiency through nationwide operations and strong logistics."
            textColor="#266d1b"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <CapabilityCard
              icon={<MapPin className="w-8 h-8 text-green-600" />}
              title="Nationwide Coverage"
              text="A vast logistics network enabling fuel supply to every region across Pakistan."
            />
            <CapabilityCard
              icon={<Truck className="w-8 h-8 text-green-600" />}
              title="Fleet Strength"
              text="Over 400 company-owned fuel tankers, maintained and monitored under strict safety protocols."
            />
            <CapabilityCard
              icon={<ShieldCheck className="w-8 h-8 text-green-600" />}
              title="Safety & Compliance"
              text="Operations follow national and international safety standards with advanced tracking systems."
            />
            <CapabilityCard
              icon={<Network className="w-8 h-8 text-green-600" />}
              title="Reliable Supply Chain"
              text="Trusted logistics partner for the GO Retail network, ensuring uninterrupted deliveries."
            />
            <CapabilityCard
              icon={<Building2 className="w-8 h-8 text-green-600" />}
              title="Operational Excellence"
              text="Optimized for time efficiency, route safety, and cost control — ensuring excellence in every delivery."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const CapabilityCard = ({ icon, title, text }) => (
  <motion.div
    className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

export default OurOperations;
