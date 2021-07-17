import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 5px 0px rgb(228, 228, 228);
  height: 80px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 10;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;

export const StyledTitle = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: unset;
`;
