import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPE9OMlBAKPJMbvYmVBh46KM8yIKzD0Mo",
  authDomain: "cosmetics-hub-bd332.firebaseapp.com",
  projectId: "cosmetics-hub-bd332",
  storageBucket: "cosmetics-hub-bd332.appspot.com",
  messagingSenderId: "646626936783",
  appId: "1:646626936783:web:6d4ddac3863b5895c834ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
