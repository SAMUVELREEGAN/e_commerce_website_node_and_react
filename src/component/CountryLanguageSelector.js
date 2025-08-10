import React, { useState, useEffect } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import i18n from "../i18n";

export default function CountryLanguageSelector() {
  const [data, setData] = useState({ countries: [], translations: {} });
  const [countryOptions, setCountryOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Load data from localStorage or fetch from file
    const localData = localStorage.getItem("translationsData");
    if (localData) {
      const parsed = JSON.parse(localData);
      setData(parsed);
      setCountryOptions(buildCountryOptions(parsed));
    } else {
      fetch("/translations.json")
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem("translationsData", JSON.stringify(json));
          setData(json);
          setCountryOptions(buildCountryOptions(json));
        });
    }
  }, []);

  const buildCountryOptions = (jsonData) => {
    return jsonData.countries.map((country) => ({
      value: country.code,
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ReactCountryFlag
            countryCode={country.code}
            svg
            style={{ fontSize: "1.5em" }}
          />
          {country.name}
        </span>
      )
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
    const country = data.countries.find((c) => c.code === selectedOption.value);

    if (!country) return;

    // Always include English in the list
    let allLangs = [...country.languages];
    if (!allLangs.some((lang) => lang.code === "en")) {
      allLangs.push({ code: "en", label: "English" });
    }

    // Put English at the top
    allLangs = allLangs.sort((a, b) =>
      a.code === "en" ? -1 : b.code === "en" ? 1 : 0
    );

    setLanguageOptions(
      allLangs.map((lang) => ({
        value: lang.code,
        label: lang.label
      }))
    );
  };

  const handleLanguageChange = (selectedOption) => {
    const langCode = selectedOption.value;
    const storedData = JSON.parse(localStorage.getItem("translationsData"));

    if (storedData?.translations?.[langCode]) {
      i18n.addResourceBundle(
        langCode,
        "translation",
        storedData.translations[langCode],
        true,
        true
      );
      i18n.changeLanguage(langCode);
    } else {
      console.warn(`No translations found for ${langCode}`);
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Select
        options={countryOptions}
        onChange={handleCountryChange}
        placeholder="Select country"
      />
      <Select
        options={languageOptions}
        onChange={handleLanguageChange}
        placeholder="Select language"
        isDisabled={!selectedCountry}
      />
    </div>
  );
}
