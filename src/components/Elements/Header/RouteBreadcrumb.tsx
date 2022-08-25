import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  forwardRef,
  HStack,
  Icon,
  StackProps,
} from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export type RouteItem = {
  name: string;
  path: string;
};

export interface RouteBreadcrumbProps extends StackProps {
  routeItems?: RouteItem[];
}
export const RouteBreadcrumb = forwardRef<RouteBreadcrumbProps, 'div'>(
  (props, ref) => {
    const { routeItems, ...rest } = props;

    return (
      <HStack h="4" spacing={4} {...rest}>
        <BackLink />
        {routeItems && (
          <Divider fontSize="sm" orientation="vertical" borderColor="current" />
        )}
        <Breadcrumb fontSize="sm">
          {routeItems &&
            routeItems.map((item) => (
              <BreadcrumbItem key={item.path}>
                <BreadcrumbLink
                  as={RouterLink}
                  to={item.path}
                  _hover={{ textDecoration: 'none', color: 'brand.500' }}
                >
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      </HStack>
    );
  }
);

export const BackLink = () => {
  const navigate = useNavigate();

  return (
    <Button
      as={RouterLink}
      to="/"
      variant="ghost"
      p={0}
      m={0}
      size="sm"
      color="current"
      fontWeight="normal"
      _hover={{ textDecoration: 'none', bg: 'none', color: 'brand.500' }}
      _active={{ textDecoration: 'none', bg: 'none', color: 'brand.500' }}
      onClick={() => navigate(-1)}
    >
      <Icon as={BiArrowBack} mr={2} my={0} py={0} h="100%" />
      Back
    </Button>
  );
};
