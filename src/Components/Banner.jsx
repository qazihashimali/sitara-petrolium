import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue, animate } from "framer-motion";

const stats = [
  { id: 1, value: 65, label: "No of Petrol Pumps", suffix: "+" },
  { id: 2, value: 400, label: "No of Fuel Tankers", suffix: "+" },
  { id: 3, value: 15, label: "Years of Experience", suffix: "+" },
];

/* -------------------------------------------------------------
   CountUp – Animates numbers when section is visible
   ------------------------------------------------------------- */
const CountUp = ({ value, suffix }) => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <span style={{ color: "#00C951" }}>{displayValue}</span>
      <span style={{ color: "#EB3541", marginLeft: "2px" }}>{suffix}</span>
    </span>
  );
};

/* ------------------------------------------------------------- */
const Banner = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#f5f9fb] text-black py-16 px-6 sm:px-10 lg:px-20 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold mb-12"
      >
        Our Highlights
      </motion.h2>

      {/* Stats */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto"
      >
        {stats.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-5xl md:text-5xl">
              <CountUp value={item.value} suffix={item.suffix} />
            </h3>
            <p className="mt-2 text-sm md:text-base font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;
