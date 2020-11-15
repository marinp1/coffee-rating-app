import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Header} from './features/Header';
import Ratings from './features/Ratings';

import styles from './App.module.scss';

const App: React.FC<{}> = () => {
  return (
    <div className={`${styles.app} ${styles['dark-theme']}`}>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Ratings} />
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
