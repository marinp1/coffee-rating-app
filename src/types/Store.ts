import {Dispatch} from 'react';
import {FirebaseInstance} from '../Firebase';
import {Rating} from './Ratings';

export interface Store {
  firebase: FirebaseInstance | null;
  currentUser: firebase.default.User | null;
  ratings: Rating[];
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
      type: 'ADD_RATING';
      rating: Rating;
    };

export type AppProps = {
  store: Store;
  dispatch: Dispatch<Action>;
};
