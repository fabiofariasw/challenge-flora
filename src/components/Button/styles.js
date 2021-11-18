import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  background: #61787b;
  padding: 8px;
  gap: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  transition: filter 0.2s;

  svg {
    color: #fff;
    height: 20px;
    width: 20px;
  }

  &:hover {
    filter: brightness(0.85);
  }
`;