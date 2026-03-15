import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedFlag = (country) => {
    const exists = visitedFlag.find((c) => c.cca3 === country.cca3);
    if (exists) {
      const newVisitedFlag = visitedFlag.filter((c) => c.cca3 !== country.cca3);
      setVisitedFlag(newVisitedFlag);
    } else {
      const newVisitedFlag = [...visitedFlag, country];
      setVisitedFlag(newVisitedFlag);
    }
  };

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    const exists = visitedCountries.find((c) => c.cca3 === country.cca3);
    if (exists) {
      const newVisitedCountries = visitedCountries.filter(
        (c) => c.cca3 !== country.cca3,
      );
      setVisitedCountries(newVisitedCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <h2>Total Countries Visited: {visitedCountries.length}</h2>
      <ol>
        {visitedCountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ol>
      <h2>Total Flags Visited: {visitedFlag.length}</h2>
      <ol>
        {visitedFlag.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
