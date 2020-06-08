import React from 'react';
import Button from './button';
import styles from './theme-button.module.css';
import cn from 'classnames';

function ThemeButton({ big, className, children, ...props }) {
  return (
    <Button
      className={cn(styles.button, big && styles.bigButton, className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ThemeButton;
