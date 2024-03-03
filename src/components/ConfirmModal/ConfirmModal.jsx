import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import { ButtonsThumb, ChildrenThumb, ModalContent } from './ConfirmModal.styled';
import { StyledButton } from '../styles/buttons';

const modalRoot = document.getElementById('modal-root');

const ConfirmModal = ({ isOpen, onClose, onConfirm, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose} />
      <ModalContent>
        <ChildrenThumb>{children}</ChildrenThumb>
        <ButtonsThumb>
          <StyledButton onClick={onConfirm}>Confirm</StyledButton>
          <StyledButton onClick={onClose}>Cancel</StyledButton>
        </ButtonsThumb>
      </ModalContent>
    </>,
    modalRoot
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ConfirmModal;
