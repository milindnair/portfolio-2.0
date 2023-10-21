// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAHhfkRWOK-k3GguP9T8_x03YBQIr5VsfA",
//     authDomain: "portfolio-5d6a3.firebaseapp.com",
//     projectId: "portfolio-5d6a3",
//     storageBucket: "portfolio-5d6a3.appspot.com",
//     messagingSenderId: "966262377705",
//     appId: "1:966262377705:web:76b92ec05f9e12c023f478"
//   };



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };