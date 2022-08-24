import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableContainer,
  Tag,
  TagLeftIcon,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { IoIosNavigate } from 'react-icons/io';
import { ContentHeader } from '../components/Elements/Content/ContentHeader';
import { MainLayout } from '../components/Layouts/MainLayout';

export const Dashboard = () => {
  return (
    <MainLayout>
      <ContentHeader title="Dashboard" />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={3}>
        <Stat
          rounded="lg"
          borderWidth="1px"
          bg="foreground"
          minW="56"
          px={4}
          py={2}
        >
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText mb={0}>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat
          rounded="lg"
          borderWidth="1px"
          bg="foreground"
          minW="56"
          px={4}
          py={2}
        >
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText mb={0}>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat
          rounded="lg"
          borderWidth="1px"
          bg="foreground"
          minW="56"
          px={4}
          py={2}
        >
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText mb={0}>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat
          rounded="lg"
          borderWidth="1px"
          bg="foreground"
          minW="56"
          px={4}
          py={2}
        >
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText mb={0}>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={3}
      >
        <GridItem as={Flex} direction="column" colSpan={3} gap={3}>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collectedx Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </GridItem>
        <GridItem
          as={Flex}
          direction={{ base: 'column', md: 'row' }}
          flexWrap={{ md: 'wrap' }}
          gap={2}
          colSpan={1}
        >
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>

          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={3}
      >
        <GridItem as={Flex} direction="column" gap={2} colSpan={1}>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </GridItem>
        <GridItem as={Flex} direction="column" gap={2} colSpan={1}>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </GridItem>
        <GridItem as={Flex} direction="column" gap={2} colSpan={1}>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </GridItem>
        <GridItem as={Flex} direction="column" gap={2} colSpan={1}>
          <Stat
            rounded="lg"
            borderWidth="1px"
            bg="foreground"
            minW="56"
            px={4}
            py={2}
          >
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText mb={0}>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        </GridItem>
      </Grid>

      <TableContainer
        bg="foreground"
        px={4}
        py={2}
        borderWidth="1px"
        rounded="xl"
      >
        <Heading as="h3" size="md" my={3}>
          Events
        </Heading>
        <Divider />
        <Table colorScheme="gray" variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Checkbox mx="auto" />
              </Th>
              <Th>ID No.</Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Location</Th>
              <Th>Status</Th>
              <Th>Tag</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox mx="auto" />
              </Td>
              <Td>348585</Td>
              <Td>A Noice Event</Td>
              <Td>Dec 25, 2022</Td>
              <Td>Gym</Td>
              <Td>
                <Tag colorScheme="green">Done</Tag>
              </Td>
              <Td>
                <Tag colorScheme="gray" variant="outline">
                  <TagLeftIcon as={IoIosNavigate} />
                  Internal
                </Tag>
              </Td>
              <Td>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox mx="auto" />
              </Td>
              <Td>348585</Td>
              <Td>Another Noice Event</Td>
              <Td>Dec 25, 2022</Td>
              <Td>Quadrangle</Td>
              <Td>
                <Tag colorScheme="blue">Ongoing</Tag>
              </Td>
              <Td>
                <Tag colorScheme="gray" variant="outline">
                  <TagLeftIcon as={IoIosNavigate} />
                  External
                </Tag>
              </Td>
              <Td>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox mx="auto" />
              </Td>
              <Td>348585</Td>
              <Td>A Noice Event</Td>
              <Td>Dec 25, 2022</Td>
              <Td>Gym</Td>
              <Td>
                <Tag colorScheme="red">Cancelled</Tag>
              </Td>
              <Td>
                <Tag colorScheme="gray" variant="outline">
                  <TagLeftIcon as={IoIosNavigate} />
                  Internal
                </Tag>
              </Td>
              <Td>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox mx="auto" />
              </Td>
              <Td>348585</Td>
              <Td>Another Noice Event</Td>
              <Td>Dec 25, 2022</Td>
              <Td>Quadrangle</Td>
              <Td>
                <Tag colorScheme="orange">Postponed</Tag>
              </Td>
              <Td>
                <Tag colorScheme="gray" variant="outline">
                  <TagLeftIcon as={IoIosNavigate} />
                  External
                </Tag>
              </Td>
              <Td>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};
