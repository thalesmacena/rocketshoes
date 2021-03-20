import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.125rem 0;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  > svg {
    cursor: pointer;
    align-items: center;
    margin: 0 2rem;
  }
`;

export const Cart = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 0.625rem;

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.title};
    }

    span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.lightText};
    }
  }
`;
