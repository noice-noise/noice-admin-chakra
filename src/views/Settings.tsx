import { Select } from '@chakra-ui/react';
import { useContext } from 'react';
import { ContentHeader } from '../components/Elements/Content/ContentHeader';
import { MainLayout } from '../components/Layouts/MainLayout';
import {
  ThemeContext,
  ThemeContextType,
} from '../providers/ThemeContextProvider';

export const Settings = () => {
  const { requestThemeChange, getAvailableThemes } =
    useContext<ThemeContextType>(ThemeContext);

  const availableThemes = getAvailableThemes();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let val: number = Number(e.target.value);
    requestThemeChange(availableThemes[val]);
  };

  return (
    <MainLayout title="Settings">
      <ContentHeader title="Settings" />
      <Select placeholder="Select Theme" onChange={handleChange}>
        <option value={0}>{availableThemes[0].name}</option>
        <option value={1}>{availableThemes[1].name}</option>
      </Select>
    </MainLayout>
  );
};
