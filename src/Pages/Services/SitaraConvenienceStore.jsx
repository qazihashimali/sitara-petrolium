import React from "react";

export default function SitaraConvenienceStore() {
  const features = [
    {
      img: "/Snacks-Beverages.png",
      title: "Snacks & Beverages",
      description: `Fuel your journey with a wide variety of refreshments and snacks, perfect for any time of day. Grab a coffee, chilled juice, a soft drink, or your favourite pack of chips — freshly stocked and ready when you are.
✔ Chilled drinks & bottled water
✔ Hot coffee & tea corner
✔ Chips, biscuits, chocolates, and more`,
    },
    {
      img: "/Daily-Essentials.png",
      title: "Daily Essentials",
      description: `Need something for home or hygiene? We’ve got you covered. Our stores offer groceries, toiletries, and basic home care items, so you never have to make an extra stop.
✔ Toothpaste, soap, tissue, detergents
✔ Bread, milk, eggs, and pantry staples
✔ Baby care & feminine hygiene products`,
    },
    {
      img: "/Travel-Accessories.png",
      title: "Travel Accessories",
      description: `Hit the road prepared. From phone chargers to energy bars, we stock travel-friendly products that keep you going with ease.
✔ Power banks, chargers, mobile accessories
✔ First-aid basics, umbrellas, face masks
✔ Sunglasses, pain relief, energy drinks & bars`,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          Our CONVENIENCE STORE
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Your Everyday Essentials, Anytime, Anywhere
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          From snacks and drinks to travel essentials, our{" "}
          <b>Convenience Store</b>
          provides <b>comfort and choice</b> for your journey. Stop by for
          quick, quality essentials, open 24/7.
        </p>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 pb-20">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-all p-3 flex flex-col items-center text-center transform hover:-translate-y-1"
          >
            <div className="mb-6">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover rounded-2xl shadow-md mx-auto mb-6"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
              {item.description}
            </p>
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
              Our Convenience Stores are designed to serve both <b>on-the-go</b>
              travellers and <b>local walk-in customers</b>. We offer a clean,
              accessible environment, friendly staff, and fast service.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                • <b>24/7 availability</b> at select stations
              </li>
              <li>
                • <b>Fresh snacks and chilled beverages</b>
              </li>
              <li>
                • <b>Polite, helpful staff</b> & <b>clean interior</b>
              </li>
              <li>
                • <b>Fast checkout</b> with digital payment options
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-md py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Visit Our Convenience Store Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you’re fueling up, taking a break, or picking up a quick
            item on the way home, our Convenience Store makes it easy to grab
            what you need. <b>Quick. Clean. Convenient.</b>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Our Petroleum & Logistics — Convenience
        Division. All rights reserved.
      </footer>
    </div>
  );
}
