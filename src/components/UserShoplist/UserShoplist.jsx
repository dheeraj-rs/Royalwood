import React from "react";
import ShoplistContainer from "../homeShoplist/ShoplistContainer";
import { GiSelfLove } from "react-icons/gi";
import SearchPanel from "../SearchPanel/SearchPanel";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import UserFooter from "../UserFooter/UserFooter";

function UserShoplist() {
    const navigate = useNavigate()

  return (
    <>
    <div className="w-full h-14 flex justify-center items-center  sticky top-0 px-3 sm:hidden gap-3">
    <BiArrowBack className="w-6 h-6" onClick={()=>{navigate(-1)}} />
      <div className="" onClick={()=>{navigate('/search')}}>
        <SearchPanel/>      
        </div> 
        
      <GiSelfLove className="w-8 h-8 text-red-600" />
    </div>
   <ShoplistContainer/>
   <UserFooter/>
   </>
  );
}

export default UserShoplist;
