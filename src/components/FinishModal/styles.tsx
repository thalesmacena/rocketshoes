import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(25, 26, 32, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const Container = styled.div`
  background: #fff;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    display: block;
    padding: 1em 0;
  }

  strong {
    font-size: 2.25rem;
    color: #000;
  }

  p {
    font-size: 1.25rem;
    color: var(--color-text);
    margin-top: 0.25rem;
  }

  button {
    margin-top: 2rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }
`;
