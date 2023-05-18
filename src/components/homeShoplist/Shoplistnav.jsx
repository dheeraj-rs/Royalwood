import { useState } from "react";
import { CgOptions } from "react-icons/cg";
import { HiSortDescending } from "react-icons/hi";

function Shoplistnav() {

  const [filterlist ,setFilterlist]=useState(true)
  const [sortlist ,setSortlist]=useState(true)

  const handlefilter =(()=>{
    setFilterlist(!filterlist)
    setSortlist(true)

  })
  const handlesort =(()=>{
    setSortlist(!sortlist)
    setFilterlist(true)

  })
  return (
    <div className=" w-full h-12 flex justify-center items-center shadow-sm  bg-white">
      <div className="w-[80%] h-[50%] flex">
        <div className=" w-1/2 h-full relative flex items-center justify-start border-2 border-t-transparent border-b-transparent border-l-transparent   border-r-[#83838334]">
          <button className=" flex gap-1 text-[13px] " onClick={handlesort}  >
            <HiSortDescending className="h-5 w-5 cursor-pointer " />
            Sort
            <ul className={` ${sortlist ? "hidden"  : "block"} duration-[1s] ease-in  w-full h-auto flex flex-col items-center gap-2 top-8 left-[-20px]  absolute bg-slate-300 p-2`}>
            <li className=" w-full bg-slate-600 text-zinc-50 rounded-md" >ww</li>
            <li className=" w-full bg-slate-600 text-zinc-50 rounded-md">ee</li>
            <li className=" w-full bg-slate-600 text-zinc-50 rounded-md">rr</li>
          </ul>
          </button>
        </div>
        <div className=" w-1/2 h-full  flex items-center justify-end border-2 border-t-transparent border-b-transparent border-r-transparent relative  border-l-[#83838334]">
          <button className=" w-full flex gap-1 text-[13px] justify-end  " onClick={handlefilter}>
            <CgOptions className="h-5 w-5 cursor-pointer " />
            Filters
            <ul className={` ${filterlist ? "hidden" : "block"} duration-500  w-full h-auto flex flex-col items-center gap-2 top-8 right-[-20px]  absolute bg-slate-300 p-2`}>
            <li className=" w-full bg-slate-600 text-zinc-50 rounded-md" >ww</li>
            <li className=" w-full bg-slate-600 text-zinc-50 rounded-md">ee</li>
            <li className=" w-full bg-slate-600 text-zinc-50 rounded-md">rr</li>
          </ul>
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Shoplistnav;
