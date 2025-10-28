import React from "react";

export default function SitaraConvenienceStore() {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      title: "Snacks & Beverages",
      description:
        "Refresh yourself with a wide selection of chips, juices, coffee, and more — anytime on the go.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3082/3082009.png",
      title: "Daily Essentials",
      description:
        "Find basic groceries, toiletries, and home products for your daily convenience.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2882/2882567.png",
      title: "Travel Accessories",
      description:
        "Everything you need for your trip — phone chargers, umbrellas, energy bars, and more.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          SITARA CONVENIENCE STORE
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Your Everyday Essentials — Anytime, Anywhere
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          From snacks and drinks to travel must-haves, Sitara Convenience Store
          brings comfort and choice to your journey. Stop by for quick, quality
          essentials 24/7.
        </p>
      </section>

      {/* FEATURES GRID (Unified Card Design) */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1601050690597-34aeb1e6a4cd?auto=format&fit=crop&w=900&q=80"
            alt="Convenience Store"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Comfort Meets Convenience
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sitara Convenience Stores are designed for travelers and local
              customers alike — providing quick access to quality products,
              refreshments, and essentials with a clean, friendly atmosphere.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ 24/7 availability at select Sitara stations</li>
              <li>✅ Fresh snacks and chilled beverages</li>
              <li>✅ Friendly staff & clean environment</li>
              <li>✅ Fast checkout and digital payment options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION (Matching All Other Components) */}
      <section className="text-center py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Visit Sitara Convenience Store Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you’re fueling up or taking a break, Sitara makes it easy to
            grab what you need — quick, clean, and convenient.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all">
            Locate Nearest Store
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sitara Petroleum & Logistics — Convenience
        Division. All rights reserved.
      </footer>
    </div>
  );
}
