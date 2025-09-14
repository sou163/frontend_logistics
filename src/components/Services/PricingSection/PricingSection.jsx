"use client";

import React from "react";

import plans from "@/data/pricing";
import styles from "./PricingSection.module.css";

const TickIcon = () => (
  <svg
    width="16"
    height="16"
    fill="green"
    viewBox="0 0 16 16"
    style={{ marginRight: "8px" }}
  >
    <path d="M6.003 10.803L3.2 8l-1.4 1.4 4.203 4.203 8-8-1.4-1.4-6.6 6.6z" />
  </svg>
);

const PricingSection = ({ onOpenModal }) => {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <h2>
          Our <span>Pricing Plans</span>
        </h2>
        <p>Choose the plan that scales with your growth.</p>

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.planRow} ${
              index % 2 === 1 ? styles.reverse : ""
            }`}
          >
            {/* Text */}
            <div className={styles.planText}>
              <h3 className={styles.planTitle}>
                {plan.popular && (
                  <span className={styles.ribbon}>Most Popular</span>
                )}
                {plan.name}
                {plan.tag && <span className={styles.tag}>({plan.tag})</span>}
              </h3>

              <div className={styles.price}>{plan.price}</div>

              <ul>
                <li>
                  <TickIcon /> {plan.deliveries}
                </li>
                <li>
                  <TickIcon /> {plan.distance}
                </li>
                <li>
                  <TickIcon /> {plan.weight}
                </li>
                <li>
                  <TickIcon /> {plan.extra}
                </li>
              </ul>

              <button className={styles.ctaBtn} onClick={onOpenModal}>
                {plan.popular ? "Get Started" : "Choose Plan"}
              </button>
            </div>

            {/* Image */}
            <div className={styles.planImage}>
              <img src={plan.img} alt={plan.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
