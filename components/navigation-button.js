import React from 'react';
import Button from './button';
import styles from './navigation-button.module.css';
import cn from 'classnames';

function NavButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  );
}

export default NavButton;
