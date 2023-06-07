import React from 'react'
import { Selectedcategorie, selectItem } from "../../redux/Features/searchProducts";
import SearchPanel from "../SearchPanel/SearchPanel";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { RiHeart2Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Shop() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const collectionRef = collection(db, "furnitures");
  const { selectedcategorie } = useSelector((state) => state.search);

  const [rotate, setRotate] = useState(false);
  const [data, setData] = useState([]);
  const[selectdata,setSelectdata] = useState ([]);
  const [active,setActive]=useState([])

  const getChannelList = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const firebasedata = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(firebasedata)
      const filterdata = firebasedata.filter(item => item.categories.includes(selectedcategorie));
      setSelectdata(filterdata);

    } catch (error) {
      console.error("Error getting documents:", error);
    }
  };

  useEffect(() => {
    getChannelList();
  }, []);

  useEffect(()=>{
    if (selectdata == '') {
      setActive(data)     
    }else{
      setActive(selectdata)
    }
  },[data])

  const handleback = () => {
    dispatch(Selectedcategorie(''))
    navigate(-1);
  }
  

  return (
    <div className="w-full h-auto overflow-hidden relative z-50 ">
      <div className="w-full h-14 flex justify-center items-center px-3 gap-2 " >
        {/* back button  */}
        <BiArrowBack className="w-8 h-8" onClick={handleback } />
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
            <Link to="/productpage" key={items.id}>
              <div className="w-[140px] relative lg:w-[390px] lg:h-auto border rounded-md shadow-lg cursor-pointer mx-2 my-4 lg:my-0 lg:flex" onClick={() => dispatch(selectItem(items))}>
                <div className="w-full lg:h-[180px] lg:w-[40%]  overflow-hidden rounded-t-md p-3 ">
                  <img
                    src={items.image}
                    alt="img"
                    className="w-full h-full object-contain"
                  />
                  <MdFavoriteBorder className="w-6 h-6 absolute top-2 right-2 shadow-lg rounded-full p-1" />
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
                    <button className="bg-blue-500 text-white py-2 px-2 lg:px-4 rounded hover:bg-blue-600 mt-2 text-xs">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </Link>
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