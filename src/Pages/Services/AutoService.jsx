import React, { useState } from "react";
import Alert from "../../Components/Alert";
import { motion } from "framer-motion";

export default function SitaraAutoService() {
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    city: "",
    branch: "",
  });

  const services = [
    {
      img: "/Oil-Filter.jpg",
      title: "Oil & Filter Change",
      description:
        "Keep your engine performing at its best with our premium-grade engine oil and expert filter replacement. Our technicians ensure a fast, clean, and precise service so that you can get back on the road with confidence.",
    },
    {
      img: "/tire-service.jpg",
      title: "Tire Replacement & Balancing",
      description:
        "Drive smoother and safer with our tyre services, including premium tyre replacements, wheel balancing, and alignment. We make sure your tyres wear evenly and your ride remains vibration-free.\n✔ Branded tyre options\n✔ Computerised balancing\n✔ Alignment & rotation support",
    },
    {
      img: "/brake-inspection.jpg",
      title: "Brake & Safety Inspection",
      description:
        "Your safety is our priority. We conduct thorough brake system diagnostics, checking pad wear, rotor condition, fluid levels, and making any necessary replacements. This ensures you have complete control and peace of mind.\n✔ Brake pad & disc service\n✔ Safety diagnostics\n✔ Road-readiness assurance",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "city" ? { branch: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setShowForm(false);
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-10 relative">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          SITARA AUTO SERVICE
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Reliable Car Care, Trusted by Drivers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          At Sitara Auto Service, we provide professional maintenance, quick
          repairs, and genuine care to keep your vehicle running smoothly. Our
          expert technicians, transparent pricing, and commitment to quality are
          all backed by Sitara Petroleum’s high standards.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-all p-4 flex flex-col items-center text-center transform hover:-translate-y-1"
          >
            <div className="w-full h-56 overflow-hidden rounded-2xl mb-6">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* INFO SECTION */}
      <div className="text-center mt-20 bg-white border border-gray-200 rounded-3xl shadow-md py-14 px-10 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Expert Technicians, Quality Service
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-base">
          Sitara Auto Service centres are equipped with:
        </p>
        <ul className="text-gray-700 text-base space-y-2 max-w-md mx-auto text-left mb-10">
          <li>• State-of-the-art diagnostic tools</li>
          <li>• Genuine parts for every repair</li>
          <li>• Certified professionals trained across vehicle brands</li>
        </ul>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-base">
          We combine speed, transparency, and technical precision to deliver
          reliable car care every single time.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Sitara Auto Service?
        </h3>
        <ul className="text-gray-700 text-base space-y-2 max-w-md mx-auto text-left mb-10">
          <li>• Genuine parts and transparent pricing</li>
          <li>• Express service for minimal downtime</li>
          <li>• Comfortable customer waiting areas</li>
          <li>
            • 24/7 roadside assistance available at select Sitara Petroleum
            stations
          </li>
        </ul>

        <button
          onClick={() => setShowForm(true)}
          className="bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all hover:cursor-pointer"
        >
          Schedule Service
        </button>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-lg w-full max-w-lg p-8 relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl hover:cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Schedule Your Service
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Select Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Select City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  <option value="">-- Choose City --</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Multan">Multan</option>
                </select>
              </div>

              {formData.city && (
                <div className="transition-all duration-300">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Branch
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="">-- Choose Branch --</option>
                    <option value="Sitara Town">Sitara Town</option>
                    <option value="Model Town">Model Town</option>
                    <option value="Industrial Area">Industrial Area</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={!formData.city || !formData.date || !formData.time}
                className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* ALERT */}
      <Alert
        type="success"
        title="Booking Confirmed!"
        message={`Your service has been scheduled on ${formData.date} at ${formData.time} in ${formData.city} (${formData.branch}).`}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </section>
  );
}
