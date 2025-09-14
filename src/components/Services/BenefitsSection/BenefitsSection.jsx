"use client";

import React from "react";
import benefits from "@/data/benefits";
import styles from "./BenefitsSection.module.css";

const BenefitsSection = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        {/* Heading */}
        <h2 className={styles.heading}>
          Why Brands <span>Choose Frontend</span>
        </h2>
        <p className={styles.subheading}>
          Check out the core benefits that keep your brand ahead
        </p>

        {/* Grid */}
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <img
                src={benefit.icon}
                alt={benefit.title}
                className={styles.icon}
              />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
