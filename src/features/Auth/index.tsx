import React from 'react';
import {FirebaseInstance} from '../../Firebase';

const Auth: React.FC<{firebase: FirebaseInstance | null}> = ({firebase}) => {
  React.useEffect(() => {
    if (!firebase) {
      return;
    }
    firebase.showAuthUi('#firebaseui-auth-container');
  }, [firebase]);

  return <div id="firebaseui-auth-container" />;
};

export default Auth;
