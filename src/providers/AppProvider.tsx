import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/Elements/Header/Header';
import { Navbar } from '../components/Elements/Navbar/Navbar';
import theme from '../theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Header />
        <Navbar />
        {children}
      </ChakraProvider>
    </Router>
  );
};
