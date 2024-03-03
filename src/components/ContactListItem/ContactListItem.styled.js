import { styled } from 'styled-components';
import { StyledButton } from '../styles/buttons';

export const StyledListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  flex-basis: calc((100% - 20px) / 3);
`;

export const StyledDeleteButton = styled(StyledButton)`
  position: absolute;
  right: 5px;
  top: 5px;
`;
export const StyledEditButton = styled(StyledButton)`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

export const StyledContactEntryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledContactEntry = styled.div`
  font-size: 1.1em;
  display: flex;
  gap: 5px;
`;

export const ButtonsContainer = styled.div``;
