import { darken } from 'polished';
import styled from 'styled-components';

export const ProductList = styled.ul`
  min-width: 400px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-gap: 1.25rem;
  list-style: none;

  @media (min-width: 585px) {
    grid-template-columns: repeat(auto-fit, 19rem);
  }

  li {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: 4px;
    padding: 1.25rem;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 1rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.titleInLight};
      margin-top: 0.313rem;
    }

    > span {
      font-size: 1.3rem;
      font-weight: bold;
      margin: 0.3rem 0 1.25rem;
    }

    button {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textInPrimary};
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: backcground 0.2s;

      &:hover {
        background: ${({ theme }) => darken(0.03, theme.colors.primary)};
      }

      div {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 0.313rem;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
