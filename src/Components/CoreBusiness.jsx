import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { images } from "../assets/assets";

const CoreBusiness = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-16 bg-white text-center">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
       <div className="text-center">
  <h2 className="text-3xl font-bold text-gray-900">
    Existing Core Business
  </h2>
  {/* Red line below the title */}
<div className="w-30 h-1 mx-auto mt-2 rounded bg-gradient-to-r from-[#EB3541] to-[#00C951]"></div>

<p className="mt-4 text-gray-700 max-w-xl mx-auto text-center">
  Our primary business focuses on petroleum and logistics. We are dedicated to providing high-quality fuel, maintaining reliable operations, and delivering exceptional service to more locations across the country.
</p>

</div>

      </motion.div>

      {/* Animated Content Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Petrol Pumps */}
        <motion.div variants={cardVariants} className="text-center">
          <motion.h3
            className="text-3xl font-bold text-primary mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Petrol Pumps
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our fuel stations nationwide offer high-quality petrol and diesel, with many providing additional retail services for a quicker, easier, and more comfortable visit.
          </motion.p>
          <motion.div
            className="rounded-[30px] overflow-hidden shadow-lg"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={images.pump}
              alt="Petrol Pumps"
              className="w-full h-72 object-cover"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Logistics */}
        <motion.div variants={cardVariants} className="text-center">
          <motion.h3
            className="text-3xl font-bold text-green-500 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Logistics
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
        We operate a large fleet of over 400+ vehicles that safely transport fuel across the country every day. Our focus is on safety, reliability, and timely delivery.
          </motion.p>
          <motion.div
            className="rounded-[30px] overflow-hidden shadow-lg"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={images.logistic}
              alt="Logistics"
              className="w-full h-72 object-cover"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreBusiness;
