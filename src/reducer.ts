import {act} from 'react-dom/test-utils';
import {Action, Store} from './types';

export default (state: Store, action: Action): Store => {
  switch (action.type) {
    case 'SET_FIREBASE':
      return {
        ...state,
        firebase: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
