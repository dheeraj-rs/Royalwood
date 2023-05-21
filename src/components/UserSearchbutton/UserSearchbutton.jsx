import { useNavigate } from "react-router-dom";
import './UserSearchbutton.scss'
import { RiHeart2Line, RiSearch2Line } from "react-icons/ri";

function UserSearchbutton() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-14 flex justify-evenly items-center  sticky top-0 px-3 sm:hidden gap-3">

      {/* user Home nav btn  */}
      <div className=" relative w-full" onClick={() => { navigate('/search') }}>
        <input
          type="text"
          className=" w-full text-sm rounded-sm h-10 pl-10  border  bg-gray-50 text-gray-900 border-gray-300 sm:hidden  "
          placeholder="Search..."
        />
        <RiSearch2Line className="w-4 h-4 absolute left-3 top-4 text-gray-500 pointer-events-none animate-bounce  sm:hidden" />
      </div>
      {/* <RiHeart2Line className="w-10 h-10 font-thin " onClick={() => { navigate('/fvt') }} /> */}
    </div>
  );
}

export default UserSearchbutton;
