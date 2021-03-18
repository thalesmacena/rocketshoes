/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

interface Theme {
  colors: {
    background: string;
    backgroundDark: string;
    title: string;
    lightText: string;
    backgroundLight: string;
    titleInLight: string;
    primary: string;
    textInPrimary: string;
    primaryDisabled: string;
    border: string;
    inputBorder: string;
    textInput: string;
  };
  background: string;
  backgroundOverlay: string;
  boxShadowModal: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
