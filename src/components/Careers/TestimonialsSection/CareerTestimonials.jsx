import React from "react";
import styles from "./CareerTestimonials.module.css";

import { careerTestimonials } from "@/data/testimonials";

const CareerTestimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>
          Voices of <span>Our Team</span>
        </h2>
        <p>
          Real stories from the people who make Frontend Logistics an incredible
          place to work.
        </p>
        <div className={styles.testimonialsGrid}>
          {careerTestimonials.map((testimonial, index) => (
            <div className={styles.testimonialCard} key={index}>
              <div className={styles.testimonialAvatar}>
                {testimonial.avatar}
              </div>
              <div className={styles.testimonialText}>
                {testimonial.testimony}
              </div>
              <div className={styles.testimonialAuthor}>{testimonial.name}</div>
              <div className={styles.testimonialRole}>{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTestimonials;
