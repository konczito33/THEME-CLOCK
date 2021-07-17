import InputListItem from 'components/InputListItem/InputListItem';
import styled from 'styled-components';
const InputList = ({ foundCountries }) => {
  return (
    <StyledList>
      {foundCountries.map(({ name }) => (
        <InputListItem name={name} />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgb(228, 228, 228);
  li {
    width: 100%;
    text-align: center;
    line-height: 40px;
    height: 40px;
    &:not(:last-child) {
      border-bottom: 1px solid rgb(228, 228, 228);
    }
  }
`;

export default InputList;
