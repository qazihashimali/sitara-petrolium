import React from "react";

export default function IndustrialSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section (Replaces Header) */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            INDUSTRIAL SOLUTIONS
          </h2>
          <Title
            title="Sitara Petroleum & Logistics"
            subtitle="Integrated petroleum, retail & logistics services — driving national growth with safety, reliability, and innovation."
          />
        </div>

        {/* Intro Card */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">About Sitara Petroleum & Logistics</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Sitara Petroleum & Logistics (SPLL) operates a nationwide fuel transportation and retail
                network. Founded in 2010, the business manages a fleet of 400+ tankers and operates dozens of
                fuel stations, offering end-to-end supply chain services. SPLL is entering a growth phase focused
                on fleet expansion, storage terminals, and retail rollout ahead of an upcoming IPO.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-gray-100 bg-gradient-to-br from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a]">
              <div className="text-white">
                <p className="text-sm">Key targets</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Expand fleet to 450 by 2026</li>
                  <li>40,000 MT storage terminal near Faisalabad</li>
                  <li>Grow retail outlets to 100 (500 by 2030)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Our Industrial Solutions</h3>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fuel Transportation",
                desc: "Organized fleet with OGRA-compliant safety standards and national coverage.",
              },
              {
                title: "Retail Management",
                desc: "Strategic fuel stations enhanced with convenience stores, car care and loyalty services.",
              },
              {
                title: "Storage & Terminals",
                desc: "Modern 40,000 MT terminal to improve inventory control and margin resilience.",
              },
              {
                title: "Cold Chain & Agri Storage",
                desc: "Planned refrigerated logistics and silos to address national food-storage gaps.",
              },
            ].map((s) => (
              <div key={s.title} className="p-5 bg-white rounded-xl shadow-sm border">
                <h4 className="font-medium">{s.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Stat number="400+" label="Owned Tankers" />
            <Stat number="65" label="Fuel Stations Managed" />
            <Stat number="40,000 MT" label="Planned Storage" />
            <Stat number="15+ yrs" label="Profitable Track Record" />
          </div>
        </section>

        {/* Roadmap / Timeline */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Roadmap</h3>
          <ol className="mt-4 space-y-4">
            <li className="flex gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] mt-2" />
              <div>
                <div className="font-medium">2025 - IPO & Initial Expansion</div>
                <div className="text-sm text-gray-600">
                  Raise capital, add 50 tankers, upgrade retail footprint to 100 stations.
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] mt-2" />
              <div>
                <div className="font-medium">2026-2028 - Storage & Cold Chain</div>
                <div className="text-sm text-gray-600">
                  Commission Faisalabad terminal, pilot reefers and cold storage sites.
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] mt-2" />
              <div>
                <div className="font-medium">2030 - Scale & Diversify</div>
                <div className="text-sm text-gray-600">
                  Target 500 retail outlets, expand EV charging and lube services.
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="mt-10 bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] p-6 rounded-2xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Interested in partnering?</h4>
              <p className="mt-1 text-sm opacity-90">
                Contact our corporate development team for investment & commercial enquiries.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-block px-6 py-2 bg-white rounded-lg font-medium text-gray-900 shadow"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
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
