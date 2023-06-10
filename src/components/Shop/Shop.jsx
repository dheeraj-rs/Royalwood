import React from 'react'
import { Addcart, Addfav, Selectedcategorie, selectItem } from "../../redux/Features/searchProducts";
import SearchPanel from "../SearchPanel/SearchPanel";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { RiHeart2Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';

function Shop() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const furnituresRef = collection(db, "furnitures"); // database get furnitures collection
  const { selectedcategorie } = useSelector((state) => state.search); // redux storing sellected categories

  const [rotate, setRotate] = useState(false);  // filter button rotate arrow & filterpage
  const [data, setData] = useState([]); // collection furnitures data
  const [selectdata, setSelectdata] = useState([]); // filter the sellected categories data
  const [active, setActive] = useState([]) // select items or all items show the output

  useEffect(() => {
    getfurnitureData()
  }, []);

  // furnitures Maping to data
  const getfurnitureData = async () => {
    try {
      const dbfurnitures = await getDocs(furnituresRef)
      const furnituredata = dbfurnitures.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(furnituredata)
      const getcategorie = furnituredata.filter(item => item.categories.includes(selectedcategorie)); // furnituredata data filter items
      setSelectdata(getcategorie);
    } catch (error) {
      console.error("❗️ Error getting firebase doc : ", error);
    }
  }

  // ----------------------------------------------------------------------


  // show the shopepage selectitem or all items 
  useEffect(() => {
    if (selectdata == '') {
      setActive(data)
    } else {
      setActive(selectdata)
    }
  }, [data])

  // ----------------------------------------------------------------------

  // add to cart button click
  const handleAddToCart = async (cartitem) => {
    const user = auth?.currentUser;
    if (user !== null) {
      const uid = user.uid;
      const uemail = user.email;
      const verifiedemail = user.emailVerified;
      const productid = cartitem.id;
      postData(uid, uemail, verifiedemail, productid)
        .then(() => {
          toast.success('Product added successfully');
        })
        .catch((error) => {
          console.error('Error adding document:', error);
          toast.error('Failed to add product');
        });

    } else {
      dispatch(LoginpageOn());
    }
  }

  // cart item post to database
  const postData = async (uid, uemail, verifiedemail, productid) => {
    try {
      const cartRef = collection(db, `User : ${uemail}`);
      const querySnapshot = await getDocs(cartRef);
      const cartData = querySnapshot.docs.find((doc) => doc.data().productid == productid)

      if (cartData) {
        const docRef = doc(db, `User : ${uemail}`);
        await updateDoc(docRef, {
          email: uemail,
          verified: verifiedemail,
          productid: productid,
        })
      }
      else {
        const cartRef2 = collection(db, `User : ${uemail}`);
        await addDoc(cartRef2, {
          userid: uid,
          email: uemail,
          verified: verifiedemail,
          productid: productid,
        })
      }
    } catch (error) { throw error; }
  }

  // ----------------------------------------------------------------------
  // add to Fav button click
  const handleAddToFav = async (favitem) => {
    const user = auth?.currentUser;
    if (user !== null) {
      const favId = favitem.id; // Extract the favId from favitem
      postFav(favId)
    } else {
      dispatch(LoginpageOn());
    }
  };
  const postFav = async (favId) => {
    try {
      const user = auth.currentUser;
      if (user !== null) {
        const uemail = user.email; // Access the uemail from the user object
        const cartRef = collection(db, `User : ${uemail}`);
        const querySnapshot = await getDocs(cartRef);
        const cartData = querySnapshot.docs.find((doc) => doc.data().favId === favId);
        if (!cartData) {
          const cartRef2 = collection(db, `User : ${uemail}`);
          await addDoc(cartRef2, { favId: favId });
        } else { toast.error('Fav item not added') }
      }
    } catch (error) {
      throw error;
    }
  };

  // ----------------------------------------------------------------------

  // exit from the page clear the selectedcategorie 
  const handleback = () => {
    dispatch(Selectedcategorie(''))
    navigate(-1);
  }

  return (
    <div className="w-full h-auto overflow-hidden relative z-50 ">
      <div className="w-full h-14 flex justify-center items-center px-3 gap-2 " >
        {/* back button  */}
        <BiArrowBack className="w-8 h-8" onClick={handleback} />
        {/* search container  */}
        <div className="w-full flex items-center pt-1">
          <SearchPanel />
        </div>
        <div className="gap-2 hidden lg:flex">
          {/* Faverate btn  */}
          <button className="font-semibold flex gap-2 items-center shadow-lg px-5 py-2" onClick={() => { navigate('/fav') }}>
            Fav<RiHeart2Line className="w-6 h-6" />
          </button>
          {/* cart button lg */}
          <button className="flex font-semibold gap-2 items-center shadow-lg px-5 py-2 " onClick={() => { navigate('/cart') }} >
            <span>Cart</span>
            <AiOutlineShoppingCart className="w-6 h-6" onClick={() => { navigate("/shop") }} />
          </button>
        </div>
        {/* filter button  */}
        <button className={` font-semibold flex gap-2 shadow-lg items-center px-5 py-2`} onClick={() => setRotate(!rotate)}>
          Filters<span className="flex items-center font-medium">{'(1)'}
            <MdOutlineKeyboardArrowDown className={" w-6 h-6 cursor-pointer " + (rotate ? "rotate-0" : "rotate-90")} /></span>
        </button>
      </div>
      <div className="w-full">
        {/* shop lists  */}
        <div className={`${rotate ? "lg:w-[85%]" : "w-full"} duration-500 h-full flex flex-wrap justify-center gap-y-5 lg:justify-evenly pt-5`}>
          {active.map((items) => (

            <div key={items.id} className="w-[140px] relative lg:w-[390px] lg:h-auto border rounded-md shadow-lg cursor-pointer mx-2 my-4 lg:my-0 lg:flex" onClick={() => dispatch(selectItem(items))}>
              <div className="w-full lg:h-[180px] lg:w-[40%]  overflow-hidden rounded-t-md p-3 ">
                <Link to="/productpage" > <img
                  src={items.image}
                  alt="img"
                  className="w-full h-full object-contain"
                /> </Link>
                <MdFavoriteBorder className="w-6 h-6 absolute top-2 right-2 shadow-lg rounded-full p-1" onClick={() => handleAddToFav(items)} />
              </div>
              <div className="flex flex-col justify-between p-2 lg:p-4 px-4 items-start lg:w-[60%]">
                <p className="text-xl font-medium lg:font-bold ">{items.title}</p>
                <div className="hidden items-center justify-between lg:flex">
                  <div className="flex items-center">
                    <p className="mr-1">4.4(42)</p>
                    <span className="text-xs">(42 ratings)</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className='font-light lg:font-bold'>Price ₹{items.price}</p>
                  <p><span className='line-through text-gray-700 hidden lg:block'> ₹10699</span> </p>
                </div>
                <span className='text-green-600 hidden lg:block'>60% off</span>
                <p className="text-green-600 font-semibold">{items.offer}</p>
                <p className="text-xs hidden lg:block">Free delivery</p>
                <div className="w-full flex lg:justify-between ">

                  <button className="bg-blue-500 text-white py-2 px-2 lg:px-4 rounded hover:bg-blue-600 mt-2 text-xs"
                    onClick={() => handleAddToCart(items)} >ADD TO CART</button>

                </div>
              </div>
            </div>

          ))}
        </div>

        {/* category select button  */}
        <div className={`${rotate ? "right-3" : "-right-96"} z-50  w-48 backdrop-blur-lg border shadow-lg flex flex-col gap-4 justify-center p-5 absolute top-20 duration-500  `}>
          <ul>
            <h1 className="text-xl font-bold">Type</h1>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Indoor</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Outdoor</label>
            </li>
          </ul>
          <ul>
            <h1 className="text-xl font-bold">Room type</h1>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Living</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Bedroom</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Dining</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Studyroom</label>
            </li>
          </ul>
          <ul>
            <h1 className="text-xl font-bold">Category</h1>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Bed</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Sofa</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Table</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Chair</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Swingchair</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Cabinet</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Window</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Door</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Other</label>
            </li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Shop