import { createContext, useState } from 'react';
import { defaultTheme } from '../theme';
import { corporate } from '../theme/custom';

export type Theme = {
  name: string;
  value: typeof defaultTheme;
};

// TODO add theme manager
// TODO dynamic parsing of themes like in bulletproof react array routes using index.ts exports only

export type ThemeContextType = {
  currentTheme: Theme;
  requestThemeChange: (theme: Theme) => void;
  getAvailableThemes: () => Theme[];
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);
const initialTheme: Theme = {
  name: 'Default',
  value: defaultTheme,
};
const corporateTheme: Theme = { name: 'Corporate', value: corporate };
const availableThemes = [initialTheme, corporateTheme];

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme);

  const changeTheme = (theme: Theme) => {
    const newTheme = availableThemes.filter((themeItem) => themeItem === theme);
    setCurrentTheme(newTheme[0]);
  };

  const getAvailableThemes = (): Theme[] => {
    return availableThemes;
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        requestThemeChange: changeTheme,
        getAvailableThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
