import { StyledCountry } from './Country.styles';

const Country = ({ name, flag, capital, population, region }) => {
  return (
    <StyledCountry to={`/${name}`}>
      <img src={flag} alt={`Flag of ${name}`} />
      <div className="info">
        <h3>{name}</h3>
        <p>
          <strong> Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong> Capital:</strong> {capital}
        </p>
      </div>
    </StyledCountry>
  );
};

export default Country;
