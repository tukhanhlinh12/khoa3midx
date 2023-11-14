import React from "react";
const Footer = ({ selectedLanguage, handleLanguageChange }) => {
  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>
        <span
          className={`language-picker ${selectedLanguage === "vn" ? "selected" : ""}`}
          onClick={() => handleLanguageChange("vn")}
        >
          🇻🇳
        </span>
        <span
          className={`language-picker ${selectedLanguage === "en" ? "selected" : ""}`}
          onClick={() => handleLanguageChange("en")}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
