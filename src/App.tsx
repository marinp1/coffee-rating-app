import React from 'react';
import {useLocation} from 'react-router';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Header} from './features/Header';
import Ratings from './features/Ratings';
import NewRating from './features/Ratings/NewRating';

import styles from './App.module.scss';

const App: React.FC<{}> = () => {
  const location = useLocation();

  return (
    <div className={`${styles.app} ${styles['dark-theme']}`}>
      <div className={styles.container}>
        <Header />
        <TransitionGroup style={{position: 'relative'}}>
          <CSSTransition key={location.key} classNames="slide" timeout={300}>
            <Switch location={location}>
              <Redirect path="/" to="/ratings" exact={true} />
              <Route path="/ratings" exact={true} component={Ratings} />
              <Route path="/ratings/new" component={NewRating} />
              <Redirect path="*" to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
