import React from "react";
import { useNavigate } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { toggleon } from "../../redux/Features/userToggle";
import { useDispatch } from "react-redux";
import { AiOutlineFundView } from "react-icons/ai";

function MainFooter() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-14 md:hidden "></div>
      <div className="fixed bottom-0 w-full h-14 p-3 md:hidden dark:bg-black dark:text-white backdrop-blur-sm z-50">
        <nav className="flex">

          {/* Home btn bottom*/}
          <button
            type="button"
            className="m-auto"
            onClick={() => { navigate('/') }}>
            <GrHomeRounded className="w-6 h-6 " />
          </button>

          {/* shop search  */}
          <button
            type="button"
            className="m-auto"
            onClick={() => { navigate('/shop') }} >
            <AiOutlineFundView className="w-8 h-8" />
          </button>

          {/* watsapp  */}
          <button
            type="button"
            className="m-auto"
            onClick={() => { navigate('/gallery') }}>
            <TbCategory className="w-8 h-8" />
          </button>

          {/* cart  */}
          <button
            type="button"
            className="m-auto"
            onClick={() => { navigate('/cart') }} >
            <svg viewBox="0 0 1135 1024" className="w-6 h-6"  ><path d="M564.584 448.346c-116.238 0-215.87-88.562-215.87-210.335h-83.027c5.535 160.519 132.843 287.827 293.362 287.827 5.535 0 5.535 0 11.070 0 160.519 0 293.362-127.308 293.362-287.827h-83.027c0 116.238-99.632 210.335-215.87 210.335z"></path><path d="M1035.070 0h-935.438c-55.351 0-99.632 44.281-99.632 99.632v819.2c0 55.351 44.281 99.632 99.632 99.632h929.903c55.351 0 99.632-44.281 99.632-99.632v-819.2c5.535-55.351-38.746-99.632-94.097-99.632zM1051.676 924.368c0 11.070-11.070 16.605-16.605 16.605h-935.438c-11.070 0-16.605-11.070-16.605-16.605v-824.735c0-11.070 11.070-16.605 16.605-16.605h929.903c11.070 0 16.605 11.070 16.605 16.605v824.735z"></path></svg>
          </button>

          {/* Menu  */}
          <button
            type="button"
            className="m-auto"
            onClick={() => dispatch(toggleon())} >
            <svg viewBox="0 0 1409.4 1024" className="w-6 h-6" ><path d="M1.4 0h1408v83h-1408v-83z"></path><path d="M1.4 470.5h1408v83h-1408v-83z" ></path><path d="M1.4 941h1408v83h-1408v-83z"></path></svg>
          </button>
        </nav>
      </div>
    </>
  );
}

export default MainFooter;
