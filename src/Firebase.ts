import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import app from 'firebase/app';
import React from 'react';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

const uiConfig = {
  signInSuccessUrl: 'http://localhost:3000',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup',
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign('<your-privacy-policy-url>');
  },
};

class Firebase {
  auth: firebase.auth.Auth;
  private ui: firebaseui.auth.AuthUI;

  public showAuthUi(id: string) {
    this.ui.start(id, uiConfig);
  }

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.ui = new firebaseui.auth.AuthUI(this.auth);
  }
}

const FirebaseContext = React.createContext<
  typeof Firebase['prototype'] | null
>(null);

const firebaseInstance = new Firebase();
export default firebaseInstance;

export {FirebaseContext, uiConfig};
