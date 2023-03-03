
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  // your config details here
  
    apiKey: "AIzaSyAnlT3IMd37pppis-MtVAqZ7mjESqBJDSc",
    authDomain: "gif-search-5b98c.firebaseapp.com",
    projectId: "gif-search-5b98c",
    storageBucket: "gif-search-5b98c.appspot.com",
    messagingSenderId: "354688425899",
    appId: "1:354688425899:web:b266925bf018d1e7187cee",
    measurementId: "G-C9CZPBT8F3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { app,auth, db };
