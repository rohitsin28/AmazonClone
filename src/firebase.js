// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClMvw-j861_DrV_bV1YbQJ_ZBa7HNwEsw",
  authDomain: "clone-a908f.firebaseapp.com",
  projectId: "clone-a908f",
  storageBucket: "clone-a908f.appspot.com",
  messagingSenderId: "601353682741",
  appId: "1:601353682741:web:aefed87a7a44e019edd67c",
  measurementId: "G-8Q935QKSY3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};