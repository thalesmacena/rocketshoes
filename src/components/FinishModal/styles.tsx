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

  button.hover {
    transition: transform 0.2s;
  }

  button.hover:hover {
    transform: scale(1.5);
  }

  button.animate {
    animation-name: fill;
    animation-duration: 1.5s;
    background-color: #191a20;
    animation-timing-function: ease-in-out;
    animation-delay: 0;
    animation-fill-mode: both;
    animation-play-state: running;
  }

  @keyframes fill {
    0% {
      transform: scale(0.3);
      background-color: #000000;
      border-radius: 100%;
    }
    30% {
      background-color: #000000;
    }

    60% {
      background-color: #000000;
    }
    90% {
      transform: scale(100);
    }

    100% {
      background-color: #000000;
      width: 100vw;
      height: 100vw;
    }
  }
`;
