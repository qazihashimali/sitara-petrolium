import React from "react";

export default function InvestorRelations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-lg sm:text-xl font-semibold mb-2 tracking-wide">
            INVESTOR RELATIONS
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Investor Information & Financial Insights
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Transparent updates, financials, and governance details for our
            valued shareholders and prospective investors.
          </p>
        </div>

        {/* Main Content */}
        <section className="grid md:grid-cols-3 gap-6">
          {/* Left / Main Info */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-semibold mb-3">Company Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Sitara Petroleum & Logistics Limited (SPLL) is an integrated
              petroleum, retail, and logistics provider operating a fleet of
              400+ tankers and a rapidly expanding network of retail stations.
              Established in 2010, SPLL provides end-to-end fuel distribution and
              is advancing into storage, cold chain logistics, and EV solutions.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Stat number="400+" label="Owned Tankers" />
              <Stat number="65" label="Stations Managed" />
              <Stat number="40,000 MT" label="Planned Storage" />
              <Stat number="15+ yrs" label="Track Record" />
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2">IPO Summary</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Offering: Equity raise via IPO (Q4 2025)</li>
                <li>
                  Use of proceeds: Fleet expansion, terminals, retail rollout,
                  working capital
                </li>
                <li>Target raise: PKR ~12.1 Billion</li>
                <li>Expected completion: Q2 2027 (projects delivery)</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2">
                Financial Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <FinancialCard label="Revenue (Latest FY)" value="PKR 117 Bn" />
                <FinancialCard label="Return on Equity" value="39.7%" />
                <FinancialCard label="5yr Revenue CAGR" value="44%" />
                <FinancialCard label="Credit Rating" value="A- (Stable)" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <a href="#financials" className="hover:text-[#7b3b8a] underline">
                  Financial Statements
                </a>
              </li>
              <li>
                <a href="#ipo-docs" className="hover:text-[#7b3b8a] underline">
                  IPO Prospectus
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-[#7b3b8a] underline">
                  Corporate Governance
                </a>
              </li>
              <li>
                <a href="#reports" className="hover:text-[#7b3b8a] underline">
                  Annual Reports
                </a>
              </li>
            </ul>

            <div className="mt-6 border-t pt-4 text-sm">
              <div className="font-medium text-gray-800">Investor Contact</div>
              <div className="mt-1 text-gray-700">ir@sitara.com</div>
              <div className="text-gray-500 text-xs mt-1">
                Phone: +92 21 0000 0000
              </div>
            </div>
          </aside>
        </section>

        {/* Financials */}
        <section
          id="financials"
          className="mt-10 bg-white rounded-2xl p-8 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2">Financials & Reports</h3>
          <p className="text-gray-600 text-sm mb-5">
            Download audited financials, management discussions, and
            projections.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Latest Annual Report (PDF)", tag: "2024" },
              { title: "Management Accounts (Q2 2025)", tag: "Q2" },
              { title: "IPO Information Memorandum", tag: "IPO" },
              { title: "Investor Presentation", tag: "Deck" },
            ].map((d) => (
              <div
                key={d.title}
                className="p-4 rounded-lg border bg-gray-50 hover:shadow transition"
              >
                <div className="font-medium text-gray-800">{d.title}</div>
                <div className="text-xs text-gray-500 mt-1">{d.tag}</div>
                <a
                  href="#"
                  className="text-sm underline text-[#7b3b8a] mt-2 inline-block"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Governance */}
        <section
          id="governance"
          className="mt-10 bg-white rounded-2xl p-8 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2">Governance</h3>
          <p className="text-gray-700 leading-relaxed">
            SPLL upholds governance best practices with an independent board,
            audit committee, and structured risk management frameworks.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <GovernanceCard
              title="Board of Directors"
              desc="Profiles of the board and independent directors."
              link="View profiles"
            />
            <GovernanceCard
              title="Policies & Charters"
              desc="Audit policy, related party, whistleblower, and more."
              link="View documents"
            />
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-10 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Shareholder Timeline</h3>
          <ol className="mt-4 space-y-4">
            {[
              {
                date: "Q4 2025 — IPO Launch",
                desc: "Prospectus published and subscription opens.",
              },
              {
                date: "Q2 2026 — Project Kickoffs",
                desc: "Fleet additions and terminal construction begins.",
              },
              {
                date: "2027 — Terminal Commissioning",
                desc: "Faisalabad terminal goes live; retail rollout accelerates.",
              },
            ].map((i) => (
              <li key={i.date} className="flex gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] mt-2" />
                <div>
                  <div className="font-medium">{i.date}</div>
                  <div className="text-sm text-gray-600">{i.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQs */}
        <section className="mt-10 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-semibold mb-3">FAQs</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <details className="p-3 bg-gray-50 rounded-lg">
              <summary className="font-medium cursor-pointer">
                How will IPO proceeds be used?
              </summary>
              <p className="mt-2 text-gray-600">
                Proceeds will fund fleet expansion, storage development, retail
                growth, and working capital.
              </p>
            </details>
            <details className="p-3 bg-gray-50 rounded-lg">
              <summary className="font-medium cursor-pointer">
                Where can I download the prospectus?
              </summary>
              <p className="mt-2 text-gray-600">
                The IPO prospectus will be available under "IPO Prospectus" once
                published.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] p-6 rounded-2xl text-white shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Investor Enquiries</h4>
              <p className="mt-1 text-sm opacity-90">
                Email our Investor Relations team for detailed information and
                meetings.
              </p>
            </div>
            <a
              href="mailto:ir@sitara.com"
              className="inline-block px-6 py-2 bg-white rounded-lg text-gray-900 font-medium shadow"
            >
              Contact IR
            </a>
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-gray-500">
          © Sitara Petroleum & Logistics — Investor Relations
        </footer>
      </div>
    </div>
  );
}

/* Subcomponents */
function Stat({ number, label }) {
  return (
    <div className="p-4 rounded-lg bg-gray-50 text-center border">
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function FinancialCard({ label, value }) {
  return (
    <div className="p-4 rounded-lg bg-gray-50 border text-center hover:shadow-sm transition">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-bold mt-1">{value}</div>
    </div>
  );
}

function GovernanceCard({ title, desc, link }) {
  return (
    <div className="p-4 rounded-lg border bg-gray-50 hover:shadow-sm transition">
      <div className="font-medium text-gray-800">{title}</div>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
      <a href="#" className="text-sm underline text-[#7b3b8a] mt-2 inline-block">
        {link}
      </a>
    </div>
  );
}
