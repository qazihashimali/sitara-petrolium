import React, { useState } from "react";
import Alert from "../../Components/Alert";

export default function SitaraCarWash() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    city: "",
    branch: "",
  });

  // ALERT STATE (same pattern as FuelCard)
  const [alert, setAlert] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  // City and branch mapping
  const cityBranches = {
    Karachi: ["Sitara Clifton Wash", "DHA Express Wash", "Korangi Auto Spa"],
    Lahore: [
      "Gulberg Car Wash",
      "Model Town Service Center",
      "Johar Town Wash Bay",
    ],
    Islamabad: [
      "F-10 Wash Point",
      "Blue Area Sitara Wash",
      "I-9 Service Center",
    ],
    Multan: ["Cantt Car Wash", "Shah Rukn-e-Alam Wash", "Sadar Auto Spa"],
  };

  const services = [
    {
      img: "/EV-charger.jpg",
      title: "Exterior Wash",
      description:
        "Gentle, pressure-controlled washing with premium detergents to protect your car’s paint and shine.",
    },
    {
      img: "/carwash-interior.jpg",
      title: "Interior Cleaning",
      description:
        "Deep vacuuming, dashboard detailing, and odor removal for a fresh, comfortable drive.",
    },
    {
      img: "/carwash-total.jpg",
      title: "Total Wash Package",
      description:
        "Complete inside-out cleaning, tire polish, underbody wash, and glass shine — all in one package.",
    },
  ];

  // SUBMIT HANDLER (uses Alert instead of browser alert)
  const handleSubmit = (e) => {
    e.preventDefault();

    setShowForm(false);
    setAlert({
      show: true,
      type: "success",
      title: "Booking Confirmed!",
      message: `Your car wash appointment has been scheduled.\n\n📅 Date: ${formData.date}\n⏰ Time: ${formData.time}\n🏙️ City: ${formData.city}\n🏢 Branch: ${formData.branch}`,
    });

    // Reset form data
    setFormData({ date: "", time: "", city: "", branch: "" });
  };

  return (
    <div className="bg-gray-50 text-gray-800 relative">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          SITARA CAR WASH & DETAILING
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

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 pb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-all p-3 flex flex-col items-center text-center transform hover:-translate-y-1"
          >
            <div className="mb-6">
              <img
                src={service.img}
                alt={service.title}
                className="h-64 w-full object-cover rounded-2xl shadow-md mx-auto mb-6"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
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

      {/* CTA SECTION */}
      <section className="text-center py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-md py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Book Your Wash Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Keep your car spotless — visit Sitara Car Wash or schedule your wash
            online. Enjoy a clean car and peace of mind with Sitara quality.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all hover:cursor-pointer"
          >
            Schedule Wash
          </button>
        </div>
      </section>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl hover:cursor-pointer"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Schedule Your Car Wash
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Select Time
                </label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Select City
                </label>
                <select
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                      branch: "",
                    })
                  }
                  required
                >
                  <option value="">Choose a city</option>
                  {Object.keys(cityBranches).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {formData.city && (
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Select Branch
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    value={formData.branch}
                    onChange={(e) =>
                      setFormData({ ...formData, branch: e.target.value })
                    }
                    required
                  >
                    <option value="">Choose a branch</option>
                    {cityBranches[formData.city].map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-all hover:cursor-pointer"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ALERT (same as fuel card) */}
      <Alert
        type={alert.type}
        title={alert.title}
        message={alert.message}
        show={alert.show}
        onClose={() => setAlert({ ...alert, show: false })}
      />

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sitara Petroleum & Logistics — Car Wash
        Division. All rights reserved.
      </footer>
    </div>
  );
}
