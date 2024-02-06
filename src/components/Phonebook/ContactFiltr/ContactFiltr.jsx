import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-slice';

import styles from './contact-filtr.module.css';

const FilterInput = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      onChange={handleChange}
      name="filter"
      placeholder="Search"
      className={styles.input}
    />
  );
};

export default FilterInput;
