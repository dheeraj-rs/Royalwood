import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserFooter from "../UserFooter/UserFooter";
import SearchPanel from "./SearchPanel";
import { BiArrowBack, BiLoaderCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

function SearchMobilePanel() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* demmy div  */}
      <div className="w-full h-16"></div>

      {/* mobile view searchpage navbar */}
      <div className="w-full h-16 flex justify-center items-center gap-3 fixed top-0 left-0 ">
        <div className="w-[80%] relative ">
          <SearchPanel />
          <BiLoaderCircle className="w-5 h-5 text-gray-500 absolute left-3 top-2.5 pointer-events-none sm:hidden animate-spin" />
          {/* <BsSearch className="w-4 h-4 text-gray-500 absolute left-3 top-3 pointer-events-none sm:hidden" /> */}
        </div>
        <BiArrowBack className="w-6 h-6" onClick={() => { navigate(-1); }} />
      </div>

      {/* nav bottom loding effect  */}
      <div className={`${isVisible ? "block" : "hidden"} w-full h-1 bg-gray-200`}>
        <div className="h-full bg-blue-600 animate-pulse" style={{ width: "100%" }}></div>
      </div>

      {/* all footer nav  */}
      <UserFooter />
    </>
  );
}

export default SearchMobilePanel;
