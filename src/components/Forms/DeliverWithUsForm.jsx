"use client";

import React, { useState } from "react";
import styles from "./DeliverWithUsForm.module.css";
import { LanguageToggle } from "@/components";

const labels = {
  en: {
    companyName: "Company Name",
    type: "Company Type",
    volume: "Daily Order Volume",
    locations: "Company Locations",
    submit: "Submit",
  },
  hi: {
    companyName: "कंपनी का नाम",
    type: "कंपनी का प्रकार",
    volume: "दैनिक ऑर्डर मात्रा",
    locations: "कंपनी के स्थान",
    submit: "जमा करें",
  },
};

const PartnerWithUsForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    type: "",
    volume: "",
    locations: "",
  });
  const [lang, setLang] = useState("en");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner Form Data:", formData);
  };

  const t = labels[lang];

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <LanguageToggle currentLang={lang} onChange={setLang} />

      <label>{t.companyName}</label>
      <input type="text" name="companyName" required onChange={handleChange} />

      <label>{t.type}</label>
      <select name="type" required onChange={handleChange}>
        <option value="">Select</option>
        <option value="retail">Retail</option>
        <option value="ecommerce">E-commerce</option>
        <option value="other">Other</option>
      </select>

      <label>{t.volume}</label>
      <select name="volume" required onChange={handleChange}>
        <option value="">Select</option>
        <option value="0-50">0-50</option>
        <option value="50-200">50-200</option>
        <option value="200+">200+</option>
      </select>

      <label>{t.locations}</label>
      <textarea
        name="locations"
        rows="3"
        required
        onChange={handleChange}
      ></textarea>

      <button type="submit">{t.submit}</button>
    </form>
  );
};

export default PartnerWithUsForm;
