import React, { useState, useEffect } from "react";

export default function AdminPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("translationsData");
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      fetch("/translations.json")
        .then((res) => res.json())
        .then((json) => setData(json));
    }
  }, []);

  const handleChange = (lang, key, value) => {
    setData((prev) => {
      const updated = { ...prev };
      updated.translations[lang][key] = value;
      return updated;
    });
  };

  const saveData = () => {
    localStorage.setItem("translationsData", JSON.stringify(data));
    alert("Translations saved!");
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Admin - Edit Translations</h2>
      {Object.keys(data.translations).map((lang) => (
        <div key={lang}>
          <h3>{lang}</h3>
          {Object.keys(data.translations[lang]).map((key) => (
            <div key={key}>
              <label>{key}: </label>
              <input
                value={data.translations[lang][key]}
                onChange={(e) => handleChange(lang, key, e.target.value)}
              />
            </div>
          ))}
        </div>
      ))}
      <button onClick={saveData}>Save</button>
    </div>
  );
}
