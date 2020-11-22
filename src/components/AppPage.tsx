/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './AppPage.module.scss';

import StoreContext from '../Store';
import Auth from '../features/Auth';

const AppPageComponent: React.FC<{}> = ({children}) => (
  <div className={styles['app-page']}>
    <div className={styles['app-page-wrapper']}>{children}</div>
  </div>
);

const withAppPage = (Component: React.ComponentType<any> | undefined) => ({
  ...props
}) => {
  return (
    <AppPageComponent {...props}>
      {Component ? (
        <StoreContext.Consumer>
          {store =>
            store.currentUser ? (
              <Component store={store} />
            ) : (
              <Auth firebase={store.firebase} />
            )
          }
        </StoreContext.Consumer>
      ) : null}
    </AppPageComponent>
  );
};

export {withAppPage};
