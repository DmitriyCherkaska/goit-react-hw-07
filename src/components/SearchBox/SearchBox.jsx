import style from './SearchBox.module.css';
import ContactForm from '../ContactForm/ContactsForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import { IoPersonAddOutline } from 'react-icons/io5';
import { useState } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleFormVisibility = () => {
    setIsFormVisible(false);
  };
  return (
    <>
      <section>
        <div>
          <span>Find contacts by name</span>
          <div>
            <input
              type="text"
              value={value}
              onChange={e => dispatch(changeFilter(e.target.value))}
              autoFocus
              placeholder="Search..."
            ></input>
            {isFormVisible && (
              <button onClick={toggleFormVisibility}>
                <IoPersonAddOutline size={26} />
              </button>
            )}
          </div>
        </div>
      </section>
      <div
        className={`${style.formContainer} ${
          !isFormVisible ? style.visible : ''
        }`}
      >
        <ContactForm setIsFormVisible={setIsFormVisible} />
      </div>
    </>
  );
};
export default SearchBox;
