"use client";

import React, { useState } from "react";
import styles from "./ApplicationForm.module.css";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: null,
    resume: null,
  });

  // const [submitting, setSubmitting] = useState(false);
  // const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSubmitting(true);

    console.log("Application submitted: ", formData);
  };

  return (
    <div className={styles.applicationForm}>
      <h3>Apply For this Job</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="coverLetter">Cover Letter *</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            required
            placeholder="Tell us why you're interested in this position..."
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="resume">Upload CV/Resume *</label>
          <div className={styles.fileUpload}>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
            <label htmlFor="resume" className={styles.fileUploadLabel}>
              {formData.resume
                ? formData.resume.name.length > 30
                  ? formData.resume.name.substring(0, 30) + "..."
                  : formData.resume.name
                : "Choose file (PDF, DOC, DOCX)"}
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Apply for this position
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
