import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { StyledUnorderedList } from './ContactList.styled';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <StyledUnorderedList>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </StyledUnorderedList>
    </>
  );
};

export default ContactList;
