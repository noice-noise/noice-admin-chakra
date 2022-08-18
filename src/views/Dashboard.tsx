import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import { ThemeModeToggle } from '../components/Elements/ThemeModeToggle';

export const Dashboard = () => {
  return (
    <VStack h="100vh" w="100%" as={Center}>
      <Heading>Noice Chakra Admin</Heading>
      <Text>version 0.1.0</Text>
      <ThemeModeToggle />
    </VStack>
  );
};
