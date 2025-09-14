import React from "react";
import styles from "./HomeTestimonials.module.css";
import Image from "next/image";

import { homeTestimonials } from "@/data/testimonials";

const HomeTestimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.heading}>
          What Our <span>Partners Say</span>
        </h2>
        <p className={styles.subHeading}>
          Real experiences from businesses achieving more with Frontend
          Logistics.
        </p>
        <div className={styles.grid}>
          {homeTestimonials.map((testimony, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={testimony.img}
                alt={testimony.name}
                width={60}
                height={60}
                className={styles.avatar}
              />
              <p className={styles.text}>"{testimony.text}"</p>
              <p className={styles.name}>{testimony.name}</p>
              <span className={styles.role}>{testimony.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
