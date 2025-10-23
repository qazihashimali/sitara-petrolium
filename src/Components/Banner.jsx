import React from "react";

const stats = [
  { id: 1, value: "65+", label: "No of Petrol Pumps" },
  { id: 2, value: "400+", label: "No of Fuel Tankers" },
  { id: 3, value: "15+", label: "Years of experience" },
];

const Banner = () => {
  return (
    <section className="bg-[#f5f9fb] text-Black py-16 px-6 sm:px-10 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">At a Glimpse</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {stats.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <h3 className="text-5xl md:text-6xl font-bold">{item.value}</h3>
            <p className="mt-2 text-sm md:text-base font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
