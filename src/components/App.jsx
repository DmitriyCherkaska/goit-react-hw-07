import './App.css';
import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { selectContacts, selectError, selectLoading } from '../redux/selectors';
import Loader from './Loader/Loader';
import Error from './Error/Error';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Logo />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}

export default App;
