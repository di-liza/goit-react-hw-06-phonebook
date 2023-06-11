// import PropTypes from 'prop-types';

import { FilterBox } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilterValue(value));
  };

  return (
    <FilterBox>
      <p>Find contacts by name</p>
      <input
        onChange={handleFilterChange}
        className="styled-input"
        value={filter}
        name={filter}
        // onChange={onChangeInput}
      />
    </FilterBox>
  );
}

// Filter.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChangeInput: PropTypes.func.isRequired,
// };
