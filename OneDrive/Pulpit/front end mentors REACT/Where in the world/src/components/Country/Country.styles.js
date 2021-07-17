import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCountry = styled(Link)`
  cursor: pointer;
  box-shadow: 0px 1px 10px 0px rgb(228, 228, 228);
  text-decoration: none;
  color: unset;
  img {
    width: 500px;
    height: 320px;
    object-fit: cover;
    border-bottom: 2px solid #0e0e0e1c;
  }
  h3 {
    padding-bottom: 10px;
    font-size: 22px;
  }
  .info {
    padding: 20px;
  }
  p {
    line-height: 150%;
  }
`;
