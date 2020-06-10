import React from 'react';
import styles from './layout.module.css';
import cn from 'classnames';

function Stack({ children }) {
  return <div className={cn([styles.layout])}>{children}</div>;
}

export default Stack;
