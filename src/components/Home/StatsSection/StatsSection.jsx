"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";
import { motion, useAnimation } from "framer-motion";

import stats from "@/data/milestones";

const StatCard = ({ label, value, suffix, startCount }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!startCount) return;

    let startTimestamp = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value); // Ensure it lands exactly on the final value
      }
    };

    window.requestAnimationFrame(step);
  }, [startCount, value]);

  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.value}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

const StatsSection = ({ onOpenModal }) => {
  const [startCount, setStartCount] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();
  const buttonControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // console.log("section visible");
          setStartCount(true);
          setInView(true);
        }
      },
      { threshold: 0.3 }
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
    <section className={`container ${styles.statsSection}`} ref={sectionRef}>
      <h2>
        <span>Numbers That Speak</span> for Themselves
      </h2>
      <p>Proven results, growing reach, and thousands of happy customers.</p>

      <div className={styles.cardsGrid}>
        {stats.map((stat) => {
          return (
            <StatCard key={stat.label} {...stat} startCount={startCount} />
          );
        })}
      </div>

      <motion.div
        className={styles.btnContainer}
        initial={{ opacity: 0, x: 600 }}
        animate={buttonControls}
      >
        <button type="button" className={styles.ctaBtn} onClick={onOpenModal}>
          Grow With Us
        </button>
      </motion.div>
    </section>
  );
};

export default StatsSection;
