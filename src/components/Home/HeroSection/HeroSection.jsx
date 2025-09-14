"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = ({ onOpenModal }) => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Delivering Excellence</h1>
          <h2 className={styles.heroSubtitle}>
            Your Go-To Partner for Hyperlocal Last-Mile Delivery
          </h2>
        </div>

        <div className={styles.heroButtons}>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={onOpenModal}
          >
            Request Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
