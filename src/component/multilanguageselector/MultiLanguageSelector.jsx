import React, { useState } from "react";

const languages = [
  "English",
  "Hindi",
  "Bengali",
  "Bhojpuri",
  "Telugu",
  "Marathi",
  "Tamil",
  "Urdu",
  "Gujarati",
  "Malayalam",
  "Kannada",
  "Odia",
  "Punjabi",
  "Haryanvi",
  "Assamese",
  "Maithili",
  "Santali",
  "Kashmiri",
  "Nepali",
  "Konkani",
  "Sindhi",
  "Dogri",
  "Bodo",
  "Manipuri",
  "Sanskrit",
];

const MultiLanguageSelector = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  return (
    <div>
      <div>
        <select className="border border-gray-300 rounded-lg">
          {languages.map((language) => (
            <option>{language}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MultiLanguageSelector;
