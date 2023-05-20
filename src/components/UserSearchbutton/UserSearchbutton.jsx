import { GiSelfLove } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import SearchPanel from "../SearchPanel/SearchPanel";
import './UserSearchbutton.scss'
function UserSearchbutton() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-14 flex justify-evenly items-center  sticky top-0 px-3 sm:hidden gap-3">
      <div className="" onClick={()=>{navigate('/search')}}>
        <SearchPanel/>
        </div> 
      <GiSelfLove className="w-8 h-8 text-red-600 " onClick={()=>{navigate('/fvt')}} />
    </div>
  );
}

export default UserSearchbutton;
