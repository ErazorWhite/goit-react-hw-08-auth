import { styled } from 'styled-components';
import { Form, Field } from 'formik';
import MaskedInput from 'react-text-mask';
import { StyledButton } from '../styles/buttons';

export const FormConstolsContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2em;
  font-weight: 500;
`;

export const StyledForm = styled(Form)`
  max-width: 500px;
`;

export const StyledField = styled(Field)`
  padding: 5px;
  width: 100%;
`;

export const StyledMaskedInput = styled(MaskedInput)`
  padding: 5px;
  width: 100%;
`;

export const FieldContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
`;

export const StyledListItem = styled.li`
  font-size: 1em;
  font-weight: 500;
`;

export const StyledSubmitButton = styled(StyledButton)`
  border: 1px solid #c0c0c0;
`;
