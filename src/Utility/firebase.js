
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth';
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPev_xRbmrwODAFpKQFaSwJVscag6kjJU",
  authDomain: "clone-501d5.firebaseapp.com",
  projectId: "clone-501d5",
  storageBucket: "clone-501d5.firebasestorage.app",
  messagingSenderId: "507574049994",
  appId: "1:507574049994:web:ecb9b3f22b2c713613e833"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore()



