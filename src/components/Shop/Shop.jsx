import React from 'react'
import { Addcart, Addfav, Selectedcategorie, selectItem } from "../../redux/Features/searchProducts";
import SearchPanel from "../SearchPanel/SearchPanel";
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { MdFavoriteBorder, MdZoomOutMap } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { RiHeart2Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import { LoginpageOn, Mouseleavesearch } from '../../redux/Features/userToggle';

function Shop1() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const furnituresRef = collection(db, "furnitures"); // database get furnitures collection
  const { selectedcategorie } = useSelector((state) => state.search); // redux storing sellected categories


  const [rotate, setRotate] = useState(false);  // filter button rotate arrow & filterpage
  const [data, setData] = useState([]); // collection furnitures data
  const [selectdata, setSelectdata] = useState([]); // filter the sellected categories data
  const [active, setActive] = useState([]) // select items or all items show the output

  const [filteredData, setFilteredData] = useState([]);
  const [stoggle, setstoggle] = useState(true);



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
    if (selectdata.length === 0) {
      setActive(data)
    } else {
      setActive(selectdata)
    }
  }, [data, selectdata])


  useEffect(() => {
    if (filteredData.length > 0) {
      setActive(filteredData);
    }
  }, [filteredData]);

  // ----------------------------------------------------------------------

  // add to cart button click
  const handleAddToCart = async (cartitem) => {
    const user = auth?.currentUser;
    if (user !== null) {
      const uid = user.uid;
      const uemail = user.email;
      const verifiedemail = user.emailVerified;
      const productid = cartitem.id;
      const Quantity = 1;
      const Price = cartitem.price;
      const PriceMRP = cartitem.priceMRP;
      const Discount = cartitem.Discount;
      postData(uid, uemail, verifiedemail, productid, Quantity, Price,Discount,PriceMRP)
    } else {
      dispatch(LoginpageOn());
    }
  };

  // cart item post to database
  const postData = async (uid, uemail, verifiedemail, productid, Quantity, Price,Discount,PriceMRP) => {
    try {
      const cartRef = collection(db, 'cart');
      const querySnapshot = await getDocs(cartRef);
      const cartData = querySnapshot.docs.find((doc) => doc.data().productid === productid);

      if (cartData) {
        const docRef = doc(db, 'cart', cartData.id);
        await updateDoc(docRef, {
          userid: uid,
          email: uemail,
          verified: verifiedemail,
          productid: productid,
          price: Price,
          priceMRP: PriceMRP,
          quantity: cartData.data().quantity + Quantity,
          Discount:Discount,


        }).then(toast.success('Quantity updated successfully'))
      } else {
        await addDoc(cartRef, {
          userid: uid,
          email: uemail,
          verified: verifiedemail,
          productid: productid,
          quantity: Quantity,
          price: Price,
          priceMRP: PriceMRP,
          Discount:Discount,
        }).then(toast.success('Product added to your cart successfully'))
      }
    } catch (error) {
      throw error;
    }
  };


  // ----------------------------------------------------------------------
  // add to Fav button click
  const handleAddToFav = async (favitem) => {
    const user = auth?.currentUser;
    if (user !== null) {
      const uid = user.uid;
      const uemail = user.email;
      const verifiedemail = user.emailVerified;
      const favId = favitem.id;
      const Quantity = 1;
      const Price = favitem.price;

      postFav(favId, uid, uemail, verifiedemail, Quantity, Price)
    } else {
      dispatch(LoginpageOn())
    }
  };
  const postFav = async (favId, uid, uemail, verifiedemail, Quantity, Price) => {
    try {
      const user = auth.currentUser;
      if (user !== null) {
        const favRef = collection(db, 'fav');
        const querySnapshot = await getDocs(favRef);
        const cartData = querySnapshot.docs.find((doc) => doc.data().favId === favId);
        if (!cartData) {
          await addDoc(favRef, {
            favId: favId,
            userid: uid,
            email: uemail,
            verified: verifiedemail,
            quantity: Quantity,
            price: Price,

          }).then( toast.success('Product add your Fav successfully'))

        } else { toast.error('Product is already in your fav'); }
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


  const handleType = async (key) => {
    await dispatch(Selectedcategorie(key));

    if (key) {
      const getcategorie = data.filter(item => item.categories.includes(key));
      setFilteredData(getcategorie);
    } else {
      setFilteredData([]);
    }
  };




  const searchOn = () => {
    setstoggle(!stoggle)
  }

  return (
    <div className="w-full h-auto overflow-hidden relative z-50 " onClick={() => dispatch(Mouseleavesearch(false))}>

      <div className="  flex  py-3 border-b border-blue-gray-100 ">
        <div className=" w-full flex items-center justify-between    ">
          <div className="px-4 ">
            {/* back button */}
            <BiArrowBack className="w-8 h-8  " onClick={handleback} />
          </div>

          {/* <div className=" w-full h-14 flex items-center justify-end pr-5 px-3 gap-2 bg-lime-800"> */}
          <div className={`${stoggle ? 'w-full ' : 'w-auto'} h-14  flex items-center justify-end  px-10 gap-3  duration-1000`} >
            {/* search container */}
            <div className={`${stoggle ? 'w-full ' : 'w-auto'}`}> <SearchPanel /></div>
            <MdZoomOutMap className={`${stoggle ? 'rotate-90' : ''} w-6 h-6 duration-1000`} onClick={searchOn} />
          </div>

        </div>

        <div className="gap-2 hidden lg:flex">
          {/* Favorite btn */}
          <button className="font-semibold flex gap-2 items-center shadow-lg px-5 py-2" onClick={() => { navigate('/fav') }}>
            Fav<RiHeart2Line className="w-6 h-6" />
          </button>
          {/* cart button lg */}
          <button className="flex font-semibold gap-2 items-center shadow-lg px-5 py-2" onClick={() => { navigate('/cart') }}>
            <span>Cart</span>
            <AiOutlineShoppingCart className="w-6 h-6" onClick={() => { navigate("/shop") }} />
          </button>

          {/* filter button */}
          <button className="font-semibold flex gap-2  items-center px-5 py-2"
            onClick={() => setRotate(!rotate)}>
            Filters<span className="flex items-center font-medium">{'(1)'}
              <MdOutlineKeyboardArrowDown

                className={` text-2xl ${rotate ? 'transform rotate-180' : ''
                  }`} /></span>
          </button>
        </div>
      </div>

      <div className="w-auto overflow-x-scroll">
        <div
          className={`transition-all duration-1000 ease-in-out overflow-hidden ${rotate ? 'h-16' : 'h-0'
            }`} >
          <div className="flex justify-center my-2">
            <button
              onClick={() => { setActive(data); handleType('data') }}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'data' ? 'bg-gray-800 text-white' : ''}`}>
              All
            </button>

            <button
              onClick={() => handleType('Indoor')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'Indoor' ? 'bg-gray-800 text-white' : ''}`}>
              Indoor
            </button>

            <button
              onClick={() => handleType('Outdoor')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'Outdoor' ? 'bg-gray-800 text-white' : ''}`}>
              Outdoor
            </button>

            <button
              onClick={() => handleType('Bedroom')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'Bedroom' ? 'bg-gray-800 text-white' : ''}`}
            >
              Bedroom
            </button>
            <button
              onClick={() => handleType('Living')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 ${selectedcategorie === 'Living' ? 'bg-gray-800 text-white' : ''
                }`}
            >
              Living
            </button>
            <button
              onClick={() => handleType('Dining')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'Dining' ? 'bg-gray-800 text-white' : ''}`}>
              Dining
            </button>
            <button
              onClick={() => handleType('Studyroom')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'Studyroom' ? 'bg-gray-800 text-white' : ''}`}>
              Studyroom
            </button>
            <button
              onClick={() => handleType('Bed')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'Bed' ? 'bg-gray-800 text-white' : ''}`}>
              Bed
            </button>
            <button
              onClick={() => handleType('Sofa')}
              className={`px-4 py-2 mx-2 rounded-md border-2 border-gray-800 
            ${selectedcategorie === 'Sofa' ? 'bg-gray-800 text-white' : ''}`}>
              Sofa
            </button>
          </div>

        </div>
      </div>

      {/* shop lists */}
      <div className={` duration-500 h-full flex flex-wrap justify-center gap-y-5 lg:justify-evenly pt-5`}>
        {active.map((items) => (
          <div key={items.id} data-aos="zoom-in-up" className="  w-[140px] relative lg:w-[390px] lg:h-auto border rounded-md shadow-lg cursor-pointer mx-2 my-4 lg:my-0 lg:flex" onClick={() => dispatch(selectItem(items))}>
            <div className="w-full lg:h-[180px] lg:w-[40%]  overflow-hidden rounded-t-md p-3">
              <Link to="/productpage">
                <img
                  src={items.image}
                  alt="img"
                  className="w-full h-full object-contain"
                />
              </Link>
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
                <p className="font-light lg:font-bold">Price ₹{items.price}</p>
                <p><span className="line-through text-gray-700 hidden lg:block">{items.priceMRP}</span> </p>
              </div>
              <span className="text-green-600 hidden lg:block">{items.Discount}% off</span>
              <p className="text-green-600 font-semibold">{items.offer}</p>
              <p className="text-xs hidden lg:block">Free delivery</p>
              <div className="w-full flex lg:justify-between ">
                <button className="bg-blue-500 text-white py-2 px-2 lg:px-4 rounded hover:bg-blue-600 mt-2 text-xs" onClick={() => handleAddToCart(items)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop1