import { BiArrowBack } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebase";

function UserCart() {
  const navigate = useNavigate()
  const collectionRef = collection(db, 'furnitures');
  const [data, setData] = useState([]);

  const getChannelList = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const firebasedata = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(firebasedata);
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };

  useEffect(() => {
    getChannelList();
  }, []);

  return (
    <div className=" flex flex-col gap-2 h-screen">

      {/* My cart page head nav  */}
      <div className="">
        <div className="w-full h-32"></div>
        <nav className=" w-full bg-white fixed top-0 z-50 ">
          <div className=" w-full h-12 flex items-center gap-4 p-3 ">
            <BiArrowBack className="w-6 h-6" onClick={() => { navigate(-1); }} />
            <p className="">My Cart</p>
          </div>

          {/* show add cart items & wishlist  */}
          <div className=" w-full h-14  flex flex-row ">
            <div className=" w-1/2 flex items-center justify-center border cursor-default  border-b-4 border-x-0 border-y-0 border-blue-700 text-blue-700">
              <p>Your Cart</p>
            </div>
            <div className="w-1/2 flex items-center justify-center border cursor-pointer  border-b-2 border-x-0 border-y-0 border-stone-200"
              onClick={() => navigate('/fav')}>
              <p >Your Wish List</p>
            </div>
          </div>

          {/* Address add btn  */}
          <div className="w-full h-14 flex px-3 justify-between items-center ">
            <p className="text-sm font-light">From Addresses</p>
            <button className=" border border-slate-400 rounded-sm max-w-max p-2 text-xs text-blue-700 ">
              Enter Delivery Pincode
            </button>
          </div>
        </nav>
      </div>

      {/* cart list  */}
      <div className="lg:flex w-full h-full ">

        {/* cart items maping  */}
        <div className="w-full lg:w-[70%] h-auto flex flex-wrap  pt-5 lg:p-10 lg:overflow-y-scroll">
          {data.map((items) => (

            <div key={items.id} className="w-[400px] lg:h-[200px] border rounded-md shadow-lg cursor-pointer mx-2 my-4 lg:my-0 flex" >
              <div className=" lg:h-[200px] w-[30%] lg:w-[40%]  overflow-hidden rounded-t-md p-3 relative ">
                <img
                  src={items.image}
                  alt="img"
                  className="w-full h-full object-cover"
                />
                <MdFavoriteBorder className="w-6 h-6 absolute top-2 right-2 shadow-lg rounded-full p-1" />
              </div>

              <div className="flex flex-col justify-between p-2 lg:p-4 px-4 items-start w-[70%]">
                <p className="text-xl font-medium lg:font-bold ">{items.title}</p>
                <div className=" items-center justify-between flex">
                  <div className="flex items-center">
                    <p className="mr-1">4.4(42)</p>
                    <span className="text-xs">(42 ratings)</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <p className='font-light lg:font-bold'>Price ₹{items.price} </p>
                  <span className='line-through text-gray-700 '> ₹10699</span>
                  <span className='text-green-600'>60% off</span>
                </div>

                <p className="text-green-600 font-semibold">{items.offer}</p>
                <p className="text-xs hidden lg:block">Free delivery</p>
                <div className="w-full flex gap-5">
                  <button className="shadow-lg text-black py-2 px-2 lg:px-3 border border-black rounded hover:bg-blue-600 mt-2 text-xs">REMOVE</button>
                  <button className="shadow-lg text-black  py-2 px-2 lg:px-3 border border-black  rounded hover:bg-blue-600 mt-2 text-xs">CONTACT NOW</button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="w-full lg:w-[30%] lg:h-full shadow-lg border p-3 ">
          {/* price details  */}
          <div className=" w-full h-full flex flex-col">
            <div className="w-full h-full p-3 bg-white">
              <p className="py-5 font-semibold"> All Price Details</p>
              <ul className=" flex flex-col font-light ">
                <li className="flex justify-between py-1">
                  Price(1 item) <span>{"$9999"}</span>
                </li>
                <li className="flex justify-between py-1">
                  Discount <span className="text-green-600">{"-$2750"}</span>
                </li>
                <li className="flex justify-between py-1 border-b-2 border-dashed border-x-0 border-y-0 border-gray-300">
                  Delivery Charges{" "}
                  <span className="text-green-600">FREE Delivery</span>
                </li>
                <li className="flex justify-between py-5 font-semibold">
                  Total Amount<span>{"$7249"}</span>
                </li>
                <li className="flex justify-between py-2 text-green-600">
                  You will save {"$2750"} on this order
                </li>
              </ul>

              {/* Order place btn */}
              <div className=" h-12 bg-white flex border-y border-x-0 py-10 border-gray-300 mb-20 ">
                <div className="w-1/2 h-full flex flex-col justify-center ">
                  <p className="font-semibold">{"$7249"}</p>
                  <a href="" className="text-xs text-blue-700">
                    View Price details
                  </a>
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center items-end  ">
                  <button className=" bg-amber-400 w-max p-2 px-2 rounded-sm text-sm">
                    CONTACT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserCart;
