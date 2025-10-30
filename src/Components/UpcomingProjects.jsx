import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Title from "./Title";
import { MoveRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "New Oil Storage",
    img: "New-oil-storage.jpg",
    details:
      "Building new oil storage facilities to keep fuel safe, improve supply reliability, and support growing demand across the country. These storage units are designed for efficiency, safety, and long-term sustainability.",
  },
  {
    id: 2,
    title: "Logistics",
    img: "Logistics.png",
    details:
      "Expanding our logistics network to move fuel and materials safely, efficiently, and reliably nationwide. This includes modern fleet management, better route planning, and enhanced safety measures for drivers and cargo.",
  },
  {
    id: 3,
    title: "New Petrol Pumps",
    img: "New-Petrol-Pumps.png",
    details:
      "Opening new petrol stations to provide high-quality fuel and convenient services for our customers. Each station is designed for comfort, quick service, and customer satisfaction.",
  },
  {
    id: 4,
    title: "Refrigerated Vehicles",
    img: "https://avatars.mds.yandex.net/i?id=2b32f5cf5ea7c366ccc2460918f86902df6ca12a-3873335-images-thumbs&n=13",
    details:
      "Introducing refrigerated vehicles to safely transport temperature-sensitive goods. These vehicles ensure that fuel additives, lubricants, and other sensitive products maintain their quality during transport.",
  },
  {
    id: 5,
    title: "Lubes",
    img: "data:image/jpeg;base64,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",
    details:
      "Expanding our range of high-quality lubricants for vehicles and machinery, ensuring smooth performance, longer engine life, and reliable operation for customers across various industries.",
  },
  {
    id: 6,
    title: "NFR (Non fuel revenue)",
    img: "NFR.png",
    details:
      "Developing additional non-fuel services to enhance customer experience and provide extra value. This includes retail offerings, convenience services, and other services that support community needs.",
  },
  {
    id: 7,
    title: "Cranes",
    img: "Refinery.png",
    details:
      "Adding cranes to improve the safe and efficient handling of heavy equipment and materials. These cranes help in faster operations, reducing downtime and ensuring worker safety.",
  },
  {
    id: 8,
    title: "EV Charging Stations",
    img: "EV-charger.jpg",
    details:
      "Setting up electric vehicle charging stations to support a cleaner, greener transport network. These stations are easy to use, reliable, and help promote sustainable mobility for everyone.",
  },
];

const UpcomingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-scroll for mobile
  useEffect(() => {
    const section = scrollRef.current;
    if (!section || window.innerWidth >= 640) return;

    let scrollInterval;
    const startAutoScroll = () => {
      const container = section.querySelector(".scroll-container");
      let direction = 1;

      scrollInterval = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          direction = -1;
        } else if (container.scrollLeft <= 0) {
          direction = 1;
        }
        container.scrollLeft += direction * 2;
      }, 20);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startAutoScroll();
        else clearInterval(scrollInterval);
      },
      { threshold: 0.8 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Trigger animations when in view
  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={scrollRef} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Projects
            </h2>
            {/* Gradient line below title */}
            <div className="w-25 h-1 mx-auto mt-2 rounded bg-gradient-to-r from-[#EB3541] to-[#00C951]"></div>

            <p className="mt-4 text-gray-700 max-w-xl mx-auto text-center">
              We are expanding our operations with new storage, stations,
              vehicles, and services — all designed to improve quality and
              reach.
            </p>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 hidden sm:grid grid-cols-3 lg:grid-cols-3 gap-10 justify-center"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-full"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {project.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-red-600 text-sm font-medium flex items-center gap-2 mt-auto hover:underline cursor-pointer"
                >
                  Read more <MoveRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Horizontal Scroll */}
        <div className="sm:hidden mt-8">
          <div className="scroll-container flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-1">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="shrink-0 w-80 snap-center"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-red-600 text-sm font-medium flex items-center gap-1 mt-2"
                    >
                      Read more <MoveRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with blur background */}
      {selectedProject && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 font-bold text-xl hover: cursor-pointer"
            >
              ×
            </button>
            <h3 className="font-bold text-xl mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700">{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingProjects;
