"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./PartnersSection.module.css";
import { motion, useAnimation } from "framer-motion";

import partners from "@/data/partners";

const PartnersSection = ({ onOpenModal }) => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const buttonControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      buttonControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.6, duration: 1, ease: "easeOut" },
      });
    }
  }, [inView, buttonControls]);

  return (
    <section
      className={`container ${styles.partners}`}
      id="partners"
      ref={sectionRef}
    >
      <div className={styles.partnersHeader}>
        <h2>
          Trusted by <span>Industry Leaders</span>
        </h2>
        <p>
          From global giants to local champions — we power logistics for brands
          that millions trust.
        </p>
      </div>

      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => (
          <div
            key={index}
            className={styles.logoWrapper}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className={styles.partnerLogo}
            />
          </div>
        ))}
      </div>

      <motion.div
        className={styles.btnContainer}
        initial={{ opacity: 0, x: 600 }}
        animate={buttonControls}
      >
        <button type="button" className={styles.ctaBtn} onClick={onOpenModal}>
          Get Onboard
        </button>
      </motion.div>
    </section>
  );
};

export default PartnersSection;
