import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../constants/theme';

import { Home } from '.';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Home screen', () => {
  it('should renders correctly', () => {
    const rendered = render(<Home />, { wrapper: Providers });

    expect(rendered).toBeTruthy();
  });
});
