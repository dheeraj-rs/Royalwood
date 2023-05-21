import React from "react";
import { useNavigate } from "react-router-dom";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./UserHeader.scss";
import { FaUserCircle } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

function UserHeader() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden w-full h-14 lg:block"></div>
      <nav className="w-full h-14 flex items-center justify-between px-3 sm:justify-evenly sm:bg-[#2674f0] lg:fixed top-0 ">
        {/* logo name */}
        <a href="" className="max-w-max flex flex-col justify-center order-1 ">
          <span className="text-2xl font-acorn font-semibold tracking-wider first-letter:text-yellow-500 sm:text-white">
            Royal Wood
          </span>
          <span className="text-xs font-semibold tracking-wider leading-3 pl-1 sm:text-white">
            Industry
          </span>
        </a>

        <div className=" min-w-max order-2 flex gap-5 sm:order-3 justify-between">
          {/* contact sm*/}
          <div className="max-w-max order-2 sm:order-3">
            <button className="flex items-center sm:text-white">
              <span className=" animate-pulse font-acorn sm:block md:text-[#2674f0] md:bg-white md:font-bold md:px-5 md:py-1">
                Contact
              </span>
            </button>
          </div>

          {/* user sm */}
          <div className=" max-w-max order-3  sm:hidden">
            <button className="flex gap-2 items-center ">
              {/* <span className=" font-acorn">Login</span> */}
              <FiUserCheck className="w-7 h-7 " />
            </button>
          </div>
        </div>

        {/* search panel  */}
        <div className="hidden sm:block order-2 ">
          <SearchPanel />
        </div>

        {/* Menu items  */}
        <div className="hidden max-w-max order-4 lg:block">
          <ul className="font-medium text-white flex gap-6">
            <li>Store</li>
            <li className="w-full flex items-center hover relative z-50 ">
              More
              <span>
                <RiArrowDropDownLine className="w-5 h-5 font-thin" />
              </span>
              <ul className=" hidden w-24 h-40 absolute -left-3 top-2 bg-white  flex-col gap-4 z-10">
                <li className="  "></li>
                <li>About2</li>
                <li>About3</li>
                <li>About4</li>
                <li>Abou5</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* cart button lg */}
        <div className=" hidden sm:block max-w-max order-5 sm:text-white ">
          <button className="flex gap-2 items-center ">
            <span className="text-lg hidden lg:block">Cart</span>
            <AiOutlineShoppingCart
              className="w-7 h-7"
              onClick={() => {
                navigate("/shop");
              }}
            />
          </button>
        </div>

        {/* user button lg */}
        <div className=" hidden max-w-max order-6 sm:block text-white ">
          <button className="flex gap-2 items-center ">
            <span className=" md:hidden lg:block">Login</span>
            <FaUserCircle className="hidden w-8 h-8 md:block " />
          </button>
        </div>
      </nav>
    </>
  );
}

export default UserHeader;
