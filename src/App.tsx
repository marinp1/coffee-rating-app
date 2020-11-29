import React from 'react';
import {Route, useLocation} from 'react-router';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Switch, Redirect} from 'react-router-dom';

import {Header} from './features/Header';
import SidePanel from './features/SidePanel';
import Ratings from './features/Ratings';
import NewRating from './features/Ratings/NewRating';

import styles from './App.module.scss';
import {withAppPage} from './components/AppPage';
import {Firebase} from './Firebase';
import {store} from './Store';

const App: React.FC<{}> = () => {
  const location = useLocation();
  const {dispatch} = React.useContext(store);
  const {pathname} = location;

  const [animation, setAnimation] = React.useState<
    'slide-left' | 'slide-right'
  >('slide-left');

  React.useEffect(() => {
    const firebase = new Firebase();

    dispatch({
      type: 'SET_FIREBASE',
      payload: firebase,
    });

    firebase.auth.onAuthStateChanged(user =>
      dispatch({
        type: 'SET_USER',
        payload: user,
      })
    );
  }, []);

  React.useEffect(() => {
    window.setTimeout(() => {
      if (pathname.endsWith('/ratings')) {
        setAnimation('slide-left');
      } else {
        setAnimation('slide-right');
      }
    }, 300);
  }, [pathname]);

  return (
    <div className={`${styles.app} ${styles['dark-theme']}`}>
      <div className={styles.container}>
        <Header />
        <SidePanel />
        <TransitionGroup style={{position: 'relative'}}>
          <CSSTransition
            key={location.key}
            classNames={animation}
            timeout={300}
          >
            <Switch location={location}>
              <Redirect path="/" to="/ratings" exact={true} />
              <Route
                path="/ratings"
                exact={true}
                component={withAppPage(Ratings)}
              />
              <Route path="/ratings/new" component={withAppPage(NewRating)} />
              <Redirect path="*" to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
