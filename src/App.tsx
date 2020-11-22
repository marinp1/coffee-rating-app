import React from 'react';
import {Route, useLocation} from 'react-router';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Switch, Redirect} from 'react-router-dom';

import {Header} from './features/Header';
import Ratings from './features/Ratings';
import NewRating from './features/Ratings/NewRating';

import styles from './App.module.scss';
import {withAppPage} from './components/AppPage';

const App: React.FC<{}> = () => {
  const location = useLocation();
  const {pathname} = location;

  const [animation, setAnimation] = React.useState<
    'slide-left' | 'slide-right'
  >('slide-left');

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
