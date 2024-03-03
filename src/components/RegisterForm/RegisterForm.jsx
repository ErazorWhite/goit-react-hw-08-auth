import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  StyledErrorMessage,
  StyledForm,
  StyledLabel,
} from './RegisterForm.styled';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

// Схема валидации для формы
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Username is too short - should be 3 chars minimum.')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(16, 'Password is too long - should be 16 chars maximum.')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <StyledForm autoComplete="off">
          <StyledLabel>
            Username
            <Field type="text" name="name" autoComplete="username" />
            {errors.name && touched.name ? (
              <StyledErrorMessage>{errors.name}</StyledErrorMessage>
            ) : null}
          </StyledLabel>
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
          <button type="submit">Register</button>
        </StyledForm>
      )}
    </Formik>
  );
};
