import { NavWrapper, Button, StyledTitle } from './Nav.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Nav = () => {
  const [darkmode, setDarkmode] = useState(false);
  const darkModeHandler = () => setDarkmode(!darkmode);
  const scrollTopHandler = () => window.scrollTo(0, 0);
  return (
    <NavWrapper>
      <StyledTitle onClick={scrollTopHandler} to="/">
        Where in the world?
      </StyledTitle>
      <Button onClick={darkModeHandler}>
        <FontAwesomeIcon icon={darkmode ? faSun : faMoon} />
        <p>{darkmode ? 'Light Mode' : 'Dark Mode'}</p>
      </Button>
    </NavWrapper>
  );
};

export default Nav;
