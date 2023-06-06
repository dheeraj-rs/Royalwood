import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { selectedProduct } = useSelector((state) => state.search);
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const quantityCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleclick = (item) => {
    const phoneNumber = '918086022295';
    const message = `product is : ${item.title} 
    price : ${item.price} `;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 px-3 ">
      <div className="flex justify-center items-center flex-col gap-3 ">

        {/* navbar */}
        <div className="w-full h-12 flex items-center p-3 bg-slate-800 gap-10">
          <BiArrowBack className="w-6 h-6" onClick={() => { navigate(-1); }} />
          <p className="font-normal text-sm leading-4 text-gray-600"> Home / shop / product details</p>
        </div>

        {selectedProduct && (

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            {/* Head titile */}
            <h2 className="font-semibold text-3xl leading-9 text-gray-800 ">{selectedProduct.title.slice(0, 10)}</h2>

            {/* Images Div */}
            <div className=" w-full flex justify-center items-center">
              <img src={selectedProduct.image} alt="Product Previw" className="w-40 h-30 rounded-md " />
            </div>

            {/* remview star */}
            <div className=" flex flex-row justify-between  mt-5">
              <div className=" flex flex-row space-x-3">
                <AiFillStar className="w-6 h-6" />
                <AiFillStar className="w-6 h-6 " />
                <AiFillStar className="w-6 h-6" />
                <AiFillStar className="w-6 h-6" />
                <AiOutlineStar className="w-6 h-6" />
              </div>
              <p className=" font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">22 reviews</p>
            </div>

            {/* price  */}
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">$ {selectedProduct.price}</p>

            {/* detail titile  */}
            <p className="text-lg font-normal leading-6 text-gray-600 mt-7">{selectedProduct.title}</p>

            {/* product quality*/}
            <div className="mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                <div className="flex">
                  <span onClick={quantityCount} className=" cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"> - </span>
                  <input aria-label="input" className="border border-gray-300 h-full text-center w-14 " type="number" value={count}
                    onChange={(e) => e.target.value} />
                  <span
                    onClick={addCount}
                    className=" cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "> + </span>
                </div>
              </div>

              {/* boder line  */}
              <hr className=" bg-gray-200 w-full my-2" />
              <div className="flex flex-row justify-between items-center mt-4">
                <p className="font-medium text-base leading-4 text-gray-600"> Dimensions</p>
                <MdOutlineKeyboardArrowDown className={" w-10 h-10 cursor-pointer " + (rotate ? "rotate-180" : "rotate-0")}
                  onClick={() => setRotate(!rotate)} />
              </div>
              {/* boder line  */}
              <hr className=" bg-gray-200 w-full mt-4" />
            </div>

            {/* add button  */}
            <button className=" hover:bg-black font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 mt-6" >
              <p onClick={() => handleclick(selectedProduct)}>Add to shopping bag</p>
            </button>
          </div>)}
      </div>
    </div>
  );
};

export default ProductDetails;
