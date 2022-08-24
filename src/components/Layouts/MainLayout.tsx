import { Flex } from '@chakra-ui/react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      mt="headerHeight"
      ml={{ base: 0, md: 'navbarWidth' }}
      w={{ base: '100%', md: 'auto' }}
      px={{ base: 5, md: 10 }}
      py={7}
      gap={6}
    >
      {children}
    </Flex>
  );
};
