import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
	signOut
} from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBO7r3HflZedL7KIAXgIPCLNhN0E2kILhQ",
  authDomain: "aft-dashboard.firebaseapp.com",
  databaseURL: "https://aft-dashboard-default-rtdb.firebaseio.com",
  projectId: "aft-dashboard",
  storageBucket: "aft-dashboard.appspot.com",
  messagingSenderId: "538590561923",
  appId: "1:538590561923:web:7ec93c222ecc7094b0bdb6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const DB = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
	signOut,
  DB as default,
  ref,
  onValue,
  set,
};
