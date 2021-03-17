import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import themes from '../styles/themes';

interface ThemeContextData {
  theme: string;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledComponentThemeProvider theme={themes}>
        <GlobalStyles />
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};
