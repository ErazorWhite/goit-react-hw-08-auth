import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { StyledUsername, StyledWrapper } from './UserMenu.styled';
import useAuth from '../hooks/useAuth';
import { StyledButton } from '../styles/buttons';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledWrapper>
      <StyledUsername>Welcome, {user.name}</StyledUsername>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </StyledWrapper>
  );
};
