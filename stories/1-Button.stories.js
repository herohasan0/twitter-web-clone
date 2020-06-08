import React from 'react';

import Button from '../components/button';
import NavigationButton from '../components/navigation-button';
import Navigation from '../components/navigation';
import TextTitle from '../components/text-title';
import { Home } from '../components/icons';
import ThemeButton from '../components/theme-button';
import Stack from '../components/stack';

export default {
  title: 'Buttons',
};

export const Normal = () => <Button>Click me!</Button>;
export const Theme = () => (
  <Stack gap={20} column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet Full</ThemeButton>
    <ThemeButton full big>
      Tweet Full Big
    </ThemeButton>
  </Stack>
);

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
);

export const Nav = () => <Navigation selectedKey="home" />;
