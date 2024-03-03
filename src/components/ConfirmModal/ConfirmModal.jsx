import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import { ModalContent } from './ConfirmModal.styled';

const modalRoot = document.getElementById('modal-root');

const ConfirmModal = ({ isOpen, onClose, onConfirm, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose} />
      <ModalContent>
        <div>{children}</div>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
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
