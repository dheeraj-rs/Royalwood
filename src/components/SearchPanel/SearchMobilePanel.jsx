import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchPanel from "./SearchPanel";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import UserFooter from "../UserFooter/UserFooter";

function SearchMobilePanel() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <div className="w-full h-16"></div>
      <div className="w-full h-16 flex justify-center items-center gap-3 bg-gradient-to-r from-teal-200 to-teal-700 fixed top-0 left-0  ">
        <div className="">
          <Link to="/">
            <BiArrowBack className="w-6 h-6" />
          </Link>
        </div>

        <SearchPanel />

        <div className="">
          <Link to="/shop">
            <AiOutlineShoppingCart className="w-7 h-7" />
          </Link>
        </div>
      </div>

      <div
        className={`${
          isVisible ? "block" : "hidden"
        } w-full h-1 bg-gray-200`}
      >
        <div
          className="h-full bg-blue-600 animate-pulse"
          style={{ width: "100%" }}
        ></div>
      </div>
      <UserFooter />
    </>
  );
}

export default SearchMobilePanel;
