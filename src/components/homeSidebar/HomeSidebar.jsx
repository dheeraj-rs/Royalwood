import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleoff } from "../../redux/Features/usersidebarToggle";
import { useEffect } from "react";

function HomeSidebar() {
  const dispatch = useDispatch();
  const { sidebarState } = useSelector((state) => state.sidebar);
  useEffect(() => {
    console.log(
      "🚀 ~ file: HomeSidebar.jsx:9 ~ HomeSidebar ~ sidebarState:",
      sidebarState
    );
  }, [sidebarState]);

  return (
    <div
      className={`${
        sidebarState ? "left-0" : "left-[-1023px]"
      } h-screen w-full fixed top-0 duration-[1.5s] ease-in-out text-white lg:hidden z-50 cursor-pointer`}
    >
      <div
        className="flex justify-end w-full h-screen bg-[#00000082]"
        onClick={() => dispatch(toggleoff())}
      >
        <IoMdClose className="w-10 h-10" />
      </div>
      <ul
        className={` flex flex-col items-center justify-center font-medium  p-5 gap-10 text-xl w-3/4 h-full bg-[#000000e2]  absolute top-0  left-0`}
      >
        <li>
          <a to="/*" className="">
            Home
          </a>
        </li>
        <li>
          <a href="" className="">
            Store
          </a>
        </li>
        <li>
          <a href="" className="cursor-wait">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HomeSidebar;
