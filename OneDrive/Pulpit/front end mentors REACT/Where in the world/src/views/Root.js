import CountriesList from './CountriesList';
import GlobalStyle from 'styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inputs from 'components/Inputs/Inputs';
import Nav from 'components/Nav/Nav';
import CountriesProvider from 'components/providers/CountriesProvider';
import CountryDetails from './CountryDetails/CountryDetails';
const Root = () => {
  return (
    <Router>
      <CountriesProvider>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Inputs />
            <CountriesList />
          </Route>
          <Route path="/:id">
            <CountryDetails />
          </Route>
        </Switch>
      </CountriesProvider>
    </Router>
  );
};

export default Root;
