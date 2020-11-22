/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './AppPage.module.scss';

import Auth from '../features/Auth';
import {store} from '../Store';

const AppPageComponent: React.FC<{}> = ({children}) => (
  <div className={styles['app-page']}>
    <div className={styles['app-page-wrapper']}>{children}</div>
  </div>
);

const withAppPage = (Component: React.ComponentType<any> | undefined) => ({
  ...props
}) => {
  const {state, dispatch} = React.useContext(store);

  return (
    <AppPageComponent {...props}>
      {Component ? (
        state.currentUser ? (
          <Component store={state} dispatch={dispatch} />
        ) : (
          <Auth firebase={state.firebase} />
        )
      ) : null}
    </AppPageComponent>
  );
};

export {withAppPage};
