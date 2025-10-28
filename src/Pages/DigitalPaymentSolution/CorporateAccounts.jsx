import React, { useState } from "react";

export default function CorporateAccounts() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
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
    setFormData({ name: "", company: "", email: "", phone: "" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            CORPORATE ACCOUNTS
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Sitara Corporate Accounts
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
            🚧 Coming Soon
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
            Empower Your Business Fleet
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage your company’s fuel usage with ease, control, and
            transparency. Sitara’s Corporate Accounts simplify operations for
            businesses with multiple vehicles or sites.
          </p>
        </div>
      </div>
    </div>
  );
}
