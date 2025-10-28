import React, { useState } from "react";
import Alert from "../../Components/Alert";

export default function DigitalFuelCards() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1607083205259-0a96f9d1d99d?auto=format&fit=crop&w=900&q=80",
      title: "Sitara Fleet Card",
      description:
        "Ideal for corporate clients managing multiple vehicles — track fuel consumption, set spending limits, and get monthly reports.",
    },
    {
      img: "https://images.unsplash.com/photo-1581092919507-945f3b4b8dee?auto=format&fit=crop&w=900&q=80",
      title: "Sitara Prepaid Card",
      description:
        "Perfect for individuals and families who want budget control — top-up anytime and enjoy convenient, cashless refueling.",
    },
    {
      img: "https://images.unsplash.com/photo-1620912189861-1f07b8c1eb38?auto=format&fit=crop&w=900&q=80",
      title: "Sitara Loyalty Card",
      description:
        "Earn reward points on every liter of fuel and redeem exciting discounts on partner outlets and future refuels.",
    },
  ];

  const benefits = [
    "24/7 online card management portal",
    "Real-time fuel transaction tracking",
    "Enhanced security with PIN & OTP verification",
    "Custom spending limits for each vehicle or driver",
    "Monthly statements and detailed analytics",
    "Accepted at all Sitara Petroleum stations nationwide",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsFormOpen(false);
    setAlert({
      show: true,
      type: "success",
      title: "Application Submitted!",
      message:
        "Your Sitara Digital Fuel Card request has been received. Our team will contact you shortly.",
    });
  };

  return (
    <div className="bg-gray-50 text-gray-800 relative">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          SMART FUEL SOLUTIONS
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Digital Fuel Cards for Every Need
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Whether you manage a fleet or refuel daily, Sitara’s Digital Fuel
          Cards make your fueling experience smarter, faster, and fully
          traceable — with rewards built in.
        </p>
      </section>

      {/* CARD TYPES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1581092919507-945f3b4b8dee?auto=format&fit=crop&w=900&q=80"
            alt="Digital fuel card"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Benefits That Drive Efficiency
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Simplify your fuel expenses with Sitara’s smart card system.
              Designed for transparency, convenience, and control, our digital
              cards let you focus on what really matters — your journey.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              {benefits.map((b, i) => (
                <li key={i}>✅ {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get Your Sitara Digital Fuel Card Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience total control and convenience — whether for personal use
            or your fleet. Apply for your Sitara Fuel Card in just a few clicks.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all hover:cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* APPLY FORM MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl hover:cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Apply for Sitara Digital Fuel Card
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="03XX-XXXXXXX"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Card Type
                </label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
                >
                  <option value="">-- Choose Card Type --</option>
                  <option value="Fleet">Sitara Fleet Card</option>
                  <option value="Prepaid">Sitara Prepaid Card</option>
                  <option value="Loyalty">Sitara Loyalty Card</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Any specific requirements or details..."
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-all hover:cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ALERT */}
      <Alert
        type={alert.type}
        title={alert.title}
        message={alert.message}
        show={alert.show}
        onClose={() => setAlert({ ...alert, show: false })}
      />

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sitara Petroleum & Logistics — Digital Fuel
        Cards. All rights reserved.
      </footer>
    </div>
  );
}
