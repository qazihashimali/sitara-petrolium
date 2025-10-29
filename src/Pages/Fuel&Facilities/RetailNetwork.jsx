import React, { useState } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowRightCircle, Phone, MapPin, X } from "lucide-react";
import pakistanGeoJSON from "./pakistan.geo.json";
import provincesGeoJSON from "./pakistan-provinces.geo.json";
import Title from "../../Components/Title";

const stations = [
  {
    id: "bahawalpur",
    name: "Bahawalpur Fuel Station",
    coords: [29.3956, 71.6833],
    image: "/images/stations/bahawalpur.jpg",
    phone: "+92 300 1234567",
    address: "Main Road, Bahawalpur, Punjab, Pakistan",
  },
  {
    id: "johartown",
    name: "Johar Town, Lahore Station",
    coords: [31.4807, 74.2973],
    image: "/images/stations/johartown.jpg",
    phone: "+92 321 9876543",
    address: "Main Boulevard, Johar Town, Lahore, Pakistan",
  },
  {
    id: "addaplot",
    name: "Adda Plot Station",
    coords: [31.4529, 74.2407],
    image: "/images/stations/addaplot.jpg",
    phone: "+92 345 2223344",
    address: "Adda Plot, Raiwind Road, Lahore, Pakistan",
  },
];

const createDivIcon = (isHovered) =>
  L.divIcon({
    className: "marker-div-icon",
    html: `
      <div class="flex items-center justify-center rounded-full p-1 transform transition-transform duration-150 ${
        isHovered ? "scale-125" : "scale-100"
      }">
        <div class="w-4 h-4 rounded-full bg-blue-600 shadow-lg border-2 border-white"></div>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

const RetailNetworkMap = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [tooltipStation, setTooltipStation] = useState(null);

  const countryStyle = {
    color: "#1d4ed8",
    weight: 2,
    fillColor: "#93c5fd",
    fillOpacity: 0.15,
  };

  const provinceStyle = {
    color: "#2563eb",
    weight: 1.2,
    fillOpacity: 0,
    dashArray: "4 3",
  };

  return (
    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6 text-center"
        style={{ backgroundImage: "url('/assets/retail-network-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <Title
            title="Retail Network"
            subtitle="Explore our nationwide network of fuel stations across Pakistan."
            textColor="text-white"
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Title
            title="Our Retail Locations"
            subtitle="Sitara Petroleum’s expanding retail network ensures that reliable energy is always accessible—whether you're commuting in the city, travelling between provinces, or managing transport fleets on key trade routes. We are dedicated to providing <b>consistent fuel quality, exceptional service standards, and convenient station experiences</b> for every customer, every day."
          />

          <Title
            title="Our Retail Locations"
            subtitle="Explore our growing network of Sitara Petroleum fuel stations across Pakistan. From <b>urban centres to remote highways</b>, our stations are strategically positioned to serve daily drivers, logistics operators, and long-distance travellers."
          />

          <div
            className={`mt-10 w-full h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-lg relative transition-all duration-300 ${
              selectedStation ? "z-[-1]" : "z-0"
            }`}
          >
            <MapContainer
              center={[30.3753, 69.3451]}
              zoom={5}
              minZoom={5.2}
              maxZoom={12}
              scrollWheelZoom={true}
              className="w-full h-full"
              zoomControl={false}
            >
              <GeoJSON data={pakistanGeoJSON} style={countryStyle} />
              <GeoJSON data={provincesGeoJSON} style={provinceStyle} />

              {stations.map((station) => (
                <Marker
                  key={station.id}
                  position={station.coords}
                  icon={createDivIcon(hoveredId === station.id)}
                  eventHandlers={{
                    click: () => setTooltipStation(station),
                    mouseover: () => setHoveredId(station.id),
                    mouseout: () => setHoveredId(null),
                  }}
                >
                  {tooltipStation?.id === station.id && (
                    <Tooltip
                      direction="top"
                      offset={[0, -20]}
                      opacity={1}
                      permanent={true}
                      className="bg-white/95 text-gray-900 border border-gray-200 shadow-xl rounded-lg"
                    >
                      <div className="p-2 w-48">
                        <p className="font-semibold text-sm">{station.name}</p>
                        <p className="text-xs text-gray-600 truncate">
                          {station.address.split(",")[0]}
                        </p>
                        <button
                          className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-700 transition"
                          onClick={() => {
                            setSelectedStation(station);
                            setTooltipStation(null);
                          }}
                        >
                          View Details <ArrowRightCircle size={14} />
                        </button>
                      </div>
                    </Tooltip>
                  )}
                </Marker>
              ))}
            </MapContainer>
          </div>
          <br />
          <br />
          <Title
            title="Highlights of our expanding network include"
            subtitle={`
                        <ul class='list-disc text-left mx-auto max-w-3xl space-y-2'>
                        <li>Coverage in major cities: Lahore, Karachi, Islamabad, Faisalabad, and Multan.</li>
                        <li>Access along highway corridors: M1, M2, M4, N5, and GT Road.</li>
                        <li>Support for industrial and rural routes for fleet refuelling.</li>
                        <li>Use our station locator to find the nearest Sitara Petroleum outlet.</li>
                        </ul>
                      `}
          />
        </div>
      </section>

      {/* Modal */}
      {selectedStation && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="relative w-[90%] md:w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white">
            {/* Close button */}
            <button
              onClick={() => setSelectedStation(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 hover:cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedStation.image}
              alt={selectedStation.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            {/* Details */}
            <div className="p-6 bg-white">
              <Title
                title={selectedStation.name}
                subtitle={selectedStation.address.split(",")[1] || ""}
                align="left"
              />
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <Phone size={18} className="text-blue-600" />
                {selectedStation.phone}
              </p>
              <p className="flex items-center gap-2 text-gray-700 mb-4">
                <MapPin size={18} className="text-blue-600" />
                {selectedStation.address}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .marker-div-icon { background: transparent; }
        .leaflet-tooltip {
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
};

export default RetailNetworkMap;
