import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
  animation: ${scaleIn} 0.3s ease-out forwards;
`;

export const ChildrenThumb = styled.div`
  padding: 5px;
  padding-bottom: 15px;
`;

export const ButtonsThumb = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
