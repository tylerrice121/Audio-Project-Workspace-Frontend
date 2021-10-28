import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPwT1WN4Nf8__LuwDzeMSDcVJ0WNQhqms",
  authDomain: "react-user-9615b.firebaseapp.com",
  projectId: "react-user-9615b",
  storageBucket: "react-user-9615b.appspot.com",
  messagingSenderId: "24917041155",
  appId: "1:24917041155:web:d1ab3f99327ee6a579ee36"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// set up auth

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    return auth.signInWithPopup(provider);
};


function logOut() {
    return auth.signOut()
};

export {
    auth, 
    signIn,
    logOut
};