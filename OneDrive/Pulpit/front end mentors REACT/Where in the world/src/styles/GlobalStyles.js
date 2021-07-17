import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
  *, *:after, &::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  body{
    font-family: 'Nunito Sans', sans-serif;
  }
  input[type="search"]::-webkit-search-cancel-button{
    -webkit-appearance:none;
}
`;

export default GlobalStyle;
