import styled from 'styled-components';

export const ContainerFrete = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerTotalFrete = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: ${({ theme }) => theme.colors.lightText};
    font-weight: bold;
  }

  strong {
    font-size: 1.5rem;
    margin-left: 0.3rem;
  }
`;
