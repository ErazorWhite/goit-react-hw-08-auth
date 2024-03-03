import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { StyledBackdrop } from './Backdrop.styled';

const modalRoot = document.getElementById('modal-root');

const Backdrop = ({ onClick, children }) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={onClick}>{children}</StyledBackdrop>,
    modalRoot
  );
};

export default Backdrop;

Backdrop.propTypes = {
  onClick: PropTypes.func,
};
