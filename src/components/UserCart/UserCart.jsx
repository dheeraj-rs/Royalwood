import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function UserCart() {
  const navigate = useNavigate()
  return (
    <div className=" flex flex-col gap-2 bg-gray-200">

      {/* My cart head nav  */}
      <div className=" w-full bg-white">
        <div className=" w-full h-12 flex items-center gap-4 p-3 ">
          <BiArrowBack className="w-6 h-6" onClick={() => { navigate(-1); }} />
          <p className="">My Cart</p>
        </div>

        {/* show add cart items & wishlist  */}
        <div className=" w-full h-14  flex flex-row ">
          <div className=" w-1/2 flex items-center justify-center border  border-b-4 border-x-0 border-y-0 border-blue-700 text-blue-700">
            <p>Your Cart</p>
          </div>
          <div className="w-1/2 flex items-center justify-center border  border-b-2 border-x-0 border-y-0 border-stone-200">
            <p>Your Wish List</p>
          </div>
        </div>

        {/* Address add btn  */}
        <div className="w-full h-14 flex px-3 justify-between items-center ">
          <p className="text-sm font-light">From Addresses</p>
          <button className=" border border-slate-400 rounded-sm max-w-max p-2 text-xs text-blue-700 ">
            Enter Delivery Pincode
          </button>
        </div>

      </div>

      {/* cart products  */}
      <div className="w-full h-auto flex flex-col bg-gray-200 gap-2">
        <div className="w-full h-48 bg-gray-300 p-2">
          <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""
          className="object-contain"
          />
          <p>products</p>
        </div>
      </div>

      {/* price details  */}
      <div className=" w-full h-auto bg-slate-900 flex flex-col">
        <div className="w-full h-full p-3 bg-white">
          <p className="py-2 font-semibold">Price Details</p>
          <ul className=" flex flex-col font-light ">
            <li className="flex justify-between py-1">
              Price(1 item) <span>{"$9999"}</span>
            </li>
            <li className="flex justify-between py-1">
              Discount <span className="text-green-600">{"-$2750"}</span>
            </li>
            <li className="flex justify-between py-1 border-b-2 border-dashed border-x-0 border-y-0 border-gray-300">
              Delivery Charges{" "}
              <span className="text-green-600">FREE Delivery</span>
            </li>
            <li className="flex justify-between py-2 font-semibold">
              Total Amount<span>{"$7249"}</span>
            </li>
            <li className="flex justify-between py-2 text-green-600">
              You will save {"$2750"} on this order
            </li>
          </ul>
        </div>
      </div>

      {/* Order place btn */}
      <div className="w-full h-12  sticky bottom-14 bg-white flex border-y  border-x-0 px-2 border-gray-300">
        <div className="w-1/2 h-full flex flex-col justify-center ">
          <p className="font-semibold">{"$7249"}</p>
          <a href="" className="text-xs text-blue-700">
            View Price details
          </a>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-end ">
          <button className=" bg-amber-400 w-max p-2 px-7 rounded-sm">
            Place Order
          </button>
        </div>
      </div>

      {/* related items dont miss  */}
      <div className="w-full h-60 mb-2 bg-white ">
        <div className="w-full h-1/5 flex items-center p-2">
          <p>Items You may have missed</p>
        </div>

        {/* slide div  */}
        <div className="w-full h-4/5  overflow-x-auto ">
          <div className=" w-[200%] h-full flex gap-2">
            <div className="h-full w-36 rounded-md border border-gray-200">
            <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""
          className="object-cover w-full h-full"/>
            </div>
            <div className="h-full w-36 rounded-md border border-gray-200">
            <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""
          className="object-cover w-full h-full"/>
            </div>
            <div className="h-full w-36 rounded-md border border-gray-200">
            <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""
          className="object-cover w-full h-full"/>
            </div>
            <div className="h-full w-36 rounded-md border border-gray-200">
            <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""
          className="object-cover w-full h-full"/>
            </div>
            <div className="h-full w-36 rounded-md border border-gray-200">
            <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""
          className="object-cover w-full h-full"/>
            </div>
            <div className="h-full w-36 rounded-md border border-gray-200">
            <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg" alt=""
          className="object-cover w-full h-full"/>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserCart;
