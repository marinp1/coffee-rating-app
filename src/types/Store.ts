import {FirebaseInstance} from '../Firebase';
import {Rating} from './Ratings';

export interface Store {
  firebase: FirebaseInstance | null;
  currentUser: firebase.default.User | null;
  ratings: Rating[];
}
