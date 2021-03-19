import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.background};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 0.875rem Roboto, sans-serif;
  }

  #__next {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 1.25rem 3.125rem;
  }

  button {
    cursor: pointer;
  }
`;
