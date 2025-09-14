import Image from "next/image";
import React from "react";
import styles from "./ContactUsSection.module.css";

const ContactUsSection = () => {
  return (
    <section className={`container ${styles.contact}`} id="contact">
      <h2>Ready to Deliver Excellence?</h2>
      <p className={styles.contactDescription}>
        Take your logistics to the next level with Frontend Logistics. Contact
        us today to get started!
      </p>
      <div className={styles.contactContent}>
        <div className={styles.contactVisual}>
          <img src="/other images/contact-us.jpg" alt="Contact Team Image" />
        </div>
        <div className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label>
              Name <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Name" required />
          </div>
          <div className={styles.formGroup}>
            <label>
              Company Name <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Company Name" required />
          </div>
          <div className={styles.formGroup}>
            <label>
              Email <span className={styles.required}>*</span>
            </label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className={styles.formGroup}>
            <label>
              Location <span className={styles.required}>*</span>
            </label>
            <input type="text" placeholder="Location" required />
          </div>
          <div className={styles.formGroup}>
            <label>
              Purpose <span className={styles.required}>*</span>
            </label>
            <textarea
              placeholder="Tell us about your purpose"
              required
            ></textarea>
          </div>
          <button className={styles.submitBtn}>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
