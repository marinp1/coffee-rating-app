import React from 'react';
import {FirebaseInstance} from '../../Firebase';
import styles from './Auth.module.scss';

import 'firebaseui/dist/firebaseui.css';

const Auth: React.FC<{firebase: FirebaseInstance | null}> = ({firebase}) => {
  React.useEffect(() => {
    if (!firebase) {
      return;
    }
    firebase.showAuthUi('#firebaseui-auth-container');
  }, [firebase]);

  return (
    <div className={styles['login']}>
      <h1>How's the coffee?</h1>
      <h2>a coffee rating application</h2>
      <div id="firebaseui-auth-container" />
    </div>
  );
};

export default Auth;
