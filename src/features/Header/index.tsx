import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
  return (
    <header className={styles['header']}>
      <h1>How's the coffee?</h1>
    </header>
  );
};
