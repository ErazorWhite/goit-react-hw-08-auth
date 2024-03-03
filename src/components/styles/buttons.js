import { styled } from 'styled-components';

export const StyledButton = styled.button`
  background-color: white;
  border: 0px;
  border-radius: 5%;
  padding: 5px 10px;
  font-weight: 600;
  transition: background-color ease-in 250ms;

  &:hover,
  &:focus {
    background-color: aquamarine;
  }
`;
