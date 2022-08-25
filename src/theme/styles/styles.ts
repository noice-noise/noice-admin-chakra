import { StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', 'gray.800')(props),
    },
  }),
};
