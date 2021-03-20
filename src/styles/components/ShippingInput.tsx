import { darken } from 'polished';
import { BiLoaderAlt } from 'react-icons/bi';
import styled from 'styled-components';

export const ContainerShipping = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
`;

export const ContainerInput = styled.div`
  input {
    width: 8rem;
    height: 3rem;
    padding: 0.5rem 1.5rem;
    color: ${({ theme }) => theme.colors.lightText};
    border: 0;
    background: rgba(229, 218, 215, 0.3);

    &::placeholder {
      color: ${({ theme }) => theme.colors.textInput};
      opacity: 1;
    }

    &:focus {
      background: #f9f9f9;
      outline: none !important;
      border: 1px solid #c4c4c4 !important;
      color: #000;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  button {
    width: 8rem;
    height: 3rem;
    border: 0;
    border-radius: 0 5px 0.5px 0;
    margin-right: 5rem;
    cursor: auto;

    background: ${({ theme }) => theme.colors.primaryDisabled};

    &:enabled {
      background-color: ${({ theme }) => theme.colors.primary};
      transition: background-color 0.2s;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.textInPrimary};
    }

    &:enabled:hover {
      background-color: ${({ theme }) => darken(0.03, theme.colors.primary)};
    }

    &:focus {
      outline: none !important;
    }
  }
`;

export const DisableButton = styled.button`
  background-color: #e83f5b !important;
  color: ${({ theme }) => theme.colors.textInPrimary};
`;

export const LoadingCircle = styled(BiLoaderAlt)`
  animation: roll 1s infinite;

  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ProgressBar = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  max-width: 16rem;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 5px 0.5px;
  position: relative;
  transition: width 0.5s ease-in-out;
  bottom: 0;
`;

export const ContainerTotalShipping = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: ${({ theme }) => theme.colors.lightText};
    font-weight: bold;
  }

  strong {
    font-size: 1rem;
    margin-left: 0.3rem;
  }
`;
