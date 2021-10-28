import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD1lDd1M8ZgP0xAJ1PBMC9qNZcMrOd2rB8",
  authDomain: "react-crm-firebase.firebaseapp.com",
  projectId: "react-crm-firebase",
  storageBucket: "react-crm-firebase.appspot.com",
  messagingSenderId: "235154949435",
  appId: "1:235154949435:web:9eaa284c58785fbd56a31e"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


function signIn() {
    return auth.signInWithPopup(provider);
}

function logOut() {
    return auth.signOut();
}


export {
    auth,
    signIn,
    logOut
}