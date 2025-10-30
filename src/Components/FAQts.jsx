import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const facts = [
  "We manage 400+ tank lorries to safely move fuel across the country, ensuring reliable and secure operations every day.",
  "Over 40 retail outlets serve customers nationwide, providing high-quality petroleum products.",
  "We focus on sustainability with initiatives that support renewable energy and eco-friendly practices.",
  "We keep investing in technology to make logistics safer, faster, and more efficient."
];


export default function FAQts() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="facts"
      className="relative flex flex-col md:flex-row justify-center items-center gap-16 py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 blur-3xl rounded-full -z-10"></div>

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-[35vw] text-center md:text-left"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          SITARA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e70032] to-[#ff6a88]">
            FACTS
          </span>
        </h2>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          Learn about our nationwide operations, focus on sustainability, and drive for innovation — showing the strength and trust behind the <b>Sitara</b> name.

        </p>

        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-gray-600">
          <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            ✓ Nationwide Reach
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            ✓ Eco-Friendly
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            ✓ Tech-Driven
          </span>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="w-[30vw] flex justify-center items-center relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bg-white border border-gray-100 rounded-3xl p-10 shadow-1xl w-full flex items-center justify-center text-center backdrop-blur-lg"
            style={{
              // boxShadow: "0 5px 50px rgba(231, 0, 50, 0.04)",
            }}
          >
            <div>
              <p className="text-gray-800 text-lg md:text-xl font-semibold leading-relaxed">
                {facts[index]}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
