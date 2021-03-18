import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';

interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    const storedTheme = Cookies.get('theme');
    setTheme(storedTheme || 'light');
  }, []);

  useEffect(() => {
    Cookies.set('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentThemeProvider
        theme={theme === 'dark' ? darkTheme : lightTheme}
      >
        <GlobalStyles />
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};
