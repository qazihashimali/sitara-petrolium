import React from "react";
import { ArrowRight } from "lucide-react"; // For the arrow icon
import { images } from "../assets/assets";
import Title from "../Components/Title";

const BecomeADealer = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Left Side Image */}
        <div className="relative group">
          <img
            src={images.hero3}
            alt="Petroleum Refinery"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-3xl font-semibold mb-2">Join Our Network</h3>
            <p className="text-sm text-gray-200 max-w-sm">
              Partner with{" "}
              <span className="font-semibold">Sitara Petroleums</span> —
              Pakistan’s trusted energy brand. Let’s grow together in fueling
              progress.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <Title
            title="Become a Dealer"
            align="left"
            subtitle="We're expanding our network of trusted partners. Fill in your details below, and our team will reach out to discuss dealership opportunities."
          />

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#004d40] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#004d40] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="03XX-XXXXXXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#004d40] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Location
              </label>
              <input
                type="text"
                placeholder="City / Area"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#004d40] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message / Comments
              </label>
              <textarea
                rows="4"
                placeholder="Tell us a bit about your business..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#004d40] focus:border-transparent transition-all"
              ></textarea>
            </div>

            {/* Submit Button with Arrow Animation */}
            <button
              type="submit"
              className="group w-full bg-primary cursor-pointer text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Submit Application
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomeADealer;
