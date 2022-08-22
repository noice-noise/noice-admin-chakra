import { ChakraProvider } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/Elements/Header/Header';
import { Navbar } from '../components/Elements/Navbar/Navbar';
import { ThemeContext, ThemeContextType } from './ThemeContextProvider';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { currentTheme } = useContext<ThemeContextType>(ThemeContext);

  useEffect(() => {
    console.log('render request');
  }, [currentTheme]);

  return (
    <Router>
      <ChakraProvider theme={currentTheme.value}>
        <Header />
        <Navbar />
        {children}
      </ChakraProvider>
    </Router>
  );
};
