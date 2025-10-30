import React from "react";

export default function SitaraRestrooms() {
  const features = [
    {
      img: "/Hygienic-Facilities.png",
      title: "Hygienic Facilities",
      description:
        "Our restrooms are <strong>cleaned and sanitised multiple times a day</strong> using <strong>professional-grade products</strong> and <strong>strict hygiene protocols</strong>. From toilets to touchpoints, every detail is handled with care to ensure a <strong>germ-free, pleasant experience</strong> on every visit.<br/><ul class='text-sm mt-2 list-disc list-inside text-gray-600'><li>Frequent sanitisation</li><li>Soap dispensers constantly refilled</li><li>Floor-to-surface disinfection routine</li></ul>",
    },
    {
      img: "/Comfort-for-Everyone.png",
      title: "Comfort for Everyone",
      description:
        "Our restrooms are <strong>inclusive and family-friendly</strong>, featuring <strong>separate facilities for men, women, and guests with disabilities</strong>. We ensure <strong>accessibility, privacy, and ease of use</strong> for all travellers, whether you're on a long road trip or a short stop.<br/><ul class='text-sm mt-2 list-disc list-inside text-gray-600'><li>Wheelchair-accessible entry</li><li>Baby-changing stations (at select locations)</li><li>Clearly marked and secure stalls</li></ul>",
    },
    {
      img: "/Modern-Amenities.png",
      title: "Modern Amenities",
      description:
        "Enjoy a <strong>clean and convenient restroom experience</strong> with modern features such as:<br/><ul class='text-sm mt-2 list-disc list-inside text-gray-600'><li><strong>Touchless taps and flush systems</strong></li><li><strong>Automated hand dryers</strong></li><li><strong>Large, well-lit mirrors</strong></li><li><strong>Fragrance dispensers and fresh ventilation</strong></li><li><strong>Ambient lighting for visibility</strong></li><li><strong>Mirror height suitable for both adults and children</strong></li><li><strong>Ventilation fans and automatic air fresheners</strong></li></ul>",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-red-600 text-lg sm:text-xl font-semibold tracking-widest mb-2">
          CLEAN & FRESH RESTROOMS
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          <strong>Comfort. Cleanliness. Care.</strong>
        </h1>
        <p
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{
            __html:
              "<strong>Our Restrooms</strong> aim to provide <strong>travellers, families, and commuters</strong> with a spotless, refreshing, and safe experience — maintained around the clock for your comfort and peace of mind.",
          }}
        />
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1590490359683-658d1f58f5b0?auto=format&fit=crop&w=900&q=80"
            alt="Restroom interior"
            className="rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <strong>Clean Spaces for a Better Journey</strong>
            </h2>
            <p
              className="text-gray-600 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html:
                  "We believes every stop should feel like a <strong>refresh</strong> — not just a pause. Our restrooms are cleaned with <strong>industry-grade products</strong>, staffed by <strong>dedicated professionals</strong>, and monitored in real-time to keep you <strong>safe and satisfied</strong>.",
              }}
            />
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ Regular cleaning every hour</li>
              <li>✅ Dedicated housekeeping staff</li>
              <li>✅ Fragrance and ventilation systems</li>
              <li>✅ Touch-free fixtures for hygiene</li>
            </ul>
          </div>
        </div>.
        <div className="mt-10 text-center px-6 max-w-3xl mx-auto box-border border-2 border-dashed border-gray-300 py-8 rounded-lg bg-gray-50">
           <h2 className="text-2xl font-bold">Experience Clean & Fresh Comfort</h2>
        <p>
          Visit our Petroleum stations across Pakistan and enjoy modern, hygienic, and family-friendly restrooms—because your comfort matters, no matter the journey.
        </p>
        </div>
       
      </section>

      {/* FOOTER */}
      {/* <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Our Petroleum —{" "}
        <span className="font-semibold">Clean & Fresh Restrooms</span>. All
        rights reserved.
      </footer> */}
    </div>
  );
}
