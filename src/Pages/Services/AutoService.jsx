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
      title: "Comprehensive Maintenance & Repair",
      description: `
        From routine oil changes to advanced diagnostics, our trained technicians provide <b>end-to-end auto care</b> tailored to your vehicle’s needs. We utilise genuine parts, the latest tools, and adhere to manufacturer-recommended service protocols.
        <br /><br />
        <b>Services Include:</b><br />
        - Engine Oil & Filter Replacement<br />
        - Brake Service & Suspension Repairs<br />
        - Battery, Radiator & A/C Checkups<br />
        - Tire Rotation & Alignment<br />
        - Computerised Vehicle Diagnostics
      `,
    },
    {
      img: "/Servicing.png",
      title: "Trusted Quality. Every Visit.",
      description: `
        We stand by our service quality. Whether it’s your first visit or a regular maintenance stop, you can expect:<br /><br />
        - Certified technicians trained in multi-brand vehicle servicing<br />
        - Clear service timelines and job explanations<br />
        - Honest pricing with no hidden charges<br />
        - Manufacturer-grade oils and lubricants (including our engine oils)
      `,
    },
    {
      img: "/Tyre.png",
      title: "Fast, Transparent, and Customer-Centric",
      description: `
        We understand that time matters. Our Auto Service is designed to provide:<br /><br />
        - <b>Quick service turnaround</b> without compromising quality<br />
        - <b>Real-time service updates</b> via SMS or WhatsApp<br />
        - <b>Comfortable waiting areas</b> with refreshments<br />
        - Flexible service booking (walk-in or online)
      `,
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
      <div className="text-center mb-16">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          AUTO SERVICE
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Reliable Car Care, Trusted by Drivers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Experience professional maintenance, quick repairs, and genuine care.
          Our Auto Service keeps your vehicle running smoothly with expert
          technicians, transparent pricing, and trusted quality.
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
            className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all p-6 flex flex-col items-center text-center transform hover:-translate-y-1"
          >
            <div className="w-full h-56 overflow-hidden rounded-2xl mb-6">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p
              className="text-gray-600 text-base leading-relaxed text-left whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </motion.div>
        ))}
      </div>

      {/* INFO SECTION */}
      <div className="text-center mt-20 bg-white border border-gray-200 rounded-3xl shadow-sm py-14 px-10 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Why Choose Auto Service?
        </h3>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-base">
          • 100% Genuine Parts <br />
          • Backed by Our Petroleum’s Quality Standards <br />
          • Vehicle History & Digital Records <br />• Loyalty & Referral
          Programs for Regular Customers
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Visit Us Today
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Our service centres are conveniently located alongside Petroleum fuel
          stations in major cities. Drive in for trusted car care that keeps you
          going, mile after mile.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all hover:cursor-pointer shadow-md hover:shadow-lg"
        >
          Schedule Service
        </button>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl hover:cursor-pointer"
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
                className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer shadow-md"
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
