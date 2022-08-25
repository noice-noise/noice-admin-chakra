import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Flex,
  HStack,
  Icon,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { BiCog, BiHome } from 'react-icons/bi';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import packageJson from '../../../../package.json';

// TODO refactor nav item props for reusability
type NavbarProps = Omit<DrawerProps, 'children'>;

export const customScrollbar = {
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'scrollBg',
    borderRadius: '24px',
  },
};

export const Navbar = ({ onClose, isOpen }: NavbarProps) => {
  // TODO refactor custom scrollbar

  return (
    <Box
      bg="gray.50"
      _dark={{
        bg: 'gray.700',
      }}
      minH="100vh"
    >
      <NavbarContent
        visibility={{ base: 'hidden', md: 'visible' }}
        display={{ base: 'none', md: 'flex' }}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxW="navbarWidth">
          <NavbarContent />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export const NavbarContent = ({ ...props }) => {
  return (
    <Flex
      direction="column"
      position="fixed"
      bg="foreground"
      m={0}
      p={0}
      pb={10}
      top={0}
      left={0}
      zIndex="navbar"
      h="100%"
      overflowY="auto"
      overflowX="hidden"
      w="navbarWidth"
      sx={customScrollbar}
      {...props}
    >
      <HStack as={Link} to="/" spacing={0} minH="headerHeight" ml={5}>
        <Text as="span">Noice</Text>
        <Text as="span" fontWeight="bold" fontSize="lg">
          Admin
        </Text>
        <Badge colorScheme="brand" fontSize="xs">
          v{packageJson.version}
        </Badge>
      </HStack>
      <NavLink to="/" icon={BiHome}>
        Dashboard
      </NavLink>
      <NavLink to="/settings" icon={BiCog}>
        Settings
      </NavLink>
    </Flex>
  );
};

type NavItem = {
  children: React.ReactNode;
  icon?: IconType;
  hideTooltip?: boolean;
  tooltipLabel?: React.ReactNode;
};

type NavLinkProps = NavItem & LinkProps;

export const NavLink = ({
  icon,
  hideTooltip,
  tooltipLabel,
  to,
  children,
}: NavLinkProps) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === to);
  }, [location, to]);

  return (
    <NavTooltip label={tooltipLabel || children} hideTooltip={hideTooltip}>
      <Button
        as={Link}
        to={to}
        isActive={isActive}
        leftIcon={icon && <Icon as={icon} />}
        color="current"
        _active={{
          color: 'activeColor',
          borderLeftWidth: 4,
          borderLeftColor: 'activeColor',
        }}
        _hover={{ bg: 'hoverBg' }}
        borderLeftWidth={4}
        borderLeftColor="transparent"
        variant="ghost"
        justifyContent="start"
        alignItems="center"
        w="full"
        py={5}
        rounded="none"
        size="sm"
      >
        {children}
      </Button>
    </NavTooltip>
  );
};

type NavAccordionProps = {
  label: React.ReactNode;
} & NavItem;

export const NavAccordion = ({
  icon,
  label,
  hideTooltip,
  tooltipLabel = label,
  children,
}: NavAccordionProps) => {
  return (
    <Accordion borderWidth={0} borderBottom={0} allowMultiple allowToggle>
      <AccordionItem p={0} borderWidth={0} m={0} borderBottom={0}>
        <NavTooltip label={tooltipLabel} hideTooltip={hideTooltip}>
          <AccordionButton
            as={Button}
            color="current"
            variant="ghost"
            justifyContent="start"
            alignItems="center"
            w="full"
            py={5}
            px={3}
            rounded="none"
            size="sm"
            _hover={{ bg: 'hoverBg' }}
            _expanded={{ bg: 'fgSecondary', shadow: 'md' }}
            borderWidth={0}
            borderLeftWidth={4}
            borderLeftColor="transparent"
          >
            <Icon as={icon} mr={2} />
            <Box flex="1" textAlign="left">
              <Text fontSize="sm">{label}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </NavTooltip>

        <AccordionPanel p={0} borderWidth={0} m={0} bg="fgTertiary">
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

type NavTitleProps = {
  children: React.ReactNode;
};

export const NavTitle = ({ children }: NavTitleProps) => {
  return (
    <Text
      fontSize="10"
      ml={4}
      mt={4}
      mb={1}
      letterSpacing="wide"
      fontWeight="bold"
      textTransform="uppercase"
    >
      {children}
    </Text>
  );
};

type NavTooltipProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  hideTooltip?: boolean;
};

export const NavTooltip = ({
  label,
  hideTooltip,
  children,
}: NavTooltipProps) => {
  return (
    <Tooltip label={label} placement="right" hidden={hideTooltip} hasArrow>
      {children}
    </Tooltip>
  );
};
