import React from "react";
import { images } from "../../assets/assets";

export default function CSRPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
          <section
      className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${images.whoweare})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="absolute inset-0 backdrop-brightness-25"></div>
            <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">CSR — Sitara Welfare & Community Initiatives</h1>
              <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
                          Corporate Social Responsibility (CSR) — spotlighting Sitara’s community projects and the people they serve.

              </p>
            </div>
          </section>
      {/* <header className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">CSR — Sitara Welfare & Community Initiatives</h1>
          <p className="mt-4 max-w-3xl text-lg opacity-90">
            Corporate Social Responsibility (CSR) — spotlighting Sitara’s community projects and the people they serve.
          </p>
        </div>
      </header> */}

      <main className="container mx-auto px-6 lg:px-20 mt-12">
        {/* Top note block showing original WhatsApp lines (exact text as provided) */}
        {/* <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border">
          <h2 className="text-xl font-semibold mb-4">Source / Notes (original)</h2>
          <div className="prose max-w-none text-sm leading-relaxed text-gray-700">
            <p>[6:05 PM, 10/29/2025] +92 301 8285467: Dear website team</p>
            <p>Below is content and pics for CSR section.</p>
            <p>Sufian pics need to be improved and polished woth phoyoshop :-</p>
            <p>[6:05 PM, 10/29/2025] +92 301 8285467: Sir, I have received the content from sir irfan, should I forward it to the concerned person who is making the website</p>
          </div>
        </section> */}

        {/* Grid of CSR cards */}
        <section className="grid gap-8 grid-cols-1 lg:grid-cols-3 mb-12">
          {/* Card 1 */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition p-0 border">
            <div className="relative h-56 md:h-64 w-full">
              {/* Replace with actual image at /public/images/sitara-water.jpg */}
              <img src="/csr-1.jpeg" alt="Sitara Water Filtration Plant" className="object-contain w-full h-full" />
              <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2">
                <h3 className="text-lg font-bold">Sitara Water Filtration Plant</h3>
                <p className="text-xs">Providing Clean Water for a Healthier Community</p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                The Sitara Water Filtration Plant, located in Qaboola City, was established under the management of Sitara Welfare Trust to address the long-standing issue of clean drinking water for the local community. Through this initiative, thousands of residents now benefit daily from the provision of safe and purified water.
              </p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                In addition to on-site access, the plant also provides free supply of mineral water in half-liter, 1.5-liter, and 19-liter bottles, ensuring that clean drinking water reaches every household and needy family in the area. This project reflects Sitara Welfare Trust’s continuous dedication to improving public health and enhancing the quality of life for the people of Qaboola.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-block text-xs font-medium text-sky-700">Location: Qaboola City</span>
                {/* <button className="text-xs font-semibold px-3 py-2 rounded-lg bg-sky-600 text-white shadow">View Gallery</button> */}
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition p-0 border">
            <div className="relative h-56 md:h-64 w-full">
              <img src="/csr-2.jpeg" alt="Sitara Dispensary" className="object-contain w-full h-full" />
              <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2">
                <h3 className="text-lg font-bold">Sitara Dispensary</h3>
                <p className="text-xs">Caring for Health, Serving Humanity Since 2016</p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                Sitara Dispensary, established in 2016 and located in Qaboola City, is devoted to providing free medical treatment and medicines to underprivileged and deserving individuals. The dispensary plays a vital role in ensuring that those who cannot afford healthcare receive proper medical attention and support.
              </p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                In addition to treatment, Sitara Dispensary also extends financial assistance to patients’ families, helping them manage difficult times with dignity. Through this compassionate service, Sitara continues its mission of promoting health, care, and social welfare within the community.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-block text-xs font-medium text-sky-700">Established: 2016 — Location: Qaboola City</span>
                {/* <button className="text-xs font-semibold px-3 py-2 rounded-lg bg-sky-600 text-white shadow">Learn More</button> */}
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition p-0 border">
            <div className="relative h-56 md:h-64 w-full">
              <img src="/csr-3.jpeg" alt="Sitara Dastarkhawan" className="object-contain w-full h-full" />
              <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2">
                <h3 className="text-lg font-bold">Sitara Dastarkhawan</h3>
                <p className="text-xs">Serving Humanity Since 2020</p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                Sitara Dastarkhawan, established in 2020, is a project dedicated to social welfare and community service. Located at Sofia Abad Stop, Main Ferozpur Road, Lahore, it prepares fresh meals daily for 2,500 to 3,000 people. These meals are distributed across various social locations, including hospitals, labor points, and langar khanas, to support the underprivileged and needy.
              </p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                Through this noble initiative, Sitara Dastarkhawan not only provides food to the hungry but also creates employment opportunities for 50 to 60 deserving individuals, helping them earn a respectful livelihood. This effort reflects our continuous commitment to serving humanity with compassion and dignity.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-block text-xs font-medium text-sky-700">Serves: 2,500–3,000 meals/day — Location: Lahore</span>
                {/* <button className="text-xs font-semibold px-3 py-2 rounded-lg bg-sky-600 text-white shadow">Support Project</button> */}
              </div>
            </div>
          </article>
        </section>

        {/* Full-width highlight with call-to-action */}
        {/* <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-20 border">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-extrabold">Want to help or share photos?</h2>
              <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
                If you have improved or polished photos (for example Sufian pics), please upload high-resolution images to the project media folder and name them exactly:
              </p>

              <ul className="mt-4 list-disc list-inside text-sm text-gray-700">
                <li>/public/images/sitara-water.jpg</li>
                <li>/public/images/sitara-dispensary.jpg</li>
                <li>/public/images/sitara-dastarkhawan.jpg</li>
              </ul>

              <p className="mt-4 text-sm text-gray-700">Note: the original text provided will be used exactly as content on the site.</p>

              <div className="mt-6 flex items-center gap-4">
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow">Upload Images</button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800">Contact Site Admin</button>
              </div>
            </div>

            <div className="w-full lg:w-96">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-4 shadow-inner">
                <img src="/images/csr-collage.jpg" alt="CSR collage" className="w-full rounded-lg object-cover h-56" />
                <p className="mt-3 text-sm text-gray-600">Collage / gallery placeholder — replace with high-res images.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Footer small */}
        {/* <footer className="text-center py-8 text-sm text-gray-500">
          © Sitara Welfare Trust — CSR initiatives (content as provided: 10/29/2025)
        </footer> */}
      </main>
    </div>
  );
}
