"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./AboutUsSection.module.css";
import { motion, useAnimation } from "framer-motion";

const AboutUsSection = ({ onOpenModal }) => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const textControls = useAnimation();
  const imageControls = useAnimation();
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
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      imageControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      buttonControls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.6, duration: 1, ease: "easeOut" },
      });
    }
  }, [inView, textControls, imageControls, buttonControls]);

  return (
    <section
      className={`container ${styles.about}`}
      id="about"
      ref={sectionRef}
    >
      <div className={styles.aboutContent}>
        <motion.div
          className={styles.aboutRight}
          initial={{ opacity: 0, y: 100 }}
          animate={textControls}
        >
          <div className={styles.aboutText}>
            <h2>About Us</h2>
            <p>
              We are a technology-driven logistics platform solving last-mile
              delivery challenges across India. With our innovative solutions
              and extensive network, we connect businesses with their customers
              seamlessly.
            </p>
            <p>
              Our mission is to revolutionize the logistics industry by
              providing reliable, fast, and cost-effective delivery solutions
              that empower businesses to grow and succeed.
            </p>
          </div>

          <motion.div
            className={styles.btnContainer}
            initial={{ opacity: 0, x: -100 }}
            animate={buttonControls}
          >
            <button
              type="button"
              className={styles.ctaBtn}
              onClick={onOpenModal}
            >
              Partner With Us
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.aboutVisual}
          initial={{ opacity: 0, x: 100 }}
          animate={imageControls}
        >
          <img src="/images/home/logistics.png" alt="Logistics Network" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
