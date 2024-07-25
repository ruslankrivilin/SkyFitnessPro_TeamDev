import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCkN4xe36J9U7gt-sOI3NmKzHpbVpMTcXE",
  authDomain: "spfitnesspro.firebaseapp.com",
  databaseURL:
    "https://spfitnesspro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spfitnesspro",
  storageBucket: "spfitnesspro.appspot.com",
  messagingSenderId: "646527140879",
  appId: "1:646527140879:web:9157e41fa4ab53e1fb4f7a",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
