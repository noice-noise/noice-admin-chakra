import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import { ThemeModeToggle } from '../components/Elements/ThemeModeToggle';

export const Dashboard = () => {
  return (
    <VStack minH="100vh" w="100%" as={Center}>
      <Heading>Noice Chakra Admin</Heading>
      <Text color="text">version 0.1.0</Text>
      <Text color="text">
        will be gray.900 in light mode and gray.50 in dark mode
      </Text>
      <ThemeModeToggle />
    </VStack>
  );
};
