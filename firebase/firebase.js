// firebase.js
import firebase, { getApp, getApps } from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHhfkRWOK-k3GguP9T8_x03YBQIr5VsfA",
  authDomain: "portfolio-5d6a3.firebaseapp.com",
  projectId: "portfolio-5d6a3",
  storageBucket: "portfolio-5d6a3.appspot.com",
  messagingSenderId: "966262377705",
  appId: "1:966262377705:web:76b92ec05f9e12c023f478"
};



// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
