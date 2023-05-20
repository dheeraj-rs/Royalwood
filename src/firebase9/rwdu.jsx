// import { useEffect, useState } from "react";
// import { db } from "./fiebaseconfig/config";
// import {
//   getDocs,
//   collection,
//   addDoc,
//   doc,
//   deleteDoc,
//   updateDoc,
//   getDoc,
// } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const storage = getStorage();

// function Cart() {
//   const collectionRef = collection(db, "products");

//   const [data, setData] = useState([]);
//   const [chanalname, setChanalname] = useState("");
//   const [type1, setType1] = useState(0);
//   const [docid, setDocid] = useState(null);
//   const [imageupload, setImageupload] = useState(null);
//   const [showupload, setShowupload] = useState(null);

//   const getChannelList = async () => {
//     try {
//       const querySnapshot = await getDocs(collectionRef);
//       const filterdata = querySnapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setData(filterdata);
//     } catch (error) {
//       console.error("Error getting documents:", error);
//     }
//   };

//   useEffect(() => {
//     getChannelList();
//   }, []);

//   const postData = async () => {
//     try {
//       await addDoc(collectionRef, {
//         name: chanalname,
//         type: type1,
//       });
//       setChanalname("");
//       setType1("");
//     } catch (error) {
//       console.error("Error adding document:", error);
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       const docRef = doc(db, "products", id);
//       await deleteDoc(docRef);
//     } catch (error) {
//       console.error("Error deleting document:", error);
//     }
//   };

//   const updateData = async () => {
//     try {
//       const docRef = doc(db, "products", docid);
//       await updateDoc(docRef, {
//         name: chanalname,
//         type: type1,
//       });
//       setChanalname("");
//       setType1("");
//     } catch (error) {
//       console.error("Error updating document:", error);
//     }
//   };

//   const editData = async (id) => {
//     try {
//       const docRef = doc(db, "products", id);
//       const result = await getDoc(docRef);
//       setChanalname(result.data().name);
//       setType1(result.data().type);
//       setDocid(result.id);
//     } catch (error) {
//       console.error("Error getting document:", error);
//     }
//   };

//   const uploadFile = () => {
//     if (!imageupload) return;

//     const storageRef = ref(storage, `royalwood1/images/${imageupload.name}`);
//     uploadBytes(storageRef, imageupload)
//       .then((snapshot) => {
//         getDownloadURL(snapshot.ref)
//           .then((url) => {
//             setShowupload(url);
//             console.log("🚀  new create url : ", url);
//           })

//           .catch((error) => {
//             console.error("Error getting download URL:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error uploading file:", error);
//       });
//   };

//   return (
//     <div className="">
//       <div className="">
//         <div className="">
//           <input
//             type="text"
//             placeholder="Enter channel name."
//             value={chanalname}
//             onChange={(e) => setChanalname(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter sub count"
//             value={type1}
//             onChange={(e) => setType1(e.target.value)}
//           />
//           <button onClick={postData}>Submit</button>
//           <button onClick={updateData}>Update</button>
//         </div>

//         {data.map((f) => (
//           <div key={f.id}>
//             <h1>{f.name}</h1>
//             <h3>{f.type}</h3>
//             <button onClick={() => deleteData(f.id)}>Delete</button>
//             <button onClick={() => editData(f.id)}>Edit</button>
//           </div>
//         ))}
//       </div>

//       <div className="">
//         <h1>Image Upload</h1>
//       </div>
//       <div className="">
//         <img src={showupload} alt="img" />
//         <input
//           type="file"
//           onChange={(event) => {
//             setImageupload(event.target.files[0]);
//           }}
//         />
//       </div>
//       <button onClick={uploadFile}>Upload</button>
//     </div>
//   );
// }

// export default Cart;
