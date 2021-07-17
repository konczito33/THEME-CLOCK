import { useEffect, useState, useContext } from 'react';
import UseFetch from 'hooks/UseFetch';
import Country from 'components/Country/Coutry';
import { Wrapper } from './CountriesList.styles';
import { CountriesContext } from 'components/providers/CountriesProvider';
import Error from 'components/Error/Error';

const CountriesList = () => {
  const { countries, error } = useContext(CountriesContext);
  UseFetch(
    'https://restcountries.eu/rest/v2/all',
    '',
    `We can't find any country`,
  );
  return (
    <Wrapper>
      {countries.length > 0
        ? countries.map(({ name, flag, capital, population, region }) => (
            <Country
              key={name}
              name={name}
              flag={flag}
              capital={capital}
              population={population}
              region={region}
            />
          ))
        : null}
      {!error && countries.length < 1 ? <h2>Loading...</h2> : <Error />}
    </Wrapper>
  );
};

export default CountriesList;
