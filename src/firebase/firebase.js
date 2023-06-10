import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnLlW2fZWaxqHysKvZc68gNY6mX___7dY",
  authDomain: "e-com-380af.firebaseapp.com",
  projectId: "e-com-380af",
  storageBucket: "e-com-380af.appspot.com",
  messagingSenderId: "5385100626",
  appId: "1:5385100626:web:d94c999011a219081cee8b",
  measurementId: "G-4XHTF2E672"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyB3DohWd09gj3zqKETJywNz0IXpYKLZBQc",
//   authDomain: "royalwood-e39ef.firebaseapp.com",
//   projectId: "royalwood-e39ef",
//   storageBucket: "royalwood-e39ef.appspot.com",
//   messagingSenderId: "268091772538",
//   appId: "1:268091772538:web:f4ef5d416415ff2493b5c3",
//   measurementId: "G-0PE1YBTZ83"
// };

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
