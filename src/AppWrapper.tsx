import React from 'react';

import 'firebaseui/dist/firebaseui.css';

import {Firebase} from './Firebase';
import App from './App';

import StoreContext, {defaultStore} from './Store';
import {Store} from './types';

const AppWrapper: React.FC<{}> = () => {
  const [store, setStore] = React.useState<Store>(defaultStore);

  React.useEffect(() => {
    const firebase = new Firebase();

    setStore({
      ...store,
      firebase,
    });

    firebase.auth.onAuthStateChanged(user => {
      setStore({
        ...store,
        currentUser: user,
      });
    });
  }, []);

  return (
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  );
};

export default AppWrapper;
