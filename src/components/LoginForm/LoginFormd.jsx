// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RecaptchaVerifier, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithPhoneNumber, signOut } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase";
// import { toast } from "react-toastify";

// const LoginForm = () => {

//     console.log('jjjj');
//   const [email, setEmail] = useState("");
//   const [loginemail, setLoginemail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [phone, setPhone] = useState("");
//   const [user, setUser] = useState(null);

//   const { Loginpage } = useSelector((state) => state.sidebar);
//   const [toggleSign, setToggleSign] = useState(false);

//   const signUp = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       toast.success("Sign up successful");
//     } catch (error) {
//       toast.warning("Sign up error");
//     }
//   };

//   console.log("🚀 auth:", auth?.currentUser);

//   const logOut = async () => {
//     await signOut(auth);
//     toast.success("Logged out successfully");
//   };

//   const verifyEmail = async () => {
//     await sendEmailVerification(auth.currentUser);
//     toast.success("Your Email verified");
//   };

//   // sign in
//   const signIn = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, loginemail, loginPassword);
//       toast.success("You are logged in");
//     } catch (error) {
//       toast.warning("Invalid password");
//     }
//   };

//   // reset password
//   const resetPassword = async () => {
//     try {
//       await sendPasswordResetEmail(auth, loginemail);
//       toast.success("Password reset success");
//     } catch (error) {
//       toast.warning("Error resetting password");
//     }
//   };

//   // phone
//   const sendOtp = async () => {
//     try {
//       const recaptchaVerifier = await new RecaptchaVerifier("recaptcha", {}, auth);
//       const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
//       console.log("🚀 confirmationResult:", confirmationResult);
//       setUser(confirmationResult);
//     } catch (error) {
//       toast.warning("Error sending OTP");
//       console.log(error);
//     }
//   };

//   const confirmOtp = async () => {
//     try {
//       await user.confirm(otp);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleToggleSign = () => {
//     setToggleSign(!toggleSign);
//   };
//   console.log("👍 ToggleSign: ", toggleSign);

//   return (
//     <div className={`${Loginpage ? "block" : "hidden"} fixed backdrop-blur-sm shadow-lg top-0 w-screen h-screen z-10`}>
//       <div className={`${toggleSign ? "hidden" : "block"} w-screen h-screen fixed backdrop-blur-sm z-50 sm:hidden md:block`}>
//         <div className="h-full flex justify-center items-center">
//           {/* Container */}
//           <div className="w-[85%] lg:w-4/12 p-4 mx-auto bg-[#00000088] rounded-md">
//             <div className="relative flex flex-col min-w-0 w-full shadow-lg rounded-lg bg-blueGray-200 border-0 pb-8">
//               {/* Sign in with email or Google */}
//               <div className="mb-0 px-6 py-6">
//                 <div className="text-center mb-4">
//                   <h6 className="text-white text-sm font-bold">Sign in with</h6>
//                 </div>
//                 {/* Logos */}
//                 <div className="flex gap-2 justify-center">
//                   <button className="bg-white text-blueGray-700 px-2 py-2 rounded outline-none uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
//                     <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github
//                   </button>
//                   <button className="bg-white active:bg-blueGray-50 text-blueGray-700 px-2 py-2 rounded outline-none focus:outline-none uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
//                     <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google
//                   </button>
//                 </div>
//                 <hr className="mt-4 border-b-1 border-blueGray-300" />
//               </div>
//               {/* Sign in with credentials */}
//               <div className="flex-auto px-4 lg:px-10 py-4 pt-0">
//                 <div className="text-blueGray-400 text-center text-white mb-3 font-bold">
//                   <small>Or sign in with credentials</small>
//                 </div>
//                 <form>
//                   <div className="relative w-full mb-3">
//                     <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-white" htmlFor="grid-password">Email</label>
//                     <input
//                       type="email"
//                       value={loginemail}
//                       onChange={(e) => setLoginemail(e.target.value)}
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-sm text-sm shadow w-full ease-linear transition-all duration-150"
//                       placeholder="Email"
//                     />
//                   </div>
//                   <div className="relative w-full mb-3">
//                     <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-white" htmlFor="grid-password">Password</label>
//                     <input
//                       type="password"
//                       value={loginPassword}
//                       onChange={(e) => setLoginPassword(e.target.value)}
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-sm text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
//                       <span className="ml-2 text-sm font-semibold text-blueGray-600 text-white select-none">Remember me</span>
//                       <span
//                         className="ml-2 text-sm font-semibold text-blueGray-600 text-blue-800 select-none"
//                         onClick={resetPassword}
//                       >
//                         Reset password
//                       </span>
//                     </label>
//                   </div>
//                   <div className="">
//                     <input type="text" placeholder="phone number ..." value={phone} onChange={(e) => setPhone(e.target.value)} />
//                     <input type="text" placeholder="otp confirm..." value={otp} onChange={(e) => setOtp(e.target.value)} />
//                     <div className="">
//                       <button onClick={sendOtp}>Send OTP</button>
//                       <div id="recaptcha"></div>
//                       <button onClick={confirmOtp}>Confirm OTP</button>
//                     </div>
//                   </div>
//                   <div className="text-center mt-6 flex ">
//                     <button
//                       onClick={signIn}
//                       className="bg-gradient-to-r from-[#01762a] to-[#34ff5c] text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
//                       type="button"
//                     >
//                       Sign In
//                     </button>
//                     <button className="bg-gray-600 text-black px-3" onClick={logOut}>Log Out</button>
//                   </div>
//                 </form>
//               </div>
//               <div className="flex justify-center">
//                 <p
//                   className="text-xl text-center shadow-sm text-blue-500 tracking-wider leading-5 underline rounded-sm px-2 select-none"
//                   onClick={handleToggleSign}
//                 >
//                   Create account
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${toggleSign ? "block" : "hidden"} w-screen h-screen fixed z-[200] backdrop-blur-sm`}>
//         <div className="h-full w-full flex justify-center items-center">
//           <div className="container w-[90%] flex flex-col items-center justify-center px-2 rounded-md bg-[#000000bf]">
//             <div className="px-6 py-8 rounded shadow-md text-black w-full">
//               <h1 className="mb-8 text-3xl text-center">Sign up</h1>
//               <input
//                 type="text"
//                 className="block border border-gray-300 w-full p-3 rounded mb-4"
//                 name="fullname"
//                 placeholder="Full Name"
//               />
//               <input
//                 type="text"
//                 className="block border border-gray-300 w-full p-3 rounded mb-4"
//                 name="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 className="block border border-gray-300 w-full p-3 rounded mb-4"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <input
//                 type="password"
//                 className="block border border-gray-300 w-full p-3 rounded mb-4"
//                 name="confirm_password"
//                 placeholder="Confirm Password"
//               />

//               <button
//                 type="submit"
//                 className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
//                 onClick={signUp}
//               >
//                 Create Account
//               </button>

//               <button
//                 className=" bg-blue-gray-100 px-3"
//                 onClick={verifyEmail}
//               >
//                 Email Verify
//               </button>

//               <div className="text-center text-sm text-gray-600 mt-4">
//                 By signing up, you agree to the{" "}
//                 <a
//                   className="no-underline border-b border-gray-600 text-gray-600"
//                   href="#"
//                 >
//                   Terms of Service
//                 </a>{" "}
//                 and{" "}
//                 <a
//                   className="no-underline border-b border-gray-600 text-gray-600"
//                   href="#"
//                 >
//                   Privacy Policy
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
