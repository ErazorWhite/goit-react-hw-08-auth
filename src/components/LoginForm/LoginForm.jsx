import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Field } from 'formik';
import {
  StyledErrorMessage,
  StyledForm,
  StyledLabel,
} from './LoginForm.styled';
import * as Yup from 'yup';
import { StyledButton } from '../styles/buttons';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(16, 'Password is too long - should be 16 chars maximum.')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <StyledForm autoComplete="off">
          <StyledLabel>
            Email
            <Field type="email" name="email" autoComplete="email" />
            {errors.email && touched.email ? (
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            ) : null}
          </StyledLabel>
          <StyledLabel>
            Password
            <Field
              type="password"
              name="password"
              autoComplete="current-password"
            />
            {errors.password && touched.password ? (
              <StyledErrorMessage>{errors.password}</StyledErrorMessage>
            ) : null}
          </StyledLabel>
          <StyledButton type="submit">Log In</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
