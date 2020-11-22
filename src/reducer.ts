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
    case 'ADD_RATING':
      return {
        ...state,
        ratings: state.ratings.concat(action.rating),
      };
    default:
      return state;
  }
};
