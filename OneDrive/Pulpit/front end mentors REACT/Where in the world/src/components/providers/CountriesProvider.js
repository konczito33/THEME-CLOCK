import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
export const CountriesContext = React.createContext({
  countries: [],
  error: '',
});

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  return (
    <CountriesContext.Provider
      value={{ countries, setCountries, error, setError }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesProvider;
