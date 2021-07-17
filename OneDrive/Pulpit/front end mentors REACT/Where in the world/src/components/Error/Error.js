import styled from 'styled-components';
import { CountriesContext } from 'components/providers/CountriesProvider';
import { useContext } from 'react';
const Error = () => {
  const { error } = useContext(CountriesContext);
  return (
    <StyledError>
      <h3>{error}</h3>
    </StyledError>
  );
};

const StyledError = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 5px 0px rgb(202, 201, 201);
  background-color: #fff;
  padding: 20px 40px;
  z-index: -1;
`;
export default Error;
