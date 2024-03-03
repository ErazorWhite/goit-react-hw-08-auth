import {
  StyledDeleteButton,
  StyledListItem,
  StyledContactEntryBox,
  StyledContactEntry,
  ButtonsContainer,
  StyledEditButton,
} from './ContactListItem.styled';
import { FaPhoneAlt, FaTrash, FaPen } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';

const ContactListItem = ({ name, number, id }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const dispatch = useDispatch();
  const deletePhoneBookEntry = entryId => {
    dispatch(deleteContact(entryId));
    setIsConfirmModalOpen(false);
  };
  const handleEdit = updatedContactData => {
    dispatch(updateContact({ id, updatedContactData }));
    setIsEditModalOpen(false);
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
      <ButtonsContainer>
        <StyledDeleteButton onClick={() => setIsConfirmModalOpen(true)}>
          <FaTrash />
        </StyledDeleteButton>
        <StyledEditButton onClick={() => setIsEditModalOpen(true)}>
          <FaPen />
        </StyledEditButton>
      </ButtonsContainer>
      {isConfirmModalOpen && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={() => deletePhoneBookEntry(id)}
        >
          Are you sure you want to delete this contact?
        </ConfirmModal>
      )}
      {isEditModalOpen && (
        <EditContactModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEdit}
          initialName={name}
          initialNumber={number}
        />
      )}
    </StyledListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
