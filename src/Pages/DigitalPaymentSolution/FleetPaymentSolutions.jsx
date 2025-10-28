import React, { useState } from "react";

export default function FleetPaymentSolutions() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    fleetSize: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function validateForm() {
    if (!formData.name || !formData.company || !formData.email)
      return "Please fill in all required fields.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      return "Enter a valid email address.";
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) return setError(validationError);
    setError("");
    setSubmitted(true);
    setFormData({ name: "", company: "", email: "", fleetSize: "" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            FLEET PAYMENT SOLUTIONS
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Sitara Fleet Payment Solutions
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
            🚧 Coming Soon
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
            Smarter Fuel Management for Your Fleet
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simplify your business fuel operations with Sitara’s secure,
            digital, and trackable Fleet Payment Solutions — designed for
            companies managing multiple vehicles or drivers.
          </p>
        </div>
      </div>
    </div>
  );
}
