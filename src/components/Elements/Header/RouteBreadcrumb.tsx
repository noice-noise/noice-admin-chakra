import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const RouteBreadcrumb = () => {
  return (
    <Breadcrumb
      visibility={{ base: 'hidden', md: 'visible' }}
      display={{ base: 'none', md: 'flex' }}
      fontSize="sm"
      px={3}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" _hover={{ textDecoration: 'none' }}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" _hover={{ textDecoration: 'none' }}>
          Overview
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink _hover={{ textDecoration: 'none' }}>
          Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
