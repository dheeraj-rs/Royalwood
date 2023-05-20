// import Cart from "./Cart"
// import './App.css'
// import { useState } from "react"

// import { createUserWithEmailAndPassword,signOut,sendEmailVerification,signInWithEmailAndPassword ,sendPasswordResetEmail,
//   RecaptchaVerifier , signInWithPhoneNumber
// } from "firebase/auth";

// import { auth } from "./fiebaseconfig/config";
// function App() {
//   const [email,setEmail] = useState('')
//   const [pass,setPass] = useState('')


//   const [opt,setOtp] = useState('')
//   const [phone,setPhone] = useState('')
//   const [user,setUser] = useState(null)

  

//   const signUP = async()=>{
//    try{
//     await createUserWithEmailAndPassword(auth,email,pass)
//    }catch(error){
//     console.log(error);
//    }
//   }
//   console.log(auth?.currentUser);

//   const logOut = async()=>{
//     await signOut(auth)
//   }

//   const veryfyEmail = async()=>{
//     await sendEmailVerification(auth.currentUser)
//   }

//   const signIn = async()=>{
//     try{
//       await signInWithEmailAndPassword(auth,email,pass)

//     }catch(error){
//     console.log(error);
//    }
//   }


//   const reset = async()=>{
//     try{
//       await sendPasswordResetEmail(auth,email)

//     }catch(error){
//     console.log(error);
//    }
//   }


//   // otp

//   const sentOtp = async()=>{
//     try{
//      let recaptchaVerifier = await new RecaptchaVerifier("recaptcha",{},auth)
//     let conformation = await signInWithPhoneNumber(auth,phone,recaptchaVerifier)
//     console.log("🚀 conformation:", conformation)
//     setUser(conformation)
//     }catch(error){
//     console.log(error);
//    }
//   }
//   const conformOtp = async()=>{
//     try{
//       await user.confirm(opt)

//     }catch(error){
//     console.log(error);
//    }
//   }




//   return (
//      <div className="container">
//     <input type="text" placeholder="gmail..." value={email} onChange={(e)=>setEmail(e.target.value)} />
//     <input type="text" placeholder="password..." value={pass} onChange={(e)=>setPass(e.target.value)}  />

//     <input type="text" placeholder="phone number ..." value={phone} onChange={(e)=>setPhone(e.target.value)}  />
//     <input type="text" placeholder="otp conform..." value={opt} onChange={(e)=>setOtp(e.target.value)}  />
//    <div className="">
//    <button onClick={sentOtp}>sent OTP</button>
//    <div id="recaptcha"></div>
//    <button onClick={conformOtp}>conform OTP</button>



//    <button onClick={signUP}>sign up</button>
//     <button onClick={signIn}>sign in</button>
//     <button onClick={logOut}>sign out</button>
//     <button onClick={veryfyEmail}>Veryfy email</button>
//     <button onClick={reset}>pass reset</button>
//    </div>
//     <Cart/>
//      </div>
//   )
// }

// export default App
