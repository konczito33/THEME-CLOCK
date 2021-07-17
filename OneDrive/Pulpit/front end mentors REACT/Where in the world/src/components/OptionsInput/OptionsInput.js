import { useState, useRef } from 'react';
import {
  StyledList,
  OptionsWrapper,
  FilterButton,
  StyledIcon,
  ButtonWrapper,
} from './OptionsInput.styles';
import OptionsItem from 'components/OptionsItem/OptionsItem';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import { CountriesContext } from 'components/providers/CountriesProvider';
const OptionsInput = () => {
  const variants = {
    visible: { opacity: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };
  const regions = [
    { region: 'All' },
    { region: 'Africa' },
    { region: 'Americas' },
    { region: 'Asia' },
    { region: 'Europe' },
    { region: 'Oceania' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const regionItemRef = useRef(null);
  const openHandler = () => setIsOpen(!isOpen);
  const selectRegionHandler = (e) => {
    regionItemRef.current.innerText = e.target.innerText;
    openHandler();
  };
  return (
    <OptionsWrapper>
      <ButtonWrapper onClick={openHandler}>
        <FilterButton ref={regionItemRef}>Filter by region </FilterButton>
        <StyledIcon
          icon={faChevronDown}
          style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }}
        />
      </ButtonWrapper>
      <AnimatePresence>
        {isOpen ? (
          <StyledList
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {regions.map(({ region }) => (
              <OptionsItem
                key={region}
                selectHandler={selectRegionHandler}
                region={region}
              />
            ))}
          </StyledList>
        ) : null}
      </AnimatePresence>
    </OptionsWrapper>
  );
};

export default OptionsInput;
