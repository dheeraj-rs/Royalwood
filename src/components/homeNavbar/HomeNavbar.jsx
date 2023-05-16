import { IoMdCart, IoMdMenu } from "react-icons/io";
import { HiChevronRight, HiOutlineUser } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleon } from "../../redux/Features/usersidebarToggle";

function HomeNavbar() {
  const dispatch = useDispatch();
  return (
    <nav className="bg-gradient-to-r from-teal-200 to-teal-700 lg:flex lg:justify-center lg:items-center">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between  lg:justify-center md:gap-10 ">
        <div className="flex order-1 p-2 lg:py-2 text-white">
          <div className="flex lg:hidden">
            <button className="p-2">
              <IoMdMenu
                className="w-8 h-8 text-slate-600"
                onClick={() => dispatch(toggleon())}
              />
            </button>
          </div>
          <a href="" className="max-w-max flex flex-col justify-center">
            <span className="text-xl font-acorn font-semibold tracking-wider sm:text-2xl first-letter:text-red-700 first-of-type:text-indigo-500">
              RoyalWood
            </span>
            <span className="text-sm font-acorn font-semibold tracking-wider leading-3 pl-1">
              Industry
            </span>
          </a>
        </div>
        <div className="hidden p-2 relative lg:flex lg:order-2">
          <Link to="/search">
            <input
              type="text"
              className="min-w-[400px] p-2 pr-10 text-sm rounded-sm border bg-gray-50 text-gray-900 border-gray-300"
              placeholder="Search..."
            />
          </Link>
          <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
            <BsSearch className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center gap-5 mr-4 order-3">
          <div className="lg:ml-4 order-1 text-white">
            <button className="flex items-center">
              <span className="md:text-black  md:bg-white md:py-0.5 lg:py-0 text-sm md:px-6 ">
                Contact
              </span>
              <HiChevronRight className="md:hidden" />
              <HiOutlineUser className="w-8 h-8 md:hidden" />
            </button>
          </div>
          <div className="hidden w-auto order-2 text-white lg:ml-14 xl:block ">
            <ul className="font-medium  gap-10 flex  lg:gap-12">
              <li>
                <a href="" className="">
                  Store
                </a>
              </li>
              <li>
                <a href="" className="">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="order-3 lg:ml-20">
          <Link to="/shop">
            <button className="max-w-max flex gap-2 items-center text-white order-3">       
              <IoMdCart className="w-8 h-8" />
              <span className="hidden md:block sm:block">Cart</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
