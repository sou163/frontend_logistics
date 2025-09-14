import React from "react";
import styles from "./Careers.module.css";
import { CareerTestimonials, JobOpeningsSection } from "@/components";

const CareersPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Discover The Job at Frontend Logistics</h1>
          <p>We are hiring! Apply now and let's make some magic happen.</p>
        </div>
      </section>
      <CareerTestimonials />
      <JobOpeningsSection />
    </>
  );
};

export default CareersPage;
