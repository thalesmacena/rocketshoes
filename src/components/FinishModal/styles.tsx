import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${({ theme }) => theme.backgroundOverlay};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundLight};
  width: 100%;
  max-width: 25rem;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadowModal};
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
    color: ${({ theme }) => theme.colors.titleInLight};
    margin-top: 0.25rem;
  }

  button {
    margin-top: 2rem;
    background: transparent;
    border: 0;
  }

  button.hover {
    transition: transform 0.2s;
  }

  button.hover:hover {
    transform: scale(1.5);
  }

  button.animate {
    animation-name: fill;
    animation-duration: 1.5s;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    animation-timing-function: ease-in;
    animation-delay: 0;
    animation-fill-mode: both;
    animation-play-state: running;
  }

  @keyframes fill {
    0% {
      transform: scale(0.3);
      border-radius: 100%;
    }

    100% {
      transform: scale(100);
    }
  }

  @media only screen and (max-width: 585px) {
    animation-duration: 0.8;
  }
`;
