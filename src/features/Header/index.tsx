import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import {store} from '../../Store';

export const Header: React.FC<{}> = () => {
  const {state, dispatch} = React.useContext(store);

  const {currentUser} = state;

  if (!currentUser) {
    return null;
  }

  return (
    <header className={styles['header']}>
      <h1>How's the coffee?</h1>
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        onClick={() =>
          dispatch({
            type: 'TOGGLE_SIDE_PANEL',
            newState: 'open',
          })
        }
      />
    </header>
  );
};
