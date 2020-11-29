import React, {Dispatch, Reducer} from 'react';

import reducer from './reducer';

import {Action, Store} from './types';

export const defaultStore: Store = {
  firebase: null,
  sidePanelState: 'collapsed',
  currentUser: null,
  ratings: [],
  ratingsReference: null,
};

const store = React.createContext<{
  state: Store;
  dispatch: Dispatch<Action>;
}>({state: defaultStore, dispatch: () => {}});

const {Provider} = store;

const StateProvider: React.FC<{}> = ({children}) => {
  const [state, dispatch] = React.useReducer<Reducer<Store, Action>>(
    reducer,
    defaultStore
  );

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider};
