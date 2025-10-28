import React from "react";

export default function SitaraRestrooms() {
  const features = [
    {
      // icon: "https://cdn-icons-png.flaticon.com/512/941/941414.png",
      title: "Hygienic Facilities",
      description:
        "Our restrooms are sanitized multiple times a day, ensuring a clean and pleasant experience every visit.",
    },
    {
      // icon: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png",
      title: "Comfort for Everyone",
      description:
        "Separate facilities for men, women, and differently-abled guests, ensuring accessibility and privacy for all.",
    },
    {
      // icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      title: "Modern Amenities",
      description:
        "Equipped with automated hand dryers, touchless taps, mirrors, and ambient lighting for a modern experience.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          CLEAN & FRESH RESTROOMS
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Comfort. Cleanliness. Care.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sitara Restrooms are designed to provide travelers and families with a
          spotless, refreshing, and safe experience — maintained around the
          clock for your comfort.
        </p>
      </section>

      {/* FEATURES GRID - MATCHING FOOD & DINING STYLE */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-5"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1590490359683-658d1f58f5b0?auto=format&fit=crop&w=900&q=80"
            alt="Restroom interior"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Clean Spaces for a Better Journey
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sitara ensures every stop feels refreshing. Our restrooms are
              maintained with industry-grade cleaning products and real-time
              cleanliness monitoring to guarantee your peace of mind.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ Regular cleaning every hour</li>
              <li>✅ Dedicated housekeeping staff</li>
              <li>✅ Fragrance & ventilation systems</li>
              <li>✅ Touch-free fixtures for hygiene</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience Clean & Fresh Comfort
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Visit Sitara stations nationwide and enjoy modern, hygienic, and
            family-friendly restroom facilities — because your comfort matters.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all">
            Find Nearest Station
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sitara Petroleum & Logistics — Clean &
        Fresh Restrooms. All rights reserved.
      </footer>
    </div>
  );
}
