import { ChakraProvider } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from './ThemeContextProvider';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { currentTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <Router>
      <ChakraProvider theme={currentTheme.value}>{children}</ChakraProvider>
    </Router>
  );
};
