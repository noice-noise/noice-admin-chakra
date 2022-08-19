import { Box } from '@chakra-ui/react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      h="100vh"
      w="100%"
      px="navbarWidth"
      pt="headerHeight"
      borderWidth="2px"
    >
      {children}
    </Box>
  );
};
