import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { BiFile, BiFolder, BiHome } from 'react-icons/bi';
import { Link, LinkProps, useLocation } from 'react-router-dom';

// TODO refactor nav item props for reusability

export const Navbar = () => {
  // TODO refactor custom scrollbar
  const customScrollbar = {
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

  return (
    <Flex
      direction="column"
      position="fixed"
      bg="foreground"
      m={0}
      p={0}
      mt="headerHeight"
      pb="headerHeight" // need to because of top margin, to allow accurate overflowY boundary
      top={-1.3}
      left={0}
      zIndex="navbar"
      h="100%"
      overflowY="auto"
      overflowX="hidden"
      w="navbarWidth"
      borderRightWidth="1px"
      sx={customScrollbar}
    >
      <NavLink to="/" icon={BiHome}>
        Dashboard
      </NavLink>
      <NavAccordion
        label="Components"
        icon={BiFolder}
        tooltipLabel="Coming Soon"
      >
        <NavLink to="/page1" icon={BiFile}>
          Component 1
        </NavLink>
        <NavLink to="/page2" icon={BiFile}>
          Component 2
        </NavLink>
        <NavLink to="/page3" icon={BiFile}>
          Component 3
        </NavLink>
        <NavLink to="/page4" icon={BiFile}>
          Component 4
        </NavLink>
      </NavAccordion>
      <NavAccordion label="Pages" icon={BiFolder} tooltipLabel="Component">
        <NavLink to="/page1" icon={BiFile}>
          Nested Page 1
        </NavLink>
        <NavLink to="/page2" icon={BiFile}>
          Nested Page 2
        </NavLink>
        <NavLink to="/page3" icon={BiFile}>
          Nested Page 3
        </NavLink>
        <NavLink to="/page4" icon={BiFile}>
          Nested Page 4
        </NavLink>
      </NavAccordion>
      <NavLink to="/theme" tooltipLabel="Coming Soon">
        Theme
      </NavLink>
      <NavLink to="/interfaces" tooltipLabel="Coming Soon">
        Interfaces
      </NavLink>
      <NavLink to="/examples" tooltipLabel="Coming Soon">
        Examples
      </NavLink>
      <Spacer />
      <NavTitle>Add-ons</NavTitle>
      <NavLink to="#" tooltipLabel="Admin Add-on">
        Add-on 1
      </NavLink>
      <NavLink to="#" tooltipLabel="Admin Add-on">
        Add-on 2
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
            _expanded={{ bg: 'fgSecondary' }}
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