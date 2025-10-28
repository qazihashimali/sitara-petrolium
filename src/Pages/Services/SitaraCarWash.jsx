import React from "react";

export default function SitaraCarWash() {
  const services = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048932.png",
      title: "Exterior Wash",
      description:
        "Gentle, pressure-controlled washing with premium detergents to protect your car’s paint and shine.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1903/1903264.png",
      title: "Interior Cleaning",
      description:
        "Deep vacuuming, dashboard detailing, and odor removal for a fresh, comfortable drive.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4727/4727459.png",
      title: "Total Wash Package",
      description:
        "Complete inside-out cleaning, tire polish, underbody wash, and glass shine — all in one package.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          SITARA CAR WASH & Detailing
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Sparkling Clean. Every Time.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sitara Car Wash & Detailing offers quick, eco-friendly, and
          high-quality cleaning services — keeping your car spotless and shining
          like new, every single day.
        </p>
      </section>

      {/* SERVICES GRID - MATCHING CARD DESIGN */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mb-5"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1607863680057-6e0a5d3eb56f?auto=format&fit=crop&w=900&q=80"
            alt="Car Wash"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Advanced Cleaning Technology, Expert Hands
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Sitara Car Wash & Detailing, we combine professional expertise
              with modern equipment and eco-safe cleaning agents to give your
              vehicle the care it deserves.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ Touch-free automatic and manual wash options</li>
              <li>✅ Eco-friendly water recycling systems</li>
              <li>✅ Premium wax & polish services</li>
              <li>✅ Comfortable waiting lounge for customers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROMO SECTION (Styled Like CTA in Food & Dining) */}
      <section className="text-center py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Book Your Wash Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Keep your car spotless — visit Sitara Car Wash or schedule your wash
            online. Enjoy a clean car and peace of mind with Sitara quality.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all">
            Schedule Wash
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sitara Petroleum & Logistics — Car Wash
        Division. All rights reserved.
      </footer>
    </div>
  );
}
