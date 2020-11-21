import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Header} from './features/Header';
import Ratings from './features/Ratings';
import NewRating from './features/Ratings/NewRating';

import styles from './App.module.scss';

const App: React.FC<{}> = () => {
  return (
    <div className={`${styles.app} ${styles['dark-theme']}`}>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Redirect path="/" to="/ratings" exact={true} />
          <Route path="/ratings" component={Ratings} />
          <Route path="/ratings/new" component={NewRating} />
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
