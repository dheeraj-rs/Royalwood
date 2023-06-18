import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQPwMQLZApztTq6cguHYiwtehJZNFVavM",
  authDomain: "ecom-a9e07.firebaseapp.com",
  projectId: "ecom-a9e07",
  storageBucket: "ecom-a9e07.appspot.com",
  messagingSenderId: "488308139322",
  appId: "1:488308139322:web:d303fd3eb11a4685b65c03",
  measurementId: "G-7YPSX2SRZP"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
