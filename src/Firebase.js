
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDEz6jf1N_91BENMhwX92KqpKpxWbC_nXQ",
  authDomain: "my-app-a2565.firebaseapp.com",
  projectId: "my-app-a2565",
  storageBucket: "my-app-a2565.appspot.com",
  messagingSenderId: "125479059396",
  appId: "1:125479059396:web:22c98031df3c5adb0fae91"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dbConfig;
