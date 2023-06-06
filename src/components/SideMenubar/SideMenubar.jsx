import { useDispatch, useSelector } from "react-redux";
import { toggleoff } from "../../redux/Features/userToggle";
import { useNavigate } from "react-router-dom";

function SideMenubar() {
  const dispatch = useDispatch();
  const { sidebarState } = useSelector((state) => state.sidebar);
  const navigate = useNavigate()
  return (
    <div className={`${sidebarState ? "right-0" : "right-[-1023px]"} h-full w-full top-0 right-0 fixed duration-500 ease-in text-white  z-[100] cursor-pointer  lg:hidden `} >

      {/* bg back side demmy div & unsing back button  */}
      <div className="flex justify-end w-full h-screen backdrop-blur-[1px] " onClick={() => dispatch(toggleoff())}>
        {/* <IoMdClose className="w-10 h-10" /> */}
      </div>
      <ul className={` flex flex-col items-center justify-center font-medium  p-5 gap-10 text-xl w-3/4 h-[60%] bg-[#000000e2] active:none  absolute bottom-16 right-0 rounded-l-lg z-50`}>
        <li className=" hover:bg-blue-gray-500 p-3 px-20 rounded-bl-lg select-none" onClick={() => { navigate('/'), dispatch(toggleoff()) }} >Home</li>
        <li className=" hover:bg-blue-gray-500 p-3 px-20 rounded-bl-lg select-none" onClick={() => { navigate('/shop'), dispatch(toggleoff()) }} >Store</li>
        <li className=" hover:bg-blue-gray-500 p-3 px-20 rounded-bl-lg select-none" >About</li>
        <li className=" hover:bg-blue-gray-500 p-3 px-20 rounded-bl-lg select-none" >Settings</li>
      </ul>
    </div>
  );
}

export default SideMenubar;
