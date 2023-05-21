import React, { useState } from "react";
import ShoplistContainer from "../homeShoplist/ShoplistContainer";
import UserFooter from "../UserFooter/UserFooter";
import UserSearchbutton from "../UserSearchbutton/UserSearchbutton";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function UserShoplist() {
  const navigate = useNavigate()
  const [rotate, setRotate] = useState(false);

  return (
    <>
      {/* shop navbar */}
      <div className="w-full h-14 flex justify-center items-center  sticky top-0 px-3 sm:hidden gap-2 bg-[#ffffffca]">
        <BiArrowBack className="w-10 h-10" onClick={() => { navigate(-1) }} />
        <div className=" w-full" onClick={() => { navigate('/search') }}>
          <UserSearchbutton />
        </div>
        <p className="font-semibold flex gap-2">Filters<span className="flex items-center font-medium">{'(1)'}
        <MdOutlineKeyboardArrowDown className={" w-6 h-6 cursor-pointer " + (rotate ? "rotate-0" : "rotate-90")}
                  onClick={() => setRotate(!rotate)} />
        </span></p>
      </div>

      {/* shop list  */}
      <ShoplistContainer />

      {/* footer nav  */}
      <UserFooter />
    </>
  );
}

export default UserShoplist;
