import React, { useState } from "react";
import indiaMap from "./other images/india_map.svg"; // if it's an inline SVG as ReactComponent
import "./TestMap.css"; // For styling highlights

const TestMap = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (cityId) => {
    setSelectedCity(cityId);
  };

  return (
    <div className="map-test-container">
      <div className="city-buttons">
        <button onClick={() => handleCityClick("kolkata")}>Kolkata</button>
        <button onClick={() => handleCityClick("mumbai")}>Mumbai</button>
        {/* Add more buttons as needed */}
      </div>
      <div className="map-container">
        <svg
          viewBox="0 0 1000 1000"
          className="india-map"
          dangerouslySetInnerHTML={{ __html: indiaMap }}
        />
        <style jsx>{`
          .highlight {
            fill: red !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestMap;
