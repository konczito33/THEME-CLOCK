import axios from 'axios';
import { CountriesContext } from 'components/providers/CountriesProvider';
import { useContext } from 'react';
const OptionsItem = ({ region, selectHandler }) => {
  const { setCountries, setError } = useContext(CountriesContext);
  return (
    <li onClick={selectHandler}>
      <button
        onClick={(e) => {
          if (e.target.innerText === 'All') {
            axios
              .get(`https://restcountries.eu/rest/v2/all`)
              .then(({ data }) => {
                setCountries(data);
              })
              .catch((err) => setError(`We can't find any countries`));
          }
          axios
            .get(
              `https://restcountries.eu/rest/v2/region/${e.target.innerText}`,
            )
            .then(({ data }) => {
              setCountries(data);
            })
            .catch((err) => setError(`We can't find any countries`));
        }}
      >
        {region}
      </button>
    </li>
  );
};

export default OptionsItem;
