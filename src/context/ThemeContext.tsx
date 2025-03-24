import React, {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Theme, ThemeContextType} from '../types';

const ThemeContext = createContext<ThemeContextType>(null!);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('system');

  const resolvedTheme = theme === 'system' ? systemTheme || 'light' : theme;

  return (
    <ThemeContext.Provider value={{theme, resolvedTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
