import React, { useState, useEffect } from "react";
import Select from "react-select";
import i18n from "../i18n";
import ReactCountryFlag from "react-country-flag";

export default function CountryLanguageSelector() {
  const [data, setData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [languageOptions, setLanguageOptions] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("translationsData");
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      fetch("/translations.json")
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem("translationsData", JSON.stringify(json));
          setData(json);
        });
    }
  }, []);

  const countryOptions = data
    ? data.countries.map((country) => ({
        value: country.code,
        label: (
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ReactCountryFlag countryCode={country.code} svg style={{ fontSize: "1.5em" }} />
            {country.name}
          </span>
        )
      }))
    : [];

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
    const country = data.countries.find((c) => c.code === selectedOption.value);
    setLanguageOptions(
      country.languages.map((lang) => ({
        value: lang.code,
        label: lang.label
      }))
    );
  };

  const handleLanguageChange = (selectedOption) => {
    const langCode = selectedOption.value;
    const storedData = JSON.parse(localStorage.getItem("translationsData"));

    if (storedData?.translations?.[langCode]) {
      i18n.addResourceBundle(langCode, "translation", storedData.translations[langCode], true, true);
      i18n.changeLanguage(langCode);
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Select
        options={countryOptions}
        onChange={handleCountryChange}
        placeholder="Select Country"
      />
      <Select
        options={languageOptions}
        onChange={handleLanguageChange}
        placeholder="Select Language"
        isDisabled={!selectedCountry}
      />
    </div>
  );
}
