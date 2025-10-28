import React, { useState } from "react";

export default function FeedbackQueries() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "feedback",
    message: "",
    rating: 5,
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Valid email is required.";
    if (!form.message.trim()) e.message = "Please enter your message or query.";
    if (!form.consent) e.consent = "Please consent to be contacted.";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800)); // Simulated API delay
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        type: "feedback",
        message: "",
        rating: 5,
        consent: false,
      });
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Top Section (Replaces Header) */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            FEEDBACK & QUERIES
          </h2>
          <Title
            title="We Value Your Feedback"
            subtitle="Your opinions and questions help us improve. Share feedback, ask a question, or request a partnership — our team will get back to you promptly."
          />
        </div>

        <main className="grid lg:grid-cols-2 gap-8">
          {/* Left Info Section */}
          <section className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>• For investor relations: investor@sitara.com</li>
              <li>• For commercial enquiries: commercial@sitara.com</li>
              <li>• To report a safety issue: safety@sitara.com (24/7)</li>
              <li>• Corporate HQ: 3 Hoy Avenue, Glasgow (example)</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-medium">Office Hours</h3>
              <p className="text-sm text-gray-600">
                Mon–Fri: 09:00 – 18:00 | Sat: 10:00 – 14:00
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-medium">How We Respond</h3>
              <p className="text-sm text-gray-600">
                We aim to acknowledge all queries within 48 hours and resolve
                feedback within 7 business days depending on complexity.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-medium">Data Privacy</h3>
              <p className="text-sm text-gray-600">
                By submitting you agree we may contact you about your enquiry.
                We retain contact details only to process your request.
              </p>
            </div>
          </section>

          {/* Form Section */}
          <form
            className="bg-white rounded-2xl p-6 shadow-sm"
            onSubmit={handleSubmit}
            noValidate
          >
            {submitted && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 mb-4">
                Thank you — your message has been received. We'll be in touch
                shortly.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input
                  type="text"
                  className={`mt-1 block w-full rounded-lg border p-2 ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && (
                  <div className="text-xs text-red-500 mt-1">{errors.name}</div>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  className={`mt-1 block w-full rounded-lg border p-2 ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && (
                  <div className="text-xs text-red-500 mt-1">{errors.email}</div>
                )}
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Company (optional)</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-gray-200 p-2"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Type</span>
                <select
                  className="mt-1 block w-full rounded-lg border border-gray-200 p-2"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  <option value="feedback">Feedback</option>
                  <option value="query">Query</option>
                  <option value="commercial">Commercial / Partnership</option>
                  <option value="safety">Safety Issue</option>
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  rows={5}
                  className={`mt-1 block w-full rounded-lg border p-2 ${
                    errors.message ? "border-red-400" : "border-gray-200"
                  }`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && (
                  <div className="text-xs text-red-500 mt-1">
                    {errors.message}
                  </div>
                )}
              </label>

              <label className="block flex flex-col">
                <span className="text-sm font-medium">Rating (optional)</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={form.rating}
                  onChange={(e) =>
                    setForm({ ...form, rating: Number(e.target.value) })
                  }
                  className="mt-2"
                />
                <div className="text-xs text-gray-600 mt-1">
                  {form.rating} / 5
                </div>
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Attach file (optional)</span>
                <input type="file" className="mt-1 block w-full" />
                <div className="text-xs text-gray-400 mt-1">
                  Accepted: pdf, png, jpg | Max 5MB
                </div>
              </label>

              <label className="flex items-start gap-3 md:col-span-2">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) =>
                    setForm({ ...form, consent: e.target.checked })
                  }
                  className="mt-1"
                />
                <div className="text-sm text-gray-700">
                  I consent to being contacted about this enquiry. See our{" "}
                  <a href="#" className="underline">
                    privacy policy
                  </a>.
                  {errors.consent && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.consent}
                    </div>
                  )}
                </div>
              </label>

              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  By submitting you agree to our terms.
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] text-white shadow"
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Submit"}
                  </button>
                </div>
              </div>

              {errors.submit && (
                <div className="md:col-span-2 text-xs text-red-500">
                  {errors.submit}
                </div>
              )}
            </div>
          </form>
        </main>

        <footer className="mt-8 text-center text-xs text-gray-500">
          Thank you for helping us improve — Sitara Petroleum & Logistics
        </footer>
      </div>
    </div>
  );
}

function Title({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-3xl md:text-4xl font-extrabold">{title}</h3>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
