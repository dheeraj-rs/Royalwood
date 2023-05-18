import { AiOutlineShoppingCart } from "react-icons/ai";
import {IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import filterdata from "../../firebase/Config";
function HomeSearchbar() {
  console.log('hhhhh',filterdata);
  return (
    <div className="w-full h-16 flex bg-gradient-to-r from-teal-200 to-teal-700">
      
      <div className="w-full relative px-4 sm:block lg:hidden flex flex-row items-center gap-2 ">
        <Link to="/search" className="w-full">
          <input
            type="text"
            className="w-full py-3 pl-10 text-sm rounded-md border text-gray-900  border-gray-300 placeholder:text-base placeholder:text-[#6e6e6e]"
            placeholder="Search furnitures..."
          />
        </Link>
        <AiOutlineShoppingCart className="w-8 h-8" />
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <IoSearchSharp className="w-6 h-6 text-black" />
        </div>
      </div>    
    </div>
  );
}

export default HomeSearchbar;
