
//   import { initializeApp } from "firebase/app";
//   import { getAuth , onAuthStateChanged } from "firebase/auth";
//   import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
// import { Await } from "react-router-dom";

//   const firebaseApp = initializeApp({

//   })

//   const auth = getAuth(firebaseApp)
//   const db = getFirestore(firebaseApp)
//   const todosCol = collection(db,'todos')
//   const snapshot = Await getDocs(todosCol)


//   onAuthStateChanged(auth,user=>{
//     if (user !== null){
//       console.log('Loged in!');
//     }else{
//       console.log('No user!');

//     }
//   })

// const firebaseConfig = {
//   apiKey: "AIzaSyB3DohWd09gj3zqKETJywNz0IXpYKLZBQc",
//   authDomain: "royalwood-e39ef.firebaseapp.com",
//   projectId: "royalwood-e39ef",
//   storageBucket: "royalwood-e39ef.appspot.com",
//   messagingSenderId: "268091772538",
//   appId: "1:268091772538:web:f4ef5d416415ff2493b5c3",
//   measurementId: "G-0PE1YBTZ83"
// };
