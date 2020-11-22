import React from 'react';
import {Store} from './types';

export const defaultStore: Store = {
  firebase: null,
  currentUser: null,
  ratings: [],
};

const AppContext = React.createContext<Store>(defaultStore);

export default AppContext;
