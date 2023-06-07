import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3DohWd09gj3zqKETJywNz0IXpYKLZBQc",
  authDomain: "royalwood-e39ef.firebaseapp.com",
  projectId: "royalwood-e39ef",
  storageBucket: "royalwood-e39ef.appspot.com",
  messagingSenderId: "268091772538",
  appId: "1:268091772538:web:f4ef5d416415ff2493b5c3",
  measurementId: "G-0PE1YBTZ83"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
