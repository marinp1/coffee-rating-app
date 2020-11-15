import React from 'react';
import styles from './App.module.scss';

import {Header} from './features/Header';

const App: React.FC<{}> = () => {
  return (
    <div className={`${styles.app} ${styles['dark-theme']}`}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
};

export default App;
