import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 18px 24px;
  border-radius: 8px;

  background: #fff;
  
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;

    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${({ isFocused }) => isFocused && css`
    border-color: #ff9000;
    
    color: #ff9000;
  `}
  
  ${({ isFilled }) => isFilled && css`   
    color: #ff9000;
  `}

  input {
    flex: 1;

    border: 0;
    
    color: #b7b7cc;
    background: transparent;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
