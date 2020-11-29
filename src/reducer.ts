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
    case 'SET_RATINGS':
      return {
        ...state,
        ratings: action.ratings,
      };
    case 'INITIALISE_RATINGS_DATABASE':
      return {
        ...state,
        ratingsReference: action.ref,
      };
    case 'TOGGLE_SIDE_PANEL':
      return {
        ...state,
        sidePanelState: action.newState,
      };
    default:
      return state;
  }
};
