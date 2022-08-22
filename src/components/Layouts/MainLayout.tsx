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
      ml="navbarWidth"
      px={3}
      py={7}
      gap={6}
    >
      {children}
    </Flex>
  );
};
