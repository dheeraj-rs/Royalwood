import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB3DohWd09gj3zqKETJywNz0IXpYKLZBQc",
//   authDomain: "royalwood-e39ef.firebaseapp.com",
//   projectId: "royalwood-e39ef",
//   storageBucket: "royalwood-e39ef.appspot.com",
//   messagingSenderId: "268091772538",
//   appId: "1:268091772538:web:f4ef5d416415ff2493b5c3",
//   measurementId: "G-0PE1YBTZ83"
// };

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
