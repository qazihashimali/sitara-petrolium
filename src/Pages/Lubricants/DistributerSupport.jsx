import React from "react";
import Title from "../../Components/Title";

const DistributerSupport = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-6 text-center"
        style={{
          backgroundImage: "url('/assets/distributor-support-hero.jpg')", // 🖼️ replace with your actual image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <Title
            title="Distributor Support"
            subtitle="Empowering our partners with resources, training, and fuel solutions."
            textColor="text-white"
          />
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 px-6 md:px-16 bg-gray-50 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          🚧 Coming Soon
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl">
          We’re building a dedicated platform to support our distributors —
          providing tools, guidance, and seamless access to our services. Stay
          tuned for more details and updates!
        </p>
      </section>
    </div>
  );
};

export default DistributerSupport;
