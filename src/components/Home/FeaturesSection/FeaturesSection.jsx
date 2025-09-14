"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

import featureCards from "@/data/features";

const FeaturesSection = ({ onOpenModal }) => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
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
    <section className={styles.features} ref={sectionRef}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2>
            Why Businesses <span>Choose Frontend Logistics</span>
          </h2>
          <p>
            Smart, scalable, and reliable logistics built for modern businesses.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {featureCards.map((card, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.featureImage}>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className={styles.featureText}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className={styles.btnContainer}
          initial={{ opacity: 0, x: -600 }}
          animate={buttonControls}
        >
          <button type="button" className={styles.ctaBtn} onClick={onOpenModal}>
            Reach Us At
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
