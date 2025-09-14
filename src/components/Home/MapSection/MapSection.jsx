"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./MapSection.module.css";
// import IndiaMapSvg from "@/assets/india_map_2.svg";

import cities from "@/data/cities";

const MapSection = ({ onOpenModal }) => {
  const [activeState, setactiveState] = useState(null);

  const handleStateClick = (id) => {
    setactiveState(id);
  };

  const activeCity = cities.find((city) => city.id === activeState);

  return (
    <section className={styles.presence}>
      <div className="container">
        <h2>Delivering Across India</h2>
        <p>
          From metros to emerging cities — Frontend ensures seamless logistics
          everywhere.
        </p>

        <div className={styles.presenceContent}>
          <div className={styles.cityGrid}>
            {cities.map((city, index) => (
              <div
                className={`${styles.cityCard} ${
                  activeState === city.id ? styles.active : ""
                }`}
                key={index}
                onClick={() => handleStateClick(city.id)}
              >
                {city.name}
              </div>
            ))}
          </div>

          <div className={styles.cityVisual}>
            {activeCity ? (
              <div className={styles.imageWrapper}>
                <Image
                  src={activeCity.img}
                  alt={activeCity.alt}
                  fill
                  className={styles.cityImage}
                />
              </div>
            ) : (
              <p className={styles.placeholder}>Select a city to View</p>
            )}
          </div>

          {/* <div className={styles.mapVisual}>
            <div className={styles.indiaMap}>
              <IndiaMapSvg />
            </div>
            <style jsx>{`
              #${activeState} {
                fill: red !important;
                stroke: black;
                stroke-width: 2;
              }
            `}</style>
          </div> */}
        </div>

        <div className={styles.btnContainer}>
          <button type="button" className={styles.ctaBtn} onClick={onOpenModal}>
            Expand With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
