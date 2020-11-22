import React from 'react';

import 'firebaseui/dist/firebaseui.css';

import Firebase from './Firebase';
import App from './App';

import styles from './App.module.scss';

const AppWrapper: React.FC<{}> = () => {
  const [user, setUser] = React.useState<firebase.default.User | null>(null);

  React.useEffect(() => {
    Firebase.auth.onAuthStateChanged(user => {
      setUser(user);
    });

    // The start method will wait until the DOM is loaded.
    Firebase.showAuthUi('#firebaseui-auth-container');
  }, []);

  if (!user) {
    return (
      <div className={`${styles.app} ${styles['dark-theme']}`}>
        <div className={styles.container}>
          <div id="firebaseui-auth-container" />
        </div>
      </div>
    );
  }

  return <App />;
};

export default AppWrapper;
