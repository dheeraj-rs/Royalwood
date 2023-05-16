import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
function HomeSearchbar() {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-700">
      <div className="relative p-2 sm:block lg:hidden">
        <Link to="/search">
          <input
            type="text"
            className="w-full p-2  pl-10 text-sm rounded-sm border text-gray-900 bg-gray-50 border-gray-300"
            placeholder="Search..."
          />
        </Link>
        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <BsSearch className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default HomeSearchbar;
