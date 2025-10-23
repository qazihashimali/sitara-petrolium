import React, { useEffect, useRef } from "react";
import Title from "./Title";
import { MoveRight } from "lucide-react";

const EnvironmentalProtection = () => {
  const sectionRef = useRef(null);

  const cards = [
    {
      title: "Nature and Energy",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=f240fa997fad9920841412d5ebd6f4c7d368649e-12537873-images-thumbs&n=13",
      link: "#",
    },
    {
      title: "Green Innovation",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=8fc9e075033b52f32ead37c4dcb714d0ff851c3d-10240336-images-thumbs&n=13",
      link: "#",
    },
    {
      title: "Renewable Future",
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=597b51ece8c6029062e7172ee6bccc6289495ad2-5277319-images-thumbs&n=13",
      link: "#",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    let observer;

    if (window.innerWidth < 768 && section) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) startAutoScroll();
        },
        { threshold: 0.9 }
      );

      observer.observe(section);
    }

    function startAutoScroll() {
      const container = section.querySelector(".scroll-container");
      if (!container) return;
      let direction = "right";

      const scrollInterval = setInterval(() => {
        if (direction === "right") {
          container.scrollLeft += 2;
          if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth
          ) {
            direction = "left";
          }
        } else {
          container.scrollLeft -= 2;
          if (container.scrollLeft <= 0) {
            direction = "right";
          }
        }
      }, 20);

      section.addEventListener("mouseleave", () =>
        clearInterval(scrollInterval)
      );
      section.addEventListener("touchend", () => clearInterval(scrollInterval));
    }

    return () => {
      if (observer && section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 md:px-20 lg:px-32 bg-white overflow-hidden"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        {/* Left: Title */}
        <div>
          <p className="text-red-600 text-2xl sm:text-3xl font-bold mb-2">
            SUSTAINABILITY
          </p>
          <Title
            title="Environmental Protection"
            subtitle="Sitara Petroleum is committed to safeguarding the environment through responsible fuel operations, innovative green technologies, and reduced carbon emissions paving the way toward a cleaner, more sustainable energy future."
            align="left"
          />
        </div>

        {/* Right: Link */}
        <a
          href="#"
          className="flex items-center gap-2 text-green-600 font-semibold text-lg hover:text-green-700 transition-colors duration-300"
        >
          Sitara & Sustainability
          <span className="flex items-center justify-center border border-green-600 rounded-full p-2">
            <MoveRight size={22} className="mt-[2px]" />
          </span>
        </a>
      </div>

      {/* Desktop Grid | Mobile Horizontal Scroll */}
      <div className="mt-10">
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-left">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="rounded-md w-full h-52 object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-3 w-full">
                <h4 className="font-semibold text-lg">{card.title}</h4>
                <a
                  href={card.link}
                  className="text-red-500 text-sm font-medium flex items-center gap-1 mt-1 hover:underline"
                >
                  learn more
                  <MoveRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="scroll-container flex sm:hidden gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth mt-5 pb-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="shrink-0 w-72 snap-center flex flex-col items-center text-left"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="rounded-md w-full h-52 object-cover shadow-md"
              />
              <div className="mt-3 w-full">
                <h4 className="font-semibold text-lg">{card.title}</h4>
                <a
                  href={card.link}
                  className="text-red-500 text-sm font-medium flex items-center gap-1 mt-1 hover:underline"
                >
                  learn more
                  <MoveRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalProtection;
