import { CgOptions } from "react-icons/cg";
import { HiSortDescending } from "react-icons/hi";

function Shoplistnav() {
  return (
    <div className=" w-full h-12 flex justify-center items-center shadow-sm sticky top-0  bg-white">
      <div className="w-[80%] h-[50%] flex ">
        <div className=" w-1/2 h-full flex items-center justify-start border-2 border-t-transparent border-b-transparent border-l-transparent  border-r-[#83838334]">
          <button className=" flex gap-1 text-[13px] ">
            <HiSortDescending className="h-5 w-5 cursor-pointer" />
            Sort
          </button>
        </div>
        <div className=" w-1/2 h-full  flex items-center justify-end border-2 border-t-transparent border-b-transparent border-r-transparent  border-l-[#83838334]">
          <button className=" flex gap-1 text-[13px]">
            <CgOptions className="h-5 w-5 cursor-pointer" />
            Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shoplistnav;
