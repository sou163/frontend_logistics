"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "./ServicesSection.module.css";

import servicesCards from "@/data/services";

const ServicesSection = ({ onOpenModal }) => {
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
    <section className={styles.services} ref={sectionRef} id="services">
      <div className="container">
        <h2>
          Anything You Need, <span>We're Here to Help</span>
        </h2>
        <p>
          From startups to enterprises — delivery, fulfillment, and more, all in
          one place.
        </p>

        <div className={styles.serviceGrid}>
          {servicesCards.map((card, index) => (
            <div className={styles.serviceCard} key={index}>
              <div className={styles.serviceImage}>
                <Image
                  src={card.img}
                  alt={card.service}
                  width={400}
                  height={700}
                />
              </div>

              <div className={styles.serviceText}>
                <h3>{card.service}</h3>
                <p>{card.tagline}</p>
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

export default ServicesSection;
