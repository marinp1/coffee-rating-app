import React from 'react';

import {faAt, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {store} from '../../Store';

import styles from './SidePanel.module.scss';
import {Button} from '../../components/Button';

const SidePanel: React.FC<{}> = () => {
  const {state, dispatch} = React.useContext(store);

  const {sidePanelState, currentUser, firebase} = state;

  if (!currentUser || !firebase) {
    return null;
  }

  return (
    <section className={`${styles['side-panel']} ${styles[sidePanelState]}`}>
      <div className={styles['header']}>
        <h1>Settings</h1>
        <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          onClick={() =>
            dispatch({
              type: 'TOGGLE_SIDE_PANEL',
              newState: 'collapsed',
            })
          }
        />
      </div>
      <div className={styles['content']}>
        <div className={styles['current-user']}>
          {currentUser.photoURL && (
            <div className={styles['user-photo']}>
              <img src={currentUser.photoURL} />
            </div>
          )}
          <div style={{flexGrow: 1}}>
            <div className={styles['info-pair']}>
              <FontAwesomeIcon icon={faUser} fixedWidth size="lg" />
              <p>{currentUser.displayName}</p>
            </div>
            <div className={styles['info-pair']}>
              <FontAwesomeIcon icon={faAt} fixedWidth size="lg" />
              <p>{currentUser.email}</p>
            </div>
          </div>
          <Button
            type="button"
            theme="success"
            onClick={() => firebase.auth.signOut()}
          >
            Sign out
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SidePanel;
