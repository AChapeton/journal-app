// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCojeIhOWw9rk1eYiIeGzXsc7CblhLuq4",
  authDomain: "journal-app-d08ba.firebaseapp.com",
  projectId: "journal-app-d08ba",
  storageBucket: "journal-app-d08ba.appspot.com",
  messagingSenderId: "703717171404",
  appId: "1:703717171404:web:13f1d43ceec1714a052269"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp)

export const firebaseDB = getFirestore(firebaseApp)