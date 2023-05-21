import React from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toggleon } from "../../redux/Features/usersidebarToggle";
import { useDispatch } from "react-redux";

function UserFooter() {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-14"></div>
      <div className="fixed bottom-0 left-0 w-full h-14  bg-white  sm:hidden ">
        <div className="grid h-full grid-cols-5 mx-auto font-medium">

          {/* Home  */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <GrHomeRounded className="w-6 h-6 " onClick={() => { navigate('/') }} />

            {/* shop search  */}
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <RiSearch2Line className="w-7 h-7 " onClick={() => { navigate('/shop') }} />

            {/* Category  */}
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <TbCategory className="w-7 h-7" onClick={() => { navigate('/categori') }} />

            {/* cart  */}
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <AiOutlineShoppingCart className="w-8 h-8 relative" onClick={() => { navigate('/cart') }} />
            <span className="w-2 h-2 animate-ping absolute inline-flex rounded-full opacity-75 bg-black bottom-8 right-[99px]"></span>

            {/* Menu  */}
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <BiMenu className="w-9 h-9" onClick={() => dispatch(toggleon())} />
            {/* <BiMenu className="w-9 h-9" onClick={() => { navigate('/menu') }} /> */}

          </button>
        </div>
      </div>
    </>
  );
}

export default UserFooter;
