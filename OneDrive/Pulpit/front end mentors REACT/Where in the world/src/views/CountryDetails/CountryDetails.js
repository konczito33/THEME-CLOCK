import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const CountryDetails = () => {
  let location = useLocation();
  const [country, setCountry] = useState({});
  const path = location.pathname;
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name${path}`)
      .then(({ data }) => {
        setCountry(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  const {
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    flag,
    nativeName,
  } = country;
  console.log(country);
  return (
    <MainWrapper>
      <Button to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </Button>
      <ImageWrapper>
        <img src={flag} alt={`flag of ${name}`} />
      </ImageWrapper>
      <DetailsWrapper>
        <h3>{name}</h3>
        <DetailsLeft>
          <p>
            <strong>Native Name: </strong>
            {nativeName}
          </p>
          <p>
            <strong>Population: </strong> {population}
          </p>
          <p>
            <strong>Region: </strong> {region}
          </p>
          <p>
            <strong>Sub Region </strong> {subregion}
          </p>
          <p>
            <strong>Capital: </strong> {capital}
          </p>
        </DetailsLeft>
        <DetailsRight>
          <p>
            <strong>Top Level Domain: </strong>
            {topLevelDomain}
          </p>
          <p>
            <strong>Currencies: </strong>
            {currencies ? currencies[0].name : null}
          </p>
          <p>
            <strong>Languages: </strong>
            {languages ? languages.map((lang) => `${lang.name} `) : null}
          </p>
        </DetailsRight>
      </DetailsWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.5fr 1fr;
  padding: 0 80px;
  height: 80vh;
`;

const DetailsWrapper = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  h3 {
    font-size: 32px;
    margin-bottom: 40px;
  }
  p {
    padding: 10px 0;
    color: #333333c5;
  }
  strong {
    color: #333;
  }
`;

const ImageWrapper = styled.div`
  grid-column: 1/2;
  justify-self: start;
  img {
    width: 600px;
    min-height: 400px;
    box-shadow: 0px 0px 5px 0px rgb(228, 228, 228);
  }
`;

const Button = styled(Link)`
  position: absolute;
  left: 80px;
  top: 140px;
  text-decoration: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgb(199, 198, 198);
  padding: 10px 20px;
  color: #333;
  svg {
    margin-right: 10px;
  }
`;

const DetailsLeft = styled.div`
  grid-row: 2/3;
`;
const DetailsRight = styled.div`
  justify-self: end;
  align-self: start;
  grid-column: 2/3;
  grid-row: 2/3;
`;

export default CountryDetails;
