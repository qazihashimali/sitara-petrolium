import React from "react";

const FoodAndDining = () => {
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Fresh Meals & Snacks",
      description: (
        <p>
          <strong>Enjoy freshly prepared meals</strong> and{" "}
          <strong>on-the-go snacks</strong> made with quality ingredients and
          care. Our menu features a variety of options—from local Pakistani
          favourites to light continental bites—catering to every taste.
          <br />
          <br />✔ <strong>Biryani, karahi, BBQ, paratha rolls</strong>
          <br />✔ <strong>Fresh sandwiches, fries, and burgers</strong>
          <br />✔ <strong>Rotating menu based on region and season</strong>
        </p>
      ),
    },
    {
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Tea, Coffee & Beverages",
      description: (
        <p>
          Recharge with your favourite <strong>hot or cold drinks</strong>.
          Enjoy <strong>freshly brewed chai, coffee, juices</strong>, and{" "}
          <strong>soft drinks</strong> in a calm, clean, and welcoming
          environment.
          <br />
          <br />✔ <strong>Doodh Patti, Green Tea, Cappuccino</strong>
          <br />✔ <strong>Fresh juices and bottled beverages</strong>
          <br />✔ <strong>Outdoor seating available at select locations</strong>
        </p>
      ),
    },
    {
      image:
        "https://images.unsplash.com/photo-1559058777-9451f6e0d4de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Quick Bites on the Go",
      description: (
        <p>
          In a hurry? Grab <strong>a fresh roll, wrap, or energy snack</strong>{" "}
          from our quick-serve counters—perfect for highway travellers and those
          on the move.
          <br />
          <br />✔ <strong>Sandwiches, wraps, patties, and samosas</strong>
          <br />✔ <strong>Freshly packed for take-away</strong>
          <br />✔ <strong>Always available—day or night</strong>
        </p>
      ),
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
          Experience the perfect stop for food and relaxation. Our
          Petroleum’s dining areas offer everything from full meals and snacks
          to warm tea breaks—all served with{" "}
          <strong>freshness, hygiene, and comfort</strong>.
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
            <div className="p-6 flex flex-col flex-grow text-center text-gray-700 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16 bg-white border border-gray-200 rounded-2xl shadow-sm py-10 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Comfort Meets Flavour
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Our dining zones are designed{" "}
          <strong>for relaxed stops and family breaks</strong>, featuring{" "}
          <strong>
            clean seating, fast service, and freshly made food you can trust
          </strong>
          .
        </p>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>• Fresh and hygienic food preparation</li>
          <li>• Indoor and outdoor dining options</li>
          <li>• 24/7 availability at select stations</li>
          <li>• Friendly staff and quick service counters</li>
        </ul>
        <h4 className="text-xl font-semibold text-gray-800 mt-6">
          Visit Our Dining Area
        </h4>
        <p className="text-gray-600 mt-2">
          Whether you're <strong>refuelling your vehicle</strong> or{" "}
          <strong>taking a break on a long journey</strong>, Our Food &
          Dining space ensures you enjoy{" "}
          <strong>great food, clean surroundings, and a peaceful moment</strong>{" "}
          before hitting the road again.
        </p>
      </div>
    </section>
  );
};

export default FoodAndDining;
