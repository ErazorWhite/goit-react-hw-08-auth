import { Helmet } from 'react-helmet';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
