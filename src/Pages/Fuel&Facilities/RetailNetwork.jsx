import React, { useState } from "react";
import { MapPin, Phone, X } from "lucide-react";
import Title from "../../Components/Title";

const stations = [
  {
    id: 1,
    name: "Bahawalpur Fuel Station",
    location: "Bahawalpur, Punjab",
    image: "/images/stations/bahawalpur.jpg",
    phone: "+92 300 1234567",
    address: "Main Road, Bahawalpur, Punjab, Pakistan",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.097058845828!2d71.6833!3d29.3956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3939d3adbf124b45%3A0x7f3d496f5a12a7!2sBahawalpur!5e0!3m2!1sen!2s!4v1700000000000",
  },
  {
    id: 2,
    name: "Johar Town, Lahore Station",
    location: "Johar Town, Lahore",
    image: "/images/stations/johartown.jpg",
    phone: "+92 321 9876543",
    address: "Main Boulevard, Johar Town, Lahore, Pakistan",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.194394504086!2d74.2973!3d31.4807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919077b7a8c1a93%3A0x50b1ad879ca8!2sJohar%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1700000000000",
  },
  {
    id: 3,
    name: "Adda Plot Station",
    location: "Raiwind Road, Lahore",
    image: "/images/stations/addaplot.jpg",
    phone: "+92 345 2223344",
    address: "Adda Plot, Raiwind Road, Lahore, Pakistan",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4561787681793!2d74.2407!3d31.4529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902b00c3a49a3%3A0xb5e2f1b3fa22!2sAdda%20Plot%2C%20Raiwind%20Road%2C%20Lahore!5e0!3m2!1sen!2s!4v1700000000000",
  },
];

const RetailNetwork = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-6 text-center"
        style={{
          backgroundImage: "url('/assets/retail-network-hero.jpg')", // replace with your hero image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <Title
            title="Retail Network"
            subtitle="A nationwide network of fuel stations delivering quality, convenience, and reliability."
            textColor="text-white"
          />
        </div>
      </section>

      {/* Stations Grid */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Title
            title="Our Retail Locations"
            subtitle="Explore our growing network of Sitara Petroleum fuel stations across Pakistan."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {stations.map((station) => (
              <div
                key={station.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={station.image}
                  alt={station.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold text-blue-800">
                    {station.name}
                  </h2>
                  <p className="text-gray-600 text-sm flex justify-center items-center gap-1 mt-1">
                    <MapPin size={16} /> {station.location}
                  </p>
                  <button
                    onClick={() => setSelected(station)}
                    className="mt-4 px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                  >
                    More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[700px] max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <Title
                title={selected.name}
                subtitle={selected.location}
                align="left"
              />
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <Phone size={18} className="text-blue-600" />
                {selected.phone}
              </p>
              <p className="flex items-center gap-2 text-gray-700 mb-4">
                <MapPin size={18} className="text-blue-600" />
                {selected.address}
              </p>

              {/* Google Map */}
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src={selected.mapSrc}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={selected.name}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetailNetwork;
