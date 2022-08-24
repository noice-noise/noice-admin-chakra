import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';

export const RouteBreadcrumb = ({ ...props }) => {
  return (
    <HStack h="4" spacing={4} {...props}>
      <BackLink />

      <Divider fontSize="sm" orientation="vertical" borderColor="current" />
      <Breadcrumb fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/"
            _hover={{ textDecoration: 'none', color: 'brand.500' }}
          >
            Overview
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            _hover={{ textDecoration: 'none', color: 'brand.500' }}
          >
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </HStack>
  );
};

export const BackLink = () => {
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
    >
      <Icon as={BiArrowBack} mr={2} my={0} py={0} h="100%" />
      Back
    </Button>
  );
};
