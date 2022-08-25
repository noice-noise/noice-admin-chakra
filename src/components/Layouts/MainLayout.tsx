import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Header, HeaderSpacer } from '../Elements/Header/Header';
import { RouteBreadcrumb } from '../Elements/Header/RouteBreadcrumb';

type MainLayoutOptions = {
  hideRouterBreadcrumb?: boolean;
};

type MainLayoutProps = {
  title: string;
  description?: string;
  path?: string;
  children: React.ReactNode;
} & MainLayoutOptions;

export const MainLayout = ({
  title,
  description = '',
  children,
  hideRouterBreadcrumb,
}: MainLayoutProps) => {
  const location = useLocation();

  const headerBreadcrumb: React.ReactNode = (
    <RouteBreadcrumb
      visibility={{ base: 'hidden', md: 'visible' }}
      display={{ base: 'none', md: 'flex' }}
      routeItems={[{ name: title, path: location.pathname }]}
    />
  );

  return (
    <Flex
      direction="column"
      minH="100vh"
      ml={{ base: 0, md: 'navbarWidth' }}
      w={{ base: '100%', md: 'auto' }}
      px={{ base: 5, md: 10 }}
      gap={6}
    >
      <Header routeBreadCrumb={headerBreadcrumb} />
      <HeaderSpacer
        visibility={{ base: 'visible', md: 'hidden' }}
        display={{ base: 'flex', md: 'none' }}
      />

      {!hideRouterBreadcrumb && (
        <RouteBreadcrumb
          visibility={{ base: 'visible', md: 'hidden' }}
          display={{ base: 'flex', md: 'none' }}
          routeItems={[{ name: title, path: location.pathname }]}
        />
      )}

      {children}
    </Flex>
  );
};
