import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Router>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Router>
  );
};
