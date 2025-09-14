"use client";

import React, { useState } from "react";
import styles from "./RiderSignupForm.module.css";
import { LanguageToggle } from "@/components";

const labels = {
  en: {
    name: "Name",
    city: "City",
    vehicle: "Vehicle Type",
    hours: "Working Hours",
    submit: "Submit",
  },
  hi: {
    name: "नाम",
    city: "शहर",
    vehicle: "वाहन प्रकार",
    hours: "काम के घंटे",
    submit: "जमा करें",
  },
};

const RiderSignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    vehicle: "",
    hours: "",
  });
  const [lang, setLang] = useState("en");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rider Form Data:", formData);
  };

  const t = labels[lang];

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <LanguageToggle currentLang={lang} onChange={setLang} />

        <label>{t.name}</label>
        <input type="text" name="name" required onChange={handleChange} />

        <label>{t.city}</label>
        <input type="text" name="city" required onChange={handleChange} />

        <label>{t.vehicle}</label>
        <select name="vehicle" required onChange={handleChange}>
          <option value="">Select</option>
          <option value="bike">Bike</option>
          <option value="scooter">Scooter</option>
          <option value="auto">Auto</option>
        </select>

        <label>{t.hours}</label>
        <select name="hours" required onChange={handleChange}>
          <option value="">Select</option>
          <option value="part">Part Time</option>
          <option value="full">Full Time</option>
        </select>

        <button type="submit">{t.submit}</button>
      </form>
    </div>
  );
};

export default RiderSignupForm;
