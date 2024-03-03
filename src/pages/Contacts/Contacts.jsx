import ContactForm from '../../components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      {error && <p>{error}</p>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {loading && <p>Loading contacts...</p>}
      {contacts?.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>There are no contacts!</p>
      )}
    </div>
  );
};

export default Contacts;
