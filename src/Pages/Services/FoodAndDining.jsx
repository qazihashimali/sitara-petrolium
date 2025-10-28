import React from "react";
import { UtensilsCrossed, Coffee, Sandwich } from "lucide-react";

const FoodAndDining = () => {
  const items = [
    {
      icon: <UtensilsCrossed className="h-12 w-12 text-red-600" />,
      title: "Fresh Meals & Snacks",
      description:
        "Savor freshly prepared meals and snacks, from traditional Pakistani favorites to quick continental dishes — made with care and quality.",
    },
    {
      icon: <Coffee className="h-12 w-12 text-red-600" />,
      title: "Tea, Coffee & Beverages",
      description:
        "Relax and refresh with our selection of chai, coffee, juices, and cold drinks, served in a calm and welcoming environment.",
    },
    {
      icon: <Sandwich className="h-12 w-12 text-red-600" />,
      title: "Quick Bites on the Go",
      description:
        "For travelers in a hurry, we offer a range of quick snacks like sandwiches, rolls, and wraps — fresh and ready anytime.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-10">
      <div className="text-center mb-14">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          FOOD & DINING
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Delicious Food, Relaxing Ambience
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Experience the perfect stop for food and relaxation. Sitara Petroleum’s
          dining areas offer everything — from full meals and snacks to warm
          tea breaks — all served with freshness and comfort.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center"
          >
            <div className="mb-5">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 bg-white border border-gray-200 rounded-2xl shadow-sm py-10 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Visit Our Dining Area
        </h3>
        <p className="text-gray-600 mb-6">
          Whether you're refueling your car or taking a break, Sitara’s food &
          dining space ensures you enjoy every moment of your journey.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all">
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default FoodAndDining;
