import { Flex } from '@chakra-ui/react';
import { Header, HeaderSpacer } from '../Elements/Header/Header';
import { RouteBreadcrumb } from '../Elements/Header/RouteBreadcrumb';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      ml={{ base: 0, md: 'navbarWidth' }}
      w={{ base: '100%', md: 'auto' }}
      px={{ base: 5, md: 10 }}
      gap={6}
    >
      <Header />
      <HeaderSpacer
        visibility={{ base: 'flex', md: 'hidden' }}
        display={{ base: 'flex', md: 'none' }}
      />
      <RouteBreadcrumb
        visibility={{ base: 'flex', md: 'hidden' }}
        display={{ base: 'flex', md: 'none' }}
      />
      {children}
    </Flex>
  );
};
