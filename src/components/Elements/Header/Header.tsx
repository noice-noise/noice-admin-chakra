import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  Link as ExternalLink,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { BiBell, BiMenu } from 'react-icons/bi';
import { DiGithubBadge } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { ThemeModeToggle } from '../ThemeModeToggle';
import { RouteBreadcrumb } from './RouteBreadcrumb';

export const Header = () => {
  return (
    <Flex
      direction="row"
      position="fixed"
      bg="foreground"
      w="100%"
      m={0}
      pr={{ base: 0, md: 5 }}
      pl={{ base: 0, md: 'navbarWidth' }}
      px={{ base: 3 }}
      top={0}
      left={0}
      overflowY="auto"
      overflowX="hidden"
      h="headerHeight"
      overflow="hidden"
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      alignItems="center"
      zIndex="header"
    >
      <RouteBreadcrumb />
      {/* // TODO Implement Navbar Menu Button */}
      <IconButton
        aria-label="Open Navbar"
        color="current"
        rounded="full"
        icon={<Icon boxSize="2rem" as={BiMenu} />}
        visibility={{ base: 'visible', md: 'hidden' }}
        display={{ base: 'flex', md: 'none' }}
      />
      <Spacer />

      <IconButton
        as={ExternalLink}
        href="https://github.com/noice-noise/noice-admin-chakra"
        isExternal
        aria-label="Link to repo"
        color="current"
        rounded="full"
        icon={<Icon boxSize="2rem" as={DiGithubBadge} />}
      />
      <ThemeModeToggle />
      <Menu strategy="absolute">
        <MenuButton
          as={IconButton}
          aria-label="Open notifications"
          color="current"
          rounded="full"
          icon={<Icon boxSize="1.5rem" as={BiBell} />}
        ></MenuButton>
        <Portal>
          <MenuList fontSize="sm" minW={80} shadow="lg">
            <MenuItem>
              <Flex direction="column" alignItems="start" maxW={80}>
                <Text fontWeight="bold">Patrek</Text>
                <Text opacity={0.8} size="sm">
                  Lag nasad ang Diverge
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex direction="column" alignItems="start" maxW={80}>
                <Text fontWeight="bold">MVPrinch</Text>
                <Text opacity={0.8} size="sm">
                  SURPASS YOUR LIMITS
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex direction="column" alignItems="start" maxW={80}>
                <Text fontWeight="bold">Junix</Text>
                <Text opacity={0.8} size="sm">
                  useEffect hihi
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex direction="column" alignItems="start" maxW={80}>
                <Text fontWeight="bold">Keanue Leeves</Text>
                <Text opacity={0.8} size="sm">
                  better than the real one
                </Text>
              </Flex>
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
      <Menu>
        <MenuButton ml={4}>
          <Avatar name="Admin" boxSize="2rem" rounded="full" src="#" />
        </MenuButton>
        <Portal>
          <MenuList fontSize="sm" minW={40} w={20} shadow="lg">
            <MenuGroup fontSize="sm" title="Profile">
              <MenuItem as={Link} to="/account">
                My Account
              </MenuItem>
              <MenuItem as={Link} to="/settings">
                Settings
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup fontSize="sm" title="Help">
              <MenuItem
                as={ExternalLink}
                href="https://github.com/noice-noise/noice-admin-chakra"
                isExternal
              >
                Documentation
              </MenuItem>
              <MenuItem
                as={ExternalLink}
                href="https://github.com/noice-noise/noice-admin-chakra/issues"
                isExternal
              >
                Feedback
              </MenuItem>
              <MenuItem as={Link} to="/about">
                About
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Portal>
      </Menu>
    </Flex>
  );
};
