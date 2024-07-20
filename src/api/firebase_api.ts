// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


export const firebaseConfig = {

  apiKey: "AIzaSyCkN4xe36J9U7gt-sOI3NmKzHpbVpMTcXE", //с этим надо что то сделать тк должно быть в виде REACT_APP_FIREBASE_API_KEY
  authDomain: "REACT_APP_FIREBASE_AUTH_DOMAIN",
  databaseURL:
    "https://spfitnesspro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "REACT_APP_FIREBASE_PROJECT_ID",
  storageBucket: "REACT_APP_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
  appId: "REACT_APP_FIREBASE_APP_ID",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
