import {
  StyledDeleteButton,
  StyledListItem,
  StyledContactEntryBox,
  StyledContactEntry,
} from './ContactListItem.styled';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deletePhoneBookEntry = entryId => {
    dispatch(deleteContact(entryId));
  };
  return (
    <StyledListItem>
      <StyledContactEntryBox>
        <StyledContactEntry>
          <FaUser />
          <p>{name}</p>
        </StyledContactEntry>
        <StyledContactEntry>
          <FaPhoneAlt />
          <p>{number}</p>
        </StyledContactEntry>
      </StyledContactEntryBox>
      <StyledDeleteButton onClick={() => deletePhoneBookEntry(id)}>
        Delete
      </StyledDeleteButton>
    </StyledListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
