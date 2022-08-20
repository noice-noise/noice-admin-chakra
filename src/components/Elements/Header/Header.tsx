import {
  Avatar,
  Badge,
  Flex,
  HStack,
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
import { BiBell } from 'react-icons/bi';
import { DiGithubBadge } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { ThemeModeToggle } from '../ThemeModeToggle';

import packageJson from '../../../../package.json';

export const Header = () => {
  console.log(packageJson);
  return (
    <Flex
      direction="row"
      position="fixed"
      bg="foreground"
      px={5}
      m={0}
      top={0}
      left={0}
      w="100vw"
      overflowY="auto"
      overflowX="hidden"
      h="headerHeight"
      justifyContent="flex-end"
      alignItems="center"
      borderBottomWidth="1px"
      zIndex="header"
    >
      <HStack as={Link} to="/" spacing={0}>
        <Text as="span">Noice</Text>
        <Text as="span" fontWeight="bold" fontSize="lg">
          Admin
        </Text>
      </HStack>
      <Badge colorScheme="brand" fontSize="xs" ml={1}>
        v{packageJson.version}
      </Badge>
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
        <MenuButton>
          <IconButton
            aria-label="Open notifications"
            color="current"
            rounded="full"
            icon={<Icon boxSize="1.5rem" as={BiBell} />}
          />
        </MenuButton>
        <Portal>
          <MenuList fontSize="sm" minW={80}>
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
          <Avatar
            name="User"
            boxSize="2.5rem"
            rounded="full"
            src="https://bit.ly/broken-link"
          />
        </MenuButton>
        <Portal>
          <MenuList fontSize="sm" minW={40} w={20}>
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
