import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'Nunito Sans', 'sans-serif';
  height: 60px;
  margin-left: 20px;
  flex: 1;
  font-size: 14px;
  background-color: transparent;
  border: none;
  color: var(--font);
  font-family: 'Nunito Sans', sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #333;
    padding-left: 2px;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  width: 350px;
  max-width: 50%;
  padding: 0.8rem 1.2rem;
  box-shadow: 0px 0px 5px 0px rgb(228, 228, 228);
  border-radius: 0.3rem;
`;
