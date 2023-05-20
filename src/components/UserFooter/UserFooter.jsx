import React from "react";

import { GrHomeRounded } from "react-icons/gr";
import { RiSearch2Line} from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function UserFooter() {
  const navigate = useNavigate()
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-14  bg-white sm:bg-transparent border-t sm:border-transparent lg:hidden">
      <div className="grid h-full grid-cols-5 mx-auto font-medium">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <GrHomeRounded className="w-6 h-6" onClick={()=>{navigate('/')}} />
          
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <RiSearch2Line className="w-7 h-7" onClick={()=>{navigate('/shop')}} />
         
      
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <TbCategory className="w-7 h-7" onClick={() => {navigate('/categori')}} />
          
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <AiOutlineShoppingCart className="w-8 h-8" onClick={()=>{navigate('/cart')}} />
         
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <BiMenu className="w-9 h-9" onClick={() => {navigate('/menu')}} />
         
        </button>
      </div>
    </div>
  );
}

export default UserFooter;
