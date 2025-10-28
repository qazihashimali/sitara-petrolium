import React, { useState } from 'react';
import { Phone, MessageCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function CustomerHelpline() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: 'general', message: '' });
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState(null);

  const validate = () => form.name.trim() && form.phone.trim();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return alert('Please enter your name and phone.');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const ticketId = `SIT-${Date.now().toString().slice(-6)}`;
    setTicket(ticketId);
    setForm({ name: '', phone: '', email: '', type: 'general', message: '' });
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 py-14">
      {/* Header Section */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          CUSTOMER SUPPORT
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Customer Helpline
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We’re here to help 24/7 — from emergencies to general enquiries.
          Reach out to Sitara Petroleum’s support team for quick, reliable assistance.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Need help right now?</h2>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center hover:shadow-md transition">
                <AlertCircle className="w-8 h-8 mx-auto text-red-600 mb-3" />
                <div className="text-xs text-gray-500 uppercase tracking-wide">Emergency / Safety (24/7)</div>
                <a href="tel:+923000000000" className="block mt-2 text-lg font-bold text-red-600">
                  +92 300 000 0000
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Immediate response for spills, accidents, or safety incidents.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition">
                <Phone className="w-8 h-8 mx-auto text-gray-700 mb-3" />
                <div className="text-xs text-gray-500 uppercase tracking-wide">General Helpline</div>
                <a href="tel:+920000000001" className="block mt-2 text-lg font-bold text-gray-800">
                  +92 21 0000 0001
                </a>
                <p className="text-xs text-gray-500 mt-1">Mon–Sat, 08:00–20:00</p>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Report an Incident</h3>
              <p className="text-sm text-gray-600 mb-4">
                Use the form below to log a non-emergency issue such as a service complaint, billing query, or station feedback.
                For urgent safety matters, please call the emergency number above.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {ticket && (
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
                    Ticket created: <strong>{ticket}</strong>. Our team will contact you shortly.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-[#f1b73e] outline-none w-full"
                  />
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Phone number"
                    className="rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-[#f1b73e] outline-none w-full"
                  />
                </div>

                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email (optional)"
                  className="rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-[#f1b73e] outline-none w-full"
                />

                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-[#f1b73e] outline-none w-full"
                >
                  <option value="general">General enquiry</option>
                  <option value="billing">Billing / Invoice</option>
                  <option value="service">Service complaint</option>
                  <option value="station">Station feedback</option>
                </select>

                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Describe your issue (include location or details)"
                  className="rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-[#f1b73e] outline-none w-full resize-none"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-gray-500">
                    We aim to acknowledge all tickets within 24 hours.
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 rounded-full text-white font-semibold bg-[#e53935] hover:bg-[#c62828] transition"
                  >
                    {loading ? 'Submitting…' : 'Submit Ticket'}
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Support */}
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition">
                <MessageCircle className="w-6 h-6 text-green-600 mb-2" />
                <div className="font-medium">WhatsApp Support</div>
                <p className="text-sm text-gray-600 mt-2">
                  Message us for quick updates:{' '}
                  <a href="https://wa.me/923000000000" className="underline text-green-700">
                    WhatsApp Chat
                  </a>
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition">
                <HelpCircle className="w-6 h-6 text-blue-600 mb-2" />
                <div className="font-medium">Live Chat</div>
                <p className="text-sm text-gray-600 mt-2">
                  Click the chat icon for live support (09:00–18:00).{' '}
                  <span className="italic">(Coming soon)</span>
                </p>
              </div>
            </div>

            {/* Process Section */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2">Complaint Resolution Process</h3>
              <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                <li>Ticket created & acknowledgement sent</li>
                <li>Assigned to relevant team</li>
                <li>Investigation & resolution updates</li>
                <li>Closure & customer feedback</li>
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-fit">
            <h3 className="text-lg font-bold mb-4">Support Resources</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#" className="hover:text-red-600 underline">Find nearest station</a></li>
              <li><a href="#" className="hover:text-red-600 underline">Report safety non-compliance</a></li>
              <li><a href="#" className="hover:text-red-600 underline">Download incident report (PDF)</a></li>
              <li><a href="#" className="hover:text-red-600 underline">Claims & insurance guide</a></li>
            </ul>

            <div className="mt-6 border-t pt-4 text-sm">
              <div className="font-medium mb-1">Escalation</div>
              <div className="text-gray-600 text-xs">
                If unsatisfied with the response, email:{' '}
                <span className="font-medium">escalation@sitara.com</span>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 text-sm">
              <div className="font-medium mb-1">Operational Hours</div>
              <div className="text-gray-600 text-xs">
                Helpline: Mon–Sat 08:00–20:00<br />
                Emergency line: 24/7
              </div>
            </div>
          </aside>
        </section>

        {/* CTA Section */}
        <section className="mt-14 bg-red-600 p-6 rounded-2xl text-white shadow-sm text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="text-xl font-semibold">Need Urgent Assistance?</h4>
            <p className="mt-1 text-sm opacity-90">
              Call our 24/7 emergency line for immediate response.
            </p>
          </div>
          <a
            href="tel:+923000000000"
            className="inline-block px-6 py-2.5 rounded-full bg-white text-red-600 font-semibold hover:bg-gray-100 transition"
          >
            Call Emergency Line
          </a>
        </section>

        <footer className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sitara Petroleum & Logistics — Customer Helpline
        </footer>
      </div>
    </div>
  );
}
