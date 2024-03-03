import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Backdrop from '../Backdrop/Backdrop';

import { ModalContent } from '../ConfirmModal/ConfirmModal.styled';
import {
  StyledErrorMessage,
  StyledField,
  StyledMaskedInput,
  StyledSubmitButton,
} from '../ContactForm/ContactForm.styled';
import { FieldContainer } from './EditContactModal.styled';

const modalRoot = document.getElementById('modal-root');

const EditContactModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialName,
  initialNumber,
}) => {
  if (!isOpen) return null;

  const phoneNumberMask = [
    '+',
    /[1-9]/,
    /\d/,
    '(',
    /[0-9]/,
    /\d/,
    /\d/,
    ')',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
  ];

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too short!')
      .max(32, 'Too long!')
      .notOneOf(['1234567890'], 'Invalid name')
      .matches(/^[a-zA-Z\s]+$/, 'Invalid name')
      .required('Required!'),
    number: yup
      .string()
      .matches(/^\+?\d{1,3}\(\d{3}\)\d{2}-\d{2}-\d{3}$/, 'Invalid phone number')
      .required('Required!'),
  });

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose} />
      <ModalContent>
        <Formik
          initialValues={{ name: initialName, number: initialNumber }}
          validationSchema={schema}
          onSubmit={values => {
            onSubmit(values);
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <h2>Edit contact</h2>
              <FieldContainer>
                <div>
                  <p>Old name: {initialName}</p>
                  <StyledField name="name" placeholder="Name" />
                  {touched.name && errors.name && (
                    <StyledErrorMessage>{errors.name}</StyledErrorMessage>
                  )}
                </div>
                <div>
                  <p>Old number: {initialNumber}</p>
                  <StyledField name="number">
                    {({ field }) => (
                      <StyledMaskedInput
                        {...field}
                        mask={phoneNumberMask}
                        placeholder="Enter phone number"
                        id="number"
                        type="text"
                        component="input"
                      />
                    )}
                  </StyledField>
                  {touched.number && errors.number && (
                    <StyledErrorMessage>{errors.number}</StyledErrorMessage>
                  )}
                </div>
              </FieldContainer>

              <StyledSubmitButton type="submit">Save</StyledSubmitButton>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </>,
    modalRoot
  );
};

EditContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialName: PropTypes.string.isRequired,
  initialNumber: PropTypes.string.isRequired,
};

export default EditContactModal;
