import {Dispatch} from 'react';
import {FirebaseInstance} from '../Firebase';
import {Rating} from './Ratings';

export interface Store {
  firebase: FirebaseInstance | null;
  sidePanelState: 'collapsed' | 'open';
  currentUser: firebase.default.User | null;
  ratings: Rating[];
  ratingsReference: firebase.default.database.Reference | null;
}

export type Action =
  | {
      type: 'SET_FIREBASE';
      payload: FirebaseInstance;
    }
  | {
      type: 'SET_USER';
      payload: firebase.default.User | null;
    }
  | {
      type: 'INITIALISE_RATINGS_DATABASE';
      ref: firebase.default.database.Reference;
    }
  | {
      type: 'SET_RATINGS';
      ratings: Rating[];
    }
  | {
      type: 'TOGGLE_SIDE_PANEL';
      newState: 'collapsed' | 'open';
    };

export type AppProps = {
  store: Store;
  dispatch: Dispatch<Action>;
};
