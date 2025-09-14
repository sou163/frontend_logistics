import React from "react";
import styles from "./AchievementsSection.module.css";
import Image from "next/image";

import achievements from "@/data/awards";

const AchievementsSection = () => {
  return (
    <section className={styles.achievementsSection}>
      <div className="container">
        <h2 className={styles.heading}>
          A Journey of <span>Growth & Recognition</span>
        </h2>
        <p className={styles.subHeading}>
          From incubations to industry awards — every milestone reflects our
          commitment to excellence.
        </p>
        <div className={styles.grid}>
          {achievements.map((award, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={award.img}
                alt={award.title}
                width={0}
                height={0}
                className={styles.image}
              />
              <p className={styles.title}>{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
