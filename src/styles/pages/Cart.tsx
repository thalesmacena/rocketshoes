import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.875rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;

  footer {
    margin-top: 1.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textInPrimary};
      height: 3.5rem;
      border: 0;
      border-radius: 5px;
      padding: 0.75rem 1.25rem;
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
  border-collapse: collapse;

  thead th {
    color: ${({ theme }) => theme.colors.lightText};
    text-align: left;
    padding: 0.75rem;
  }

  tbody td {
    padding: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  img {
    height: 6.25rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.titleInLight};
    display: block;
  }

  span {
    display: block;
    margin-top: 0.3rem;
    font-size: 1.12rem;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid ${({ theme }) => theme.colors.inputBorder};
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.textInput};
      padding: 0.375rem;
      width: 3.25rem;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 0.375rem;
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
    font-size: 1.75rem;
    margin-left: 0.313rem;
  }
`;
