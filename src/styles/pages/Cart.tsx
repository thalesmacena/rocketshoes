import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textInPrimary};
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: bold;
      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => darken(0.03, theme.colors.primary)};
      }

      &:disabled {
        background: ${({ theme }) => theme.colors.primaryDisabled};
        cursor: auto;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: ${({ theme }) => theme.colors.lightText};
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  img {
    height: 100px;
  }

  strong {
    color: ${({ theme }) => theme.colors.titleInLight};
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid ${({ theme }) => theme.colors.inputBorder};
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.textInput};
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: ${({ theme }) => theme.colors.lightText};
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
