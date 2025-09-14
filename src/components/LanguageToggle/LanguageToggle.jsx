import React from "react";

const LanguageToggle = ({ currentLang, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="lang">Change Language: </label>
      <select
        id="lang"
        value={currentLang}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        {/* Add more as needed */}
      </select>
    </div>
  );
};

export default LanguageToggle;
