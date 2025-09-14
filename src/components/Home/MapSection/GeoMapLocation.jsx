"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import styles from "./MapSection.module.css";

// Dynamically import react-leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// const useMap = dynamic(
//   () => import("react-leaflet").then((mod) => mod.useMap),
//   { ssr: false }
// );

// import L from "leaflet";

// // Fix default marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
// });

// prettier-ignore
const cities = {
  Kolkata: { coords: [22.5726, 88.3639], msg: "Kolkata — Sector V Office" },
  Guwahati: { coords: [26.1445, 91.7362], msg: "Guwahati — Beltola Hub" },
  Bhubaneswar: { coords: [20.2961, 85.8245], msg: "Bhubaneswar — InfoCity Park" },
  Bengaluru: { coords: [12.9716, 77.5946], msg: "Bengaluru — Whitefield Center" },
  "Delhi NCR": { coords: [28.6139, 77.209], msg: "Delhi NCR — Connaught Place" },
  Hyderabad: { coords: [17.385, 78.4867], msg: "Hyderabad — Hitech City" },
  Mumbai: { coords: [19.076, 72.8777], msg: "Mumbai — Andheri East" },
  Pune: { coords: [18.5204, 73.8567], msg: "Pune — Hinjewadi" },
  Chennai: { coords: [13.0827, 80.2707], msg: "Chennai — T. Nagar" },
  Ranchi: { coords: [23.3441, 85.3096], msg: "Ranchi — Main Road" },
};

function FlyToCity({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position && map) {
      map.flyTo(position, 12, { duration: 1.5 }); // zoomed closer
    }
  }, [position, map]);

  return null;
}

const GeoMapLocation = () => {
  //   const [map, setMap] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [toastMsg, setToastMsg] = useState("We are in 10+ cities");

  useEffect(() => {
    // Only run client-side
    if (typeof window !== "undefined") {
      (async () => {
        const L = (await import("leaflet")).default;
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });
      })();
    }
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setToastMsg(cities[city].msg);

    // if (map) {
    //   map.flyTo(cities[city].coords, 12, { duration: 1.5 });
    // }

    setTimeout(() => setToastMsg("We are in 10+ cities"), 8000);
  };

  return (
    <section className={styles.presence}>
      <div className="container">
        <h2>Our Presence</h2>
        <p>Delivering across the length and breadth of India</p>

        <div style={{ display: "flex", height: "70vh" }}>
          {/* Sidebar */}
          <div style={{ width: 220, background: "#f8f9fa", padding: 12 }}>
            {Object.keys(cities).map((city) => (
              <button
                key={city}
                className={`btn mb-2 w-100 ${
                  selectedCity === city ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => handleCityClick(city)}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Map */}
          <div style={{ flex: 1, position: "relative" }}>
            <MapContainer
              center={[22.5726, 88.3639]}
              zoom={5}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />

              {Object.entries(cities).map(([city, data]) => (
                <Marker key={city} position={data.coords}>
                  {selectedCity === city && (
                    <Popup>
                      <b>{city}</b>
                      <br />
                      {data.msg}
                    </Popup>
                  )}
                </Marker>
              ))}

              {selectedCity && (
                <FlyToCity position={cities[selectedCity].coords} />
              )}
            </MapContainer>

            {/* Toast */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                zIndex: 10,
                width: "220px",
                height: "50px",
              }}
              className="toast show"
              role="alert"
            >
              <div className="toast-body text-center">{toastMsg}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoMapLocation;
