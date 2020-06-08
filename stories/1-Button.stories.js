import React from 'react';

import Button from '../components/button';
import NavigationButton from '../components/navigation-button';
import Navigation from '../components/navigation';

export default {
  title: 'Buttons',
};

export const Normal = () => <Button>Click me!</Button>;

export const NavButton = () => <NavigationButton>Click me!</NavigationButton>;

export const Nav = () => <Navigation />;
