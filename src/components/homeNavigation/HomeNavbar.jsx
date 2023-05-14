import { useState } from "react";
import { IoMdCart, IoMdClose, IoMdMenu } from "react-icons/io";
import { HiChevronRight, HiOutlineUser } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
function HomeNavbar() {

  const [isVisible, setIsVisible] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState(-1023); 
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handlemenuToggle = () => {
    console.log(isVisible);
    setIsVisible(!isVisible);
    if (isVisible) {
      setNavbarPosition(-1023);
    } else {
      setNavbarPosition(0);
    }
  }

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    console.log(startX,'down');

  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const difference = event.clientX - startX;
      setNavbarPosition(Math.min(Math.max(-1023 + difference, -1023), 0));
      console.log(navbarPosition,'nav pos');
    }
  };

  const handleMouseUp = () => {
    console.log(isDragging,'drage');
    setIsDragging(false);

    if (navbarPosition > -1023) {
      setNavbarPosition(0);
      setIsVisible(true);
    } else {
      setNavbarPosition(-1023);
      setIsVisible(false);
    }
  };

  return (
    <nav className="bg-[#1f0c42]" >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between  lg:justify-center md:gap-10\">
        <div className="flex order-1 p-2 lg:py-2 text-white">
          <div className="flex lg:hidden">
            <button className="p-2">
              <IoMdMenu className="w-8 h-8" onClick={handlemenuToggle} />
            </button>
          </div>
          <a href="" className="max-w-max flex flex-col justify-center">
            <span className="text-xl font-acorn font-semibold tracking-wider sm:text-2xl first-letter:text-red-700 first-of-type:text-indigo-500">RoyalWood</span>
            <span className="text-sm font-acorn font-semibold tracking-wider leading-3 pl-1">Industry</span>
          </a>
        </div>
        <div className={`${isVisible ? "left-0" : "left-[-1023px]"} left-[-${navbarPosition}px] w-full absolute top-0 duration-[1.5s] ease-in-out text-white lg:hidden z-50 cursor-pointer`}>
          <div className="flex justify-end w-full h-screen bg-[#00000082]" onClick={handlemenuToggle} ><IoMdClose className="w-10 h-10" /></div>
          <ul className={` flex flex-col items-center justify-center font-medium  p-5 gap-10 text-xl w-3/4 h-full bg-[#000000e2]  absolute top-0  left-0`}
          onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            <li><a href="" className="">Home</a></li>
            <li><a href="" className="">Store</a></li>
            <li><a href="" className="cursor-wait">About</a></li>
          </ul>
        </div>
        <div className="hidden p-2 relative lg:flex lg:order-2">
          <input type="text" className="min-w-[400px] p-2 pr-10 text-sm rounded-sm border bg-gray-50 text-gray-900 border-gray-300" placeholder="Search..." />
          <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
            <BsSearch className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center gap-5 mr-4 order-3">
          <div className="lg:ml-4 order-1 text-white">
            <button className="flex items-center">
              <span className="md:text-black  md:bg-white md:py-0.5 lg:py-0 text-sm md:px-6 ">Contact</span>
              <HiChevronRight className="md:hidden" />
              <HiOutlineUser className="w-8 h-8 md:hidden" />
            </button>
          </div>
          <div className="hidden w-auto order-2 text-white lg:ml-14 xl:block ">
            <ul className="font-medium  gap-10 flex  lg:gap-12">
              <li><a href="" className="">Store</a></li>
              <li><a href="" className="">About</a></li>
            </ul>
          </div>
          <div className="order-3 lg:ml-20">
            <button className="max-w-max flex gap-2 items-center text-white order-3">
              <IoMdCart className="w-8 h-8" />
              <span className="hidden md:block sm:block">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HomeNavbar
