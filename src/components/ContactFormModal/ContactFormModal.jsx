"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ContactFormModal.module.css";

const ContactFormModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target))
        onClose();
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());

    console.log("Form submitted: ", values);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.heading}>Let's Connect</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name *</label>
            <input
              name="name"
              type="text"
              required
              className={styles.inputBox}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Company Name *</label>
            <input
              name="company"
              type="text"
              required
              className={styles.inputBox}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email *</label>
            <input
              name="email"
              type="email"
              required
              className={styles.inputBox}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Location *</label>
            <input
              name="location"
              type="text"
              required
              className={styles.inputBox}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Purpose *</label>
            <textarea
              name="purpose"
              required
              className={styles.inputBox}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
