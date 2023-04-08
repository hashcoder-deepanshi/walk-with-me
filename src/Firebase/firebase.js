// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwmwuimlZxqD_-aVdNeZDOZuo4Llwek78",
  authDomain: "leanin-hacks.firebaseapp.com",
  projectId: "leanin-hacks",
  storageBucket: "leanin-hacks.appspot.com",
  messagingSenderId: "14434506809",
  appId: "1:14434506809:web:c5b039d1c9ceb996be15e8",
  measurementId: "G-7CBVNS16NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);