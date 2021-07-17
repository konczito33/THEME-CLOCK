import axios from 'axios';
import { useContext, useEffect } from 'react';
import { CountriesContext } from 'components/providers/CountriesProvider';
const UseFetch = (link, query, error) => {
  const { setError, setCountries } = useContext(CountriesContext);
  useEffect(() => {
    axios
      .get(`${link}${query}`)
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((err) => setError(error));
  }, []);
};

export default UseFetch;
