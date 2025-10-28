import React, { useState } from "react";

export default function MobileAppComingSoon() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  function validateEmail(e) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
  }

  function handleSubscribe(ev) {
    ev.preventDefault();
    setError("");
    if (!validateEmail(email)) return setError("Please enter a valid email");
    setSubscribed(true);
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            MOBILE APP
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Sitara Mobile App
          </h1>
          <br />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
            🚧 Coming Soon
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            convenience, safety, and fuel services right in your pocket. Join
            the waitlist for early access and exclusive launch promos.
          </p>
        </div>

        {/* App Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left - Details */}
            <div className="p-8 bg-gradient-to-b from-[#f9fafb] to-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">What to expect</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>
                    • Find nearest Sitara stations & live fuel availability
                  </li>
                  <li>• Easy payments, invoices, and loyalty rewards</li>
                  <li>• 24/7 emergency helpline & live support</li>
                  <li>
                    • Book services — car wash, tyre, quick lube, and EV
                    charging slots
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-600">
                    Early access
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Join the waitlist to get early access and special promos
                    when we launch.
                  </p>

                  {subscribed ? (
                    <div className="mt-3 p-3 rounded-lg bg-green-50 text-green-800 border border-green-200">
                      Thanks — you'll get an email when we launch.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubscribe}
                      className="mt-3 flex gap-2"
                    >
                      <input
                        className="flex-1 rounded-lg border border-gray-200 p-2"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7b3b8a] via-[#f1b73e] to-[#2f7a4a] text-white">
                        Join
                      </button>
                    </form>
                  )}
                  {error && (
                    <div className="text-xs text-red-500 mt-2">{error}</div>
                  )}
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <div className="mb-2">Follow us for updates</div>
                <div className="flex items-center gap-3">
                  <a href="#" className="underline">
                    LinkedIn
                  </a>
                  <a href="#" className="underline">
                    Twitter
                  </a>
                  <a href="#" className="underline">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Phone Preview */}
            <div className="p-8 bg-gray-50 flex items-center justify-center">
              <div className="w-56 h-[28rem] bg-gradient-to-b from-white to-gray-100 rounded-3xl shadow-lg p-4 flex flex-col">
                <div className="h-10 flex items-center justify-between px-2">
                  <div className="w-10 h-3 bg-gray-200 rounded" />
                  <div className="w-6 h-3 bg-gray-200 rounded" />
                </div>

                <div className="flex-1 mt-4 rounded-lg overflow-hidden relative bg-white border border-gray-100">
                  <div className="h-full flex flex-col items-center justify-center text-center p-4">
                    <div className="text-sm text-gray-400">App preview</div>
                    <div className="mt-4 text-xs text-gray-500">
                      Station locator, payments, support & more
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-3 justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white text-xs"
                  >
                    App Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white text-xs"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t flex items-center justify-between text-xs text-gray-500">
            <div>© Sitara Petroleum & Logistics</div>
            <div>Privacy · Terms</div>
          </div>
        </div>
      </div>
    </div>
  );
}
