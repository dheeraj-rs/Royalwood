import React from "react";
import { useSelector } from "react-redux";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function UserCategories() {
  const navigate = useNavigate()
  const { products } = useSelector((state) => state.search);
  return (
    <>
    {/* demmy div  */}
    <div className="w-full h-14"></div>

      {/* category page nav  */}
      <div className="w-full h-14 bg-[#2674f0] flex items-center justify-between px-5 text-white fixed top-0 ">
        <div className="min-w-max ">All Categories</div>
        <div className="w-full flex justify-end">
          <RiSearch2Line className="w-6 h-6  animate-bounce " onClick={() => { navigate('/search'); }} />
        </div>
      </div>

      {/* category maping now sample */}
      <div className=" w-full h-full grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8 m-auto p-3 gap-x-10 gap-y-6">
        {products.map((items) => (
          <div key={items.id} className=" flex flex-col items-center justify-center">
            <div className=" w-20 h-20">
              <img
                src={items.image}
                alt="img"
                className="rounded-3xl object-cover object-center w-full h-full"
              />
            </div>
            <div className="flex items-center justify-center w-full h-10">
              <p>{items.category.slice(0, 5)}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default UserCategories;
