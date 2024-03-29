import { Form } from 'formik';

import styled from 'styled-components';

export const StyledForm = styled(Form)`
  max-width: 320px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
`;
