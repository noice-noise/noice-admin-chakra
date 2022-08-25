import { Box } from '@chakra-ui/react';
import { ContentHeader } from '../components/Elements/Content/ContentHeader';
import { MainLayout } from '../components/Layouts/MainLayout';

export const BlankPage = () => {
  return (
    <MainLayout title="Blank Page">
      <ContentHeader title="Blank Page" />
      <Box></Box>
    </MainLayout>
  );
};
