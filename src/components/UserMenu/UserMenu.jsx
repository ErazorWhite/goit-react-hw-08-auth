import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { StyledUsername, StyledWrapper } from './UserMenu.styled';
import useAuth from '../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledWrapper>
      <StyledUsername>Welcome, {user.name}</StyledUsername>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </StyledWrapper>
  );
};
