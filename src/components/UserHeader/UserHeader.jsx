import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";
import { IoMdCart} from "react-icons/io";
import { RiArrowDropDownLine} from "react-icons/ri";
import SearchPanel from "../SearchPanel/SearchPanel";

function UserHeader() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden w-full h-14 lg:block"></div>
      <nav className="w-full h-14 flex items-center justify-between px-3 sm:justify-evenly sm:bg-[#2674f0] lg:fixed top-0">
        {/* logo name */}
        <a href="" className="max-w-max flex flex-col justify-center order-1 ">
          <span className="text-2xl font-acorn font-semibold tracking-wider first-letter:text-yellow-500 sm:text-white">
            Royal Wood
          </span>
          <span className="text-xs font-semibold tracking-wider leading-3 pl-1 sm:text-white">
            Industry
          </span>
        </a>

        {/* contact all */}
        <div className="max-w-max order-2 sm:order-3">
          <button className="flex items-center sm:text-white">
            <span className="text-sm md:text-[#2674f0] md:bg-white md:font-bold md:px-5 md:py-1">
              Contact
            </span>
            <HiChevronRight className="md:hidden" />
            <FiUser className="w-8 h-8 md:hidden" />
          </button>
        </div>

        {/* search panel  */}
        <div className="hidden sm:block order-2">
          <SearchPanel/>
        </div>
  
        {/* Menu items  */}
        <div className="hidden max-w-max order-4 lg:block">
          <ul className="font-medium text-white flex gap-6">
            <li>Store</li>
            <li>About</li>
            <li className="flex items-center">
              More{" "}
              <span>
                <RiArrowDropDownLine className="w-5 h-5 font-thin" />
              </span>
            </li>
          </ul>
        </div>

        {/* cart button  */}
        <div className="hidden max-w-max order-5 sm:block sm:text-white">
          <button className="flex gap-2 items-center ">
            <IoMdCart
              className="w-7 h-7"
              onClick={() => {
                navigate("/shop");
              }}
            />
            <span className="text-xl">Cart</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default UserHeader;
