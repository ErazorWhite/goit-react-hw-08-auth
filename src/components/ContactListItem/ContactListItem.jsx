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
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { useState } from 'react';

const ContactListItem = ({ name, number, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const deletePhoneBookEntry = entryId => {
    dispatch(deleteContact(entryId));
    setIsModalOpen(false);
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
      <StyledDeleteButton onClick={() => setIsModalOpen(true)}>
        Delete
      </StyledDeleteButton>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => deletePhoneBookEntry(id)}
      >
        Are you sure you want to delete this contact?
      </ConfirmModal>
    </StyledListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
