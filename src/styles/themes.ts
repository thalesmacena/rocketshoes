import backgroundLight from '../../public/background-light.svg';
import background from '../../public/background.svg';

export const darkTheme = {
  colors: {
    background: '#191a20',
    backgroundDark: '#141419',
    title: '#fff',
    lightText: '#999',
    backgroundLight: '#fff',
    titleInLight: '#333',
    primary: '#7159c1',
    textInPrimary: '#fff',
    primaryDisabled: '#ebe8f6',
    border: '#eee',
    inputBorder: '#ddd',
    textInput: '#666'
  },
  background: `url(${background}) no-repeat center top, #191a20`,
  backgroundOverlay: 'rgba(25, 26, 32, 0.8)',
  boxShadowModal: '0 0 3.75rem rgba(0, 0, 0, 0.05)'
};

export const lightTheme = {
  colors: {
    background: '#DCDAD7',
    backgroundDark: '#141419',
    title: '#fff',
    lightText: '#adacac',
    backgroundLight: '#Fff',
    titleInLight: '#333',
    primary: '#7159c1',
    textInPrimary: '#fff',
    primaryDisabled: '#999',
    border: '#eee',
    inputBorder: '#ddd',
    textInput: '#666'
  },
  background: `url(${backgroundLight}) no-repeat center top, #DCDAD7`,
  backgroundOverlay: 'rgba(220, 218, 215, 0.8)',
  boxShadowModal: '0 0 3.75rem rgba(0, 0, 0, 0.08)'
};
