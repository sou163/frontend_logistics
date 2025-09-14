"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import steps from "@/data/workingSteps";
import styles from "./WorkingSection.module.css";

const WorkingSection = ({ onOpenModal }) => {
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
    <section className={styles.working} ref={sectionRef}>
      <div className="container">
        <h2>
          Hyperlocal Delivery, <span>Made Easy</span>
        </h2>
        <p>
          Map your zones, integrate your store, and start brand-controlled
          deliveries with ease.
        </p>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <img src={step.icon} alt={step.title} className={styles.icon} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <motion.div
          className={styles.btnContainer}
          initial={{ opacity: 0, x: 600 }}
          animate={buttonControls}
        >
          <button type="button" className={styles.ctaBtn} onClick={onOpenModal}>
            Connect With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingSection;
