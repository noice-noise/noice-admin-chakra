import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Navbar: ComponentStyleConfig = {
  // All parts of multipart components can be found in the @chakra-ui/anatomy package,
  // the menuAnatomy has as well these parts: button, list, groupTitle, command, divider
  parts: ['navbar', 'navlink'],
  baseStyle: {
    navbar: {
      direction: 'column',
      position: 'fixed',
      bg: 'foreground',
      p: 0,
      m: 0,
      top: 0,
      left: 0,
      h: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      w: '52',
    },
    navlink: {
      justifyContent: 'start',
      alignItems: 'center',
      w: 'full',
      variant: 'ghost',
      py: '6',
      rounded: 'none',
    },
  },
  // sizes: {
  //   sm: {
  //     item: {
  //       fontSize: '0.75rem',
  //       px: 2,
  //       py: 1,
  //     },
  //   },
  //   md: {
  //     item: {
  //       fontSize: '0.875rem',
  //       px: 3,
  //       py: 2,
  //     },
  //   },
  // },
  // variants: {
  //   bold: {
  //     item: {
  //       fontWeight: 'bold',
  //     },
  //     menu: {
  //       boxShadow: 'xl',
  //     },
  //   },
  //   colorful: {
  //     item: {
  //       color: 'orange.600',
  //     },
  //     menu: {
  //       bg: 'orange.100',
  //     },
  //   },
  // },
  defaultProps: {
    // size: 'md',
  },
};
