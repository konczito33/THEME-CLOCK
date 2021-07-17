import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const StyledList = styled(motion.ul)`
  list-style: none;
  margin-top: 2px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgb(228, 228, 228);
  text-align: center;
  li {
    height: 40px;
    &:not(:last-child) {
      border-bottom: 1px solid rgb(228, 228, 228);
    }
    button {
      height: 100%;
    }
  }
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  right: 80px;
  top: 120px;
  width: 160px;

  display: flex;
  flex-direction: column;

  button {
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const FilterButton = styled.button`
  width: 100%;
  height: 60px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  transition: transform 0.3s;
  margin-left: 5px;
  pointer-events: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0px 0px 5px 0px rgb(228, 228, 228);
  padding: 10px 18px;
  cursor: pointer;
`;
