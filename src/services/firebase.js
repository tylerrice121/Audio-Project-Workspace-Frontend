import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage'
require('dotenv').config()

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "apw-auth.firebaseapp.com",
    projectId: "apw-auth",
    storageBucket: "apw-auth.appspot.com",
    messagingSenderId: "701336520857",
    appId: "1:701336520857:web:56936fc1608d67886a1008"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

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
    logOut,
    app
};