import { Link } from 'react-router-dom';
import styled from 'styled-components';
const InputListItem = ({ name }) => {
  return (
    <li>
      <StyledLink to={`/${name}`}>{name}</StyledLink>
    </li>
  );
};

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: unset;
`;
export default InputListItem;
