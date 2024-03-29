import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from './hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Backdrop from './Backdrop/Backdrop';
import { FidgetSpinner } from 'react-loader-spinner';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <>
      <b>Refreshing user...</b>
      <Backdrop>
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{ top: '50%', right: '50%', position: 'absolute' }}
          wrapperClass="fidget-spinner-wrapper"
        />
      </Backdrop>
    </>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
