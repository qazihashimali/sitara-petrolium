import React from "react";

const FoodAndDining = () => {
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Fresh Meals & Snacks",
      description:
        "Savor freshly prepared meals and snacks, from traditional Pakistani favorites to quick continental dishes — made with care and quality.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Tea, Coffee & Beverages",
      description:
        "Relax and refresh with our selection of chai, coffee, juices, and cold drinks, served in a calm and welcoming environment.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559058777-9451f6e0d4de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Quick Bites on the Go",
      description:
        "For travelers in a hurry, we offer a range of quick snacks like sandwiches, rolls, and wraps — fresh and ready anytime.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-10">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          FOOD & DINING
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Delicious Food, Relaxing Ambience
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Experience the perfect stop for food and relaxation. Sitara
          Petroleum’s dining areas offer everything — from full meals and snacks
          to warm tea breaks — all served with freshness and comfort.
        </p>
      </div>

      {/* Cards with Images */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-16 bg-white border border-gray-200 rounded-2xl shadow-sm py-10 px-6 max-w-4xl mx-auto">
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
      </div> */}
    </section>
  );
};

export default FoodAndDining;
