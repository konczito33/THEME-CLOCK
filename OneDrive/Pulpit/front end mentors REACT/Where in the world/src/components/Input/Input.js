import { StyledInput } from './Input.styles';
import { StyledInputWrapper } from './Input.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CountriesContext } from 'components/providers/CountriesProvider';
import { useContext, useState } from 'react';
import axios from 'axios';
import InputList from 'components/InputList/InputList';
const Input = () => {
  const { setCountries, setError, countries } = useContext(CountriesContext);
  const [foundCountries, setFoundCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputHandler = (e) => {
    let keyword = e.target.value;
    setInputValue(keyword);
    if (keyword !== '') {
      const results = countries.filter((country) =>
        country.name.toLowerCase().startsWith(keyword.toLowerCase()),
      );
      setFoundCountries(results);
    } else {
      setFoundCountries([]);
    }
  };
  const clearInputValue = () => setInputValue('');
  const searchHandler = (e) => {
    e.preventDefault();

    if (inputValue !== '') {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${inputValue}`)
        .then(({ data }) => {
          setCountries(data);
          setError('');
        })
        .catch((err) => {
          setCountries('');
          setError(`No country has been found...`);
        });
    } else {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(({ data }) => {
          setCountries(data);
          setError('');
        })
        .catch((err) => console.log(err));
    }
    clearInputValue();
  };
  return (
    <StyledInputWrapper as="form" onSubmit={searchHandler}>
      <FontAwesomeIcon style={{ flex: 0.1 }} icon={faSearch} />
      <StyledInput
        value={inputValue}
        onChange={inputHandler}
        type="search"
        placeholder="Search for a country..."
      />
      <InputList foundCountries={foundCountries} />
    </StyledInputWrapper>
  );
};

export default Input;
