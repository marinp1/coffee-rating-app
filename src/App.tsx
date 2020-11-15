import React from 'react';
import './App.scss';
import styles from './App.module.scss';

const App: React.FC<{}> = () => {
  return (
    <div className={`${styles.app} ${styles['dark-theme ']}`}>
      <div className={styles.container}>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default App;
