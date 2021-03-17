// eslint-disable-next-line import/no-absolute-path
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import background from '../../public/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body { 
    background: url(${background}) no-repeat center top, ${(props) =>
  props.theme.colors.background};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 400 Roboto, sans-serif;
  }

  #__next {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
