import React from "react";
import Title from "../../Components/Title";
import { images } from "../../assets/assets";

const leadership = [
  {
    name: "Hasan Ahmed",
    position: "Chief Executive Officer | Finance & Strategy Leader",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", // Replace with actual image URL
    description:
      "Hasan Ahmed is a highly accomplished finance and operations executive with over 20 years of leadership across local and multinational businesses. As CEO of Dellsons Group, he oversees ventures in finance, technology, and education. Hasan has successfully led large-scale financial transactions including IPOs, Sukuks, and corporate restructuring for high-impact sectors such as healthcare, telecom, and real estate. His previous roles include senior leadership at Pakistan Cricket Board, Wateen Telecom, Sharif Group, and multiple sugar and textile ventures. A Certified Public Accountant (USA) with multiple professional affiliations, he combines deep financial expertise with strategic foresight to drive growth and innovation.",
  },
  {
    name: "Tosheeba Sarwar",
    position: "Director | Business Development & Image Management Expert",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", // Replace with actual image URL
    description:
      "Tosheeba Sarwar is a veteran business consultant, educator, and image strategist with over 25 years of multi-sectoral experience in entrepreneurship development, corporate branding, and strategic consulting. She has worked with leading brands such as Engro, Bareeze, and Ufone, and has co-founded platforms like the PINK Academy and Placement Managers. Her teaching portfolio includes renowned institutions like Aitchison College and GCU, Lahore. Tosheeba has also been an active consultant for USAID, British High Commission, PITB, and various chambers of commerce. A mentor at MIT Venture Lab, she continues to champion women’s entrepreneurship and business innovation in Pakistan and beyond.",
  },
  {
    name: "Zaheer Baig",
    position:
      "Senior Business Leader | Organizational Diagnosis & Capacity Building | Transformation Specialist",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", // Replace with actual image URL
    description:
      "Zaheer Baig brings over 45 years of experience across HR, compliance, Sales and business development in industries spanning oil & gas, pharmaceuticals, logistics, and telecom. Currently serving as Chief Executive Officer at Sitara Petroleum Services Ltd, his past roles include transformative leadership at PSO, Eli Lilly, and NLC. He played a key role in launching PSO’s modern retail vision and corporate loyalty programs and pioneered several HR initiatives that earned global recognition. He has served on the boards of major public enterprises and is a certified director from ICAP. With strong expertise in leadership development and organizational change, Zaheer is also committed to bring self-sustainability and happiness in under prevailed.",
  },
  {
    name: "Zafar Iqbal Chaudhry",
    position: "Advisor | Former Senator & Business Leader",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", // Replace with actual image URL
    description:
      "Zafar Iqbal Chaudhry is a distinguished former Senator of Pakistan and seasoned business leader with over three decades of experience in public policy, commerce, and strategic development. He served in the Senate from 2003 to 2009, chairing key standing committees and representing Pakistan at international forums including the United Nations. As President of the Lahore Chamber of Commerce & Industry (2009–2010), he launched impactful initiatives focused on water conservation, regional trade, and industrial growth. He has also served as Independent Director on the board of Hascol Petroleum and contributed to turnaround strategies during challenging periods. With degrees in Journalism and Law, his career is defined by leadership in both public service and private enterprise.",
  },
];

const BoardOfDirector = () => {
  return (
    <div className="min-h-screen bg-white  ">
      <section
        className="relative h-[50vh] md:h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${images.whoweare})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-50"></div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Board of Directors
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
            Empowering Pakistan’s energy future through reliability, efficiency,
            safety and service excellence.
          </p>
        </div>
      </section>
      {/* Page Header */}
      <div className="px-2 py-4 sm:px-4 sm:py-6 md:px-12 md:py-10">
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
            OUR LEADERSHIP
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Leading with Vision. Driving with Purpose.
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Our leadership team brings decades of experience, bold thinking, and
            a clear mission — to shape the future of energy through integrity,
            innovation, and impactful decisions.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-red-600 text-sm font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirector;
