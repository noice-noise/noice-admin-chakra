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
      px={3}
      py={7}
      gap={6}
    >
      {children}
    </Flex>
  );
};
