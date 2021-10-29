import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_bXfKCY9XPleXjcF8CrxXVbPFHE8ycVI",
    authDomain: "apw-auth.firebaseapp.com",
    projectId: "apw-auth",
    storageBucket: "apw-auth.appspot.com",
    messagingSenderId: "701336520857",
    appId: "1:701336520857:web:56936fc1608d67886a1008"
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
    // const history = useHistory();
    // history.pushState('/')
    return auth.signOut();
};

export {
    auth, 
    signIn,
    logOut
};