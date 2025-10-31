import React, { useState, useMemo, useEffect } from "react";
import {
  MapContainer,
  Marker,
  GeoJSON,
  Tooltip,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { X, MapPin } from "lucide-react";
import pakistanGeoJSON from "./pakistan.geo.json";
import provincesGeoJSON from "./pakistan-provinces.geo.json";
import Title from "../../Components/Title";
import { images } from "../../assets/assets";

// ==========================
// FULL DATA WITH REGION
// ==========================
const allStations = [
  {
    id: 1,
    city: "Arifwala",
    region: "Sahiwal",
    name: "SITARA PETROLEUM SERVICES (PRIVATE)",
    address:
      "ARIFWALA BAHAWALPUR ROAD AT QABULA CITY TEHSIL ARIFWALA DISTRICT PAK",
  },
  {
    id: 2,
    city: "Faisalabad",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICES (PRIVATE)",
    address: "Faisalabad, 38000, Pakistan",
  },
  {
    id: 3,
    city: "Lahore",
    region: "Lahore",
    name: "COCO LAHORE 11",
    address: "7CR3+9P3, Service Rd, Kasur, Pakistan",
  },
  {
    id: 4,
    city: "Muridke",
    region: "Lahore",
    name: "SITARA PETROLEUM SERVICES (PVT) LTD",
    address: "Q7J4+PVG Kala Shah Kaku, Pakistan",
  },
  {
    id: 5,
    city: "Lahore",
    region: "Lahore",
    name: "SITARA PS (PVT) LTD - 14",
    address:
      "FCM9+X78, Rohi Nala Rd, Kohār Phase 2 Cantt View Housing Scheme, Lahore, Pakistan",
  },
  {
    id: 6,
    city: "Faisalabad",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICES (PRIVATE)",
    address: "93GC+6MW Faisalabad, Pakistan",
  },
  {
    id: 7,
    city: "Renala Khurd",
    region: "Sahiwal",
    name: "SITARA RENALA PETROLEUM SERVICE",
    address: "VJF4+PWF Renala Khurd, Pakistan",
  },
  {
    id: 8,
    city: "Sumandari",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICES (PVT) LTD",
    address: "3XXC+5XR Chak 465 GB Nabipur, Pakistan",
  },
  {
    id: 9,
    city: "Mailsi",
    region: "Sahiwal",
    name: "SITARA 5",
    address: "W8F9+CRQ Soro Mor, Pakistan",
  },
  {
    id: 10,
    city: "Fort Abbas",
    region: "Sahiwal",
    name: "SITARA PETROLEUM SERVICES (PRIVATE)",
    address: "6V35+22X Fort Abbas, Pakistan",
  },
  {
    id: 11,
    city: "Chishtian",
    region: "Sahiwal",
    name: "SITARA PETROLEUM SERVICES (PRIVATE)",
    address: "RV43+C2X Chishtian, Pakistan",
  },
  {
    id: 12,
    city: "Ferozwala",
    region: "Lahore",
    name: "SITARA DILDAR 4",
    address: "H6XF+F8M Lahore, Pakistan",
  },
  {
    id: 13,
    city: "Multan",
    region: "Multan",
    name: "SITARA PETROLEUM SERVICE LIMITED",
    address: "6F2C+38F Multan, Pakistan",
  },
  {
    id: 14,
    city: "Faisalabad",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICES (PRIVATE)",
    address: "F46G+5M4 Faisalabad, Pakistan",
  },
  {
    id: 15,
    city: "Mianwali",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICES (PVT) LTD",
    address: "CM3G+4RH Wan Bhachran, Pakistan",
  },
  {
    id: 16,
    city: "Vehari",
    region: "Sahiwal",
    name: "GASOLINE TECH (PRIVATED) LIMITED",
    address: "38J9+JQJ Chak 24 WB, Pakistan",
  },
  {
    id: 17,
    city: "Faisalabad",
    region: "Faisalabad",
    name: "SITARA DILDAR FUELS PVT LIMITED",
    address: "C366+FXC Faisalabad, Pakistan",
  },
  {
    id: 18,
    city: "Faisalabad",
    region: "Faisalabad",
    name: "SITARA DILDAR 3",
    address: "C42R+RX5 Faisalabad, Pakistan",
  },
  {
    id: 19,
    city: "MULTAN",
    region: "Multan",
    name: "SITARA MULTAN PETROLEUM",
    address: "4CHP+888 Multan, Pakistan",
  },
  {
    id: 20,
    city: "Bahawalnagar",
    region: "Sahiwal",
    name: "NOOR PETROLEUM SERVICE",
    address: "2735+5X2 Bahawalnagar, Pakistan",
  },
  {
    id: 21,
    city: "Lahore",
    region: "Lahore",
    name: "SITARA PETROLEUM SERVICE (PVT)LIMITED",
    address: "C5PP+HQ5 Lahore, Pakistan",
  },
  {
    id: 22,
    city: "Lahore",
    region: "Lahore",
    name: "COCO LAHORE 10",
    address: "G8X7+P5V Lahore, Pakistan",
  },
  {
    id: 23,
    city: "Faisalabad",
    region: "Faisalabad",
    name: "SITARA DILDAR 2",
    address: "C4H8+5J2 Faisalabad, Pakistan",
  },
  {
    id: 24,
    city: "Lahore",
    region: "Lahore",
    name: "SITARA PETROLEUM SERVICE-28",
    address: "C7VW+F2W Lahore, Pakistan",
  },
  {
    id: 25,
    city: "Fort Abbas",
    region: "Sahiwal",
    name: "SITARA PETROLEUM SERVICES - 30",
    address: "6HV4+P56 Chak 305/HR, Pakistan",
  },
  {
    id: 26,
    city: "Faisalabad",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICE (PVT) LTD -",
    address: "93WG+583 Faisalabad, Pakistan",
  },
  {
    id: 27,
    city: "Sahiwal",
    region: "Sahiwal",
    name: "COCO QADIRABAD",
    address: "P62J+6Q6, Pakistan",
  },
  {
    id: 28,
    city: "Lahore",
    region: "Lahore",
    name: "COCO LAHORE 12",
    address: "HFVJ+V45 Lahore, Pakistan",
  },
  {
    id: 29,
    city: "Minchinabad",
    region: "Sahiwal",
    name: "WATTO PETROLEUM SERVICE",
    address: "7RM7+HR3 Haddiwala, Pakistan",
  },
  {
    id: 30,
    city: "Saddar",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICE (PVT) LTD",
    address: "72C8+GGG Chak 255 RB, Pakistan",
  },
  {
    id: 31,
    city: "Chiniot",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICES (PVT) LTD",
    address: "PX4C+457, Chiniot, Pakistan",
  },
  {
    id: 32,
    city: "Sahiwal",
    region: "Sahiwal",
    name: "SITARA PETROLEUM PVT. LTD.",
    address: "M3MQ+MXH Sahiwal, Pakistan",
  },
  {
    id: 33,
    city: "Saddar",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICE (PVT) LTD - 32",
    address: "949P+FQ2 Faisalabad, Pakistan",
  },
  {
    id: 34,
    city: "Chiniot",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICE (PVT) LTD -",
    address: "PXQF+59P Chiniot, Pakistan",
  },
  {
    id: 35,
    city: "Chak Jhumra",
    region: "Faisalabad",
    name: "SITARA PETROLEUM SERVICES (PVT) LTD -",
    address: "M78H+PMR Salarwala, Pakistan",
  },
  {
    id: 36,
    city: "Lahore",
    region: "Lahore",
    name: "NOOR PETROLEUM SERVICE",
    address: "F8F4+GF2 Lahore, Pakistan",
  },
  {
    id: 37,
    city: "Pakpattan",
    region: "Sahiwal",
    name: "SITARA PETROLEUM SERVICE (PVT) LIMITED",
    address: "FGP5+7X3 Bunga Hayat, Pakistan",
  },
  {
    id: 38,
    city: "Okara",
    region: "Sahiwal",
    name: "SITARA PETROLEUM SERVICE",
    address: "X838+F5W Bangla Gogera, Pakistan",
  },
  {
    id: 39,
    city: "Sheikhupura",
    region: "Lahore",
    name: "COCO KALA SHAH KAKU",
    address: "P74C+VQG Kala Shah Kaku, Pakistan",
  },
  {
    id: 40,
    city: "Pattoki",
    region: "Sahiwal",
    name: "SITARA HABIBABAD",
    address: "WPVH+MCV Umarabad, Pakistan",
  },
  {
    id: 41,
    city: "HAROONABAD",
    region: "Sahiwal",
    name: "ITTEFAQ PETROLEUM SERVICE",
    address: "HRRX+J2V Dahranwala, Pakistan",
  },
];

// ==========================
// City Coordinates
// ==========================
const cityCoordinates = {
  arifwala: [30.295, 73.0667],
  faisalabad: [31.4504, 73.135],
  lahore: [31.5204, 74.3587],
  muridke: [31.802, 74.2615],
  renalakhurd: [30.8798, 73.596],
  sumandari: [31.068, 73.055],
  mailsi: [29.801, 72.178],
  fortabbas: [29.1831, 72.8553],
  chishtian: [29.795, 72.858],
  ferozwala: [31.627, 74.317],
  multan: [30.1575, 71.5249],
  mianwali: [32.5834, 71.5333],
  vehari: [30.045, 72.356],
  bahawalnagar: [29.9983, 73.2531],
  okara: [30.8103, 73.4593],
  sahiwal: [30.6706, 73.1064],
  minchinabad: [30.166, 73.566],
  saddar: [31.4504, 73.135],
  chiniot: [31.7167, 72.9833],
  chakjhumra: [31.568, 73.183],
  pakpattan: [30.341, 73.386],
  pattoki: [31.02, 73.85],
  sheikhupura: [31.7167, 73.985],
  haroonabad: [29.62, 73.13],
};

// ==========================
// Color Scale
// ==========================
const getColor = (count) => {
  return count > 15
    ? "#800026"
    : count > 12
    ? "#BD0026"
    : count > 9
    ? "#E31A1C"
    : count > 6
    ? "#FC4E2A"
    : count > 3
    ? "#FD8D3C"
    : count > 1
    ? "#FEB24C"
    : "#FFEDA0";
};

// ==========================
// Legend Component
// ==========================
const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create(
        "div",
        "bg-white p-3 rounded-lg shadow-lg text-xs font-medium border border-gray-200"
      );
      const grades = [0, 2, 4, 7, 10, 13, 16];
      div.innerHTML = `<div class="font-bold mb-2 text-gray-800">Stations per Region</div>`;
      for (let i = 0; i < grades.length; i++) {
        const from = grades[i];
        const to = grades[i + 1] || "+";
        div.innerHTML += `
          <div class="flex items-center gap-2 my-1">
            <div class="w-5 h-5 rounded border border-gray-300" style="background:${getColor(
              from + 1
            )}"></div>
            <span>${from}${to !== "+" ? `&ndash;${to - 1}` : "+"}</span>
          </div>`;
      }
      return div;
    };

    legend.addTo(map);
    return () => legend.remove();
  }, [map]);

  return null;
};

// ==========================
// Custom Marker Icon
// ==========================
const createMarkerIcon = (color, isHovered) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div class="flex items-center justify-center rounded-full transition-transform duration-200 ${
        isHovered ? "scale-150" : "scale-100"
      }">
        <div class="w-5 h-5 rounded-full border-2 border-white shadow-lg" style="background:${color}"></div>
      </div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
};

// ==========================
// Main Component
// ==========================
export default function RetailNetworkMap() {
  const [hoveredCity, setHoveredCity] = useState(null);

  const [selectedStation, setSelectedStation] = useState(null);

  // Group by city
  const groupedStations = useMemo(() => {
    const grouped = {};
    allStations.forEach((s) => {
      const key = s.city.replace(/\s+/g, "").toLowerCase(); // ✅ Fixed
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(s);
    });
    return grouped;
  }, []);

  // Count per region
  const stationsByRegion = useMemo(() => {
    const counts = {};
    allStations.forEach((s) => {
      const r = s.region || "Unknown";
      counts[r] = (counts[r] || 0) + 1;
    });
    return counts;
  }, []);

  // Province style
  const provinceStyle = (feature) => {
    const name = feature?.properties?.name || feature?.properties?.NAME_1;
    const count = stationsByRegion[name] || 0;
    return {
      fillColor: getColor(count),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  return (
    <div className="w-full text-gray-800">
      {/* Hero */}
      <section
        className="relative h-[50vh] md:h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${images.RetailNetworkMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-43"></div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Retail Network
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
            Explore our nationwide network of fuel stations across Pakistan.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Title
            title="Bringing Energy Closer to You"
            subtitle="We are expanding our retail network to ensure that reliable energy
            is always accessible—whether you're commuting in the city,
            travelling between provinces, or managing transport fleets on key
            trade routes. We are dedicated to providing consistent fuel quality,
            exceptional service standards, and convenient station experiences
            for every customer, every day."
          />

          <Title
            title="Where We Serve You"
            subtitle="Explore our growing network of Sitara Petroleum fuel stations across Pakistan. From urban centres to remote highways, our stations are strategically positioned to serve daily drivers, logistics operators, and long-distance travellers."
          />

          <div className="mt-10 h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-xl relative">
            <MapContainer
              center={[30.3753, 69.3451]}
              zoom={6}
              scrollWheelZoom={true}
              className="w-full h-full"
            >
              {/* Colorful Base Map */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
              />

              {/* Country Border */}
              <GeoJSON
                data={pakistanGeoJSON}
                style={{ color: "#1d4ed8", weight: 3, fillOpacity: 0 }}
              />

              {/* Colored Provinces */}
              <GeoJSON data={provincesGeoJSON} style={provinceStyle} />

              {/* ✅ Updated: Individual Clickable Markers */}
              {allStations.map((station) => {
                const cityKey = station.city.replace(/\s+/g, "").toLowerCase();
                const coords = cityCoordinates[cityKey];

                if (!coords) {
                  console.warn("❌ Missing coordinates for:", station.city);
                  return null;
                }

                const regionColor = getColor(
                  stationsByRegion[station.region] || 0
                );

                return (
                  <Marker
                    key={station.id}
                    position={coords}
                    icon={createMarkerIcon(
                      regionColor,
                      hoveredCity === cityKey
                    )}
                    eventHandlers={{
                      mouseover: () => setHoveredCity(cityKey),
                      mouseout: () => setHoveredCity(null),
                      click: () => setSelectedStation(station), // ✅ Click to open modal
                    }}
                  >
                    {hoveredCity === cityKey && (
                      <Tooltip direction="top" offset={[0, -10]}>
                        <span className="font-semibold">{station.name}</span>
                      </Tooltip>
                    )}
                  </Marker>
                );
              })}

              {/* Legend */}
              <Legend />
            </MapContainer>

            {selectedStation && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
                <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative">
                  {/* Image */}
                  <img
                    src={images.RetailStationPlaceholder} // replace with correct station image
                    alt={selectedStation.name}
                    className="w-full h-56 object-cover"
                  />

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedStation.name}
                    </h3>
                    <p className="text-gray-600">{selectedStation.address}</p>

                    {/* Phone Placeholder */}
                    <p className="text-blue-600 font-medium">
                      📞 +92 300 0000000
                    </p>

                    {/* Google Maps Button */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        selectedStation.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition"
                    >
                      View on Maps →
                    </a>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedStation(null)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                  >
                    <X className="w-5 h-5 text-gray-800" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .leaflet-tooltip {
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
}
