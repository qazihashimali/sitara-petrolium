import React, { useState } from 'react';

export default function DealerOpportunities() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', region: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // simple client-side validation
    if (!form.name || !form.email || !form.phone) return alert('Please fill name, phone and email');
    // TODO: wire to API
    setSubmitted(true);
    setForm({ name: '', company: '', phone: '', email: '', region: '', details: '' });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
  <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
    DEALER NETWORK
  </h2>
  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dealer Opportunities</h1>
  <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
    Join Sitara’s growing retail network — a partnership built on brand strength, operational support, 
    and profitable territory models.
  </p>
</div>


        <section className="grid lg:grid-cols-3 gap-6">
          <aside className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Why become a Sitara dealer?</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">Sitara offers end-to-end support for dealers — from site selection and logistics to retail operations, marketing and loyalty programmes. Benefit from a trusted fuel supply chain, competitive margins and access to value-added services such as convenience stores, car care and loyalty-driven delivery services.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Feature title="Reliable Supply" desc="OGRA-compliant deliveries and priority allocation for dealers." />
              <Feature title="Marketing Support" desc="Branding, POS, promotions and local campaigns to drive footfall." />
              <Feature title="Operations Training" desc="Site operations, safety, and retail management training for staff." />
              <Feature title="Digital Tools" desc="Fleet & inventory management, digital payments and loyalty integrations." />
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] p-5 rounded-xl text-white">
              <h3 className="font-semibold">Deal structure highlights</h3>
              <ul className="mt-3 text-sm">
                <li>• Flexible franchise and dealer models</li>
                <li>• Competitive margin schemes and performance incentives</li>
                <li>• Support for site build-out and convenience store setup</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Territory & eligibility</h3>
              <p className="mt-2 text-gray-700 text-sm">We prioritise entrepreneurs and established businesses with suitable land or existing service-station experience. Preference given to applicants with strong local market knowledge and commitment to safety & compliance.</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Onboarding process</h3>
              <ol className="mt-3 list-decimal pl-5 text-sm text-gray-700">
                <li>Submit application & documents</li>
                <li>Initial screening & site evaluation</li>
                <li>Commercial terms & agreement</li>
                <li>Site build-out / handover and training</li>
              </ol>
            </div>
          </aside>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Apply to become a dealer</h3>
            {submitted ? (
              <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">Thank you — your application has been submitted. Our dealer relations team will reach out.</div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <label className="block">
                  <span className="text-sm font-medium">Full name</span>
                  <input className="mt-1 block w-full rounded-lg border border-gray-200 p-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Company / Entity</span>
                  <input className="mt-1 block w-full rounded-lg border border-gray-200 p-2" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Phone</span>
                  <input className="mt-1 block w-full rounded-lg border border-gray-200 p-2" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Email</span>
                  <input type="email" className="mt-1 block w-full rounded-lg border border-gray-200 p-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Preferred region / city</span>
                  <input className="mt-1 block w-full rounded-lg border border-gray-200 p-2" value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Tell us about the site / experience</span>
                  <textarea rows={4} className="mt-1 block w-full rounded-lg border border-gray-200 p-2" value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} />
                </label>

                <div className="flex items-center justify-between">
                  <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] text-white">Submit Application</button>
                  <a href="#" className="text-sm text-gray-500 underline">Download dealer brochure (PDF)</a>
                </div>
              </form>
            )}

            <div className="mt-6 text-sm text-gray-600">
              <div className="font-medium">Need help?</div>
              <div className="mt-1">Email dealer.relations@sitara.com or call +92 21 0000 0000</div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Support & incentives</h3>
            <p className="mt-3 text-gray-700 text-sm">We offer structured onboarding support, marketing co-funding for launches, and performance-based incentives including volume rebates and promotional bonuses to accelerate growth.</p>

            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="font-semibold">Onboarding</div>
                <div className="text-xs text-gray-600 mt-1">Training & compliance</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="font-semibold">Marketing</div>
                <div className="text-xs text-gray-600 mt-1">Launch co-funding</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="font-semibold">Commercial</div>
                <div className="text-xs text-gray-600 mt-1">Volume rebates</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">FAQs</h3>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <details className="p-3 bg-gray-50 rounded-lg">
                <summary className="font-medium">What are the capital requirements?</summary>
                <div className="mt-2 text-gray-600">Capital varies by model — dealers with land may have different requirements than franchise builds. We discuss specifics during screening.</div>
              </details>
              <details className="p-3 bg-gray-50 rounded-lg">
                <summary className="font-medium">How long does onboarding take?</summary>
                <div className="mt-2 text-gray-600">Typical onboarding & site readiness ranges from 8–20 weeks depending on construction and approvals.</div>
              </details>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] p-6 rounded-2xl text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Ready to grow with Sitara?</h4>
              <p className="mt-1 text-sm opacity-90">Apply now and our dealer relations team will evaluate your opportunity.</p>
            </div>
            <div>
              <a href="#apply" className="inline-block px-5 py-2 bg-white rounded-lg text-gray-900 font-medium">Start Application</a>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-xs text-gray-500">© Sitara Petroleum & Logistics — Dealer Opportunities</footer>
      </div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-4 rounded-lg border bg-gray-50">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
    </div>
  );
}
