import {
  extendTheme,
  StyleFunctionProps,
  withDefaultColorScheme,
  withDefaultVariant,
  type ThemeConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

/**
 * TODO implement scalable styles
 * https://chakra-ui.com/docs/styled-system/customize-theme#scaling-out-your-project
 */

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },
  {
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          fontFamily: 'body',
          color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('gray.100', 'gray.800')(props),
          lineHeight: 'base',
        },
      }),
    },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    colors: {
      brand: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
    },
    semanticTokens: {
      colors: {
        foreground: {
          default: 'white',
          _dark: 'gray.900',
        },
        fgSecondary: {
          default: 'gray.50',
          _dark: 'whiteAlpha.100',
        },
        fgTertiary: {
          default: 'gray.100',
          _dark: 'whiteAlpha.50',
        },
        border: {
          default: 'gray.200',
          _dark: 'gray.600',
        },
        hoverColor: {
          default: 'current',
          _dark: 'current',
        },
        hoverBg: {
          default: 'gray.100',
          _dark: 'whiteAlpha.100',
        },
        activeColor: {
          default: 'brand.500',
          _dark: 'brand.200',
        },
        activeBg: {
          default: 'brand.100',
          _dark: 'whiteAlpha.300',
        },
        scrollBg: {
          default: 'gray.200',
          _dark: 'whiteAlpha.100',
        },
      },
      sizes: {
        headerHeight: 14,
        navbarWidth: 52,
      },
      space: {
        headerHeight: 14,
        navbarWidth: 52,
      },
      zIndices: {
        header: 1,
        navbar: 2,
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
  }),
  withDefaultVariant({
    variant: 'ghost',
    components: ['Button'],
  })
);

export default theme;
