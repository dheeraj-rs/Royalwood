import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import SearchPanel from "../SearchPanel/SearchPanel";
import { useDispatch } from "react-redux";
import { LoginpageOff, LoginpageOn } from "../../redux/Features/userToggle";
import { useNavigate } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

function HomeHeadNav() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showList, setShowList] = useState(false);
  const [showbtn, setShowbtn] = useState(false);

  // ----------------------------------------------------------------------
  const handleclick = () => {
    const phoneNumber = '918086022295';
    const message = 'Hai';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  // ----------------------------------------------------------------------

  const user = auth?.currentUser;
  useEffect(()=>{
    if (user) {
      setShowbtn(false)
    } else {
      setShowbtn(true)
    }
  })

  // ----------------------------------------------------------------------

  const handleLogout = async () => {
    setShowList(!showList);
    await signOut(auth);
    toast.success("Logged out successfully")
 };
  const handleLogin = async () => {
    dispatch(LoginpageOn())
 };
  // ----------------------------------------------------------------------



  return (
    <>
      <div className="w-full lg:h-32"></div>
      <header className="dark:bg-black dark:text-white bg-transparent absolute w-full top-0 z-20  border-b-[.5px] shadow-xl border-gray-900 py-4">
        <nav className=" p-3 md:p-5 flex justify-between md:gap-5  ">

          {/* logo */}
          <a className="flex text-2xl order-1 items-center md:text-3xl">
            <h1 className="font-extrabold ">RO<span className="text-lime-600">Y</span>AL</h1>
            <span className="font-thin">WOOD</span>
          </a>

          <div className="flex gap-6 order-2 md:order-3 items-center">

            {/* contact sm*/}
            <button className="" onClick={handleclick}>
              <span className="animate-pulse lg:shadow-lg md:bg-white md:font-bold md:px-5 md:py-1">
                Contact
              </span>
            </button>

            {/* user sm */}
            <button className=" md:hidden">
              {/* <span className=" font-acorn">Login</span> */}
              <FiUserCheck className="w-7 h-7 " onClick={() => dispatch(LoginpageOn())} />
            </button>
          </div>

          {/* search panel  */}
          <div className="hidden md:block order-2 md:min-w  lg:min-w-[300px] xl:min-w-[600px]">
            <div className=""></div>
            <SearchPanel />
          </div>

          <div className=" hidden  md:flex order-4 gap-10 ">

            {/* Menu items  */}
            <div className="hidden m-auto lg:block order-4" >
              <ul className="font-medium flex gap-6 ">
                <li onClick={() => { navigate('/shop') }}>Shop</li>
                <li className="w-full flex items-center hover relative z-50 " onClick={() => { navigate('/gallery') }}>Gallery</li>
              </ul>
            </div>

            {/* cart button lg */}
            <div className=" hidden m-auto md:block order-5">
              <button className="flex gap-2 items-center " onClick={() => { navigate('/cart') }} >
                <span className="text-lg ">Cart</span>
                <AiOutlineShoppingCart
                  className="w-7 h-7"
                  onClick={() => {
                    navigate("/shop");
                  }}
                />
              </button>
            </div>

            {/* login  */}


            <div className="hidden m-auto md:block order-6 ">
      <button className="flex items-center gap-2" onClick={()=>setShowList(!showList)}>
        <span className="">Login</span>
        <span className="w-10 h-10 bg-blue-gray-400 flex rounded-full">
          <img src={user?.photoURL}  alt="img" className="w-10 h-10 object-contain rounded-full" />
          {/* <FaUserCircle className="w-7 h-7 m-auto" /> */}
        </span>
      </button>

      {showList && (
        <div className="mt-2 p-2 px-10 bg-white rounded shadow absolute right-5">
          <ul className="space-y-2">
            <li className="text-gray-700 ">Name : Drj</li>
            <li className="text-gray-700 ">Email : {user?.email} </li>
            <li>

            {showbtn ?(
              <button
                className="text-red-500 hover:text-red-700 shadow-sm shadow-blue-gray-200 px-3"
                onClick={handleLogin}
              >
               login
              </button>):(<button
                className="text-red-500 hover:text-red-700 shadow-sm shadow-blue-gray-200 px-3"
                onClick={handleLogout}
              >
               logout
              </button>)}
            </li>
          </ul>
        </div>
      )}
    </div>




            {/* user button lg
            <div className=" hidden m-auto md:block order-6">
              <button className="flex items-center gap-2" onClick={() => dispatch(LoginpageOn())}>
                <span className="">{user.email}</span>
                <span className="w-10 h-10 bg-blue-gray-400 flex rounded-full">
                <FaUserCircle className="w-7 h-7 m-auto" />
                </span>
              </button>
            </div> */}

          </div>
        </nav>
      </header>
      <VideoCard /> {/* lg hidden */}
    </>
  );
}

export default HomeHeadNav;
