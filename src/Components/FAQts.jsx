import React from "react";

const FAQts = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-20 lg:px-32 py-20 bg-white">
      {/* Left side text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          SITARA <span className="text-gray-500">FACTS</span>
        </h2>
        <p className="text-gray-700 mt-5 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          Explore detailed insights into our operations, sustainability
          practices, and community initiatives everything you need to know is
          right here.
        </p>
      </div>

      {/* Right side card */}
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <div className="bg-green-600 text-white rounded-3xl p-10 shadow-2xl w-full max-w-md min-h-[280px] flex items-center justify-center text-center md:text-left">
          <p className="text-lg md:text-xl leading-relaxed">
            Management of <strong>400+</strong> tank lorries to safely transport
            fuel products nationwide, ensuring reliability and safety every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQts;
