import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/GlobalStyle';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
