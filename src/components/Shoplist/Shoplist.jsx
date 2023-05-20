import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectItem } from "../../redux/Features/searchProducts";
import { BiArrowBack } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Shoplist() {
  const { selectedProduct } = useSelector((state) => state.search);
  const { relateditems } = useSelector((state) => state.search);
  console.log("relateditems:", relateditems)
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen flex flex-col">
     <div className="w-full h-16 flex justify-center items-center gap-3 bg-gradient-to-r from-teal-200 to-teal-700 fixed top-0 left-0 ">
        <div className="">
          <Link to="/">
            <BiArrowBack className="w-6 h-6" />
          </Link>
        </div>
        
        <Link to="/search" className="w-[75%] relative ">
        <input
          className=" w-full  py-3 pl-10 text-sm rounded-md border text-gray-900  border-gray-300 placeholder:text-base placeholder:text-[#6e6e6e]"
          type="text"
          placeholder="Search products..."/>
          <IoSearchSharp className="w-6 h-6 absolute left-3 top-3 "/>
          </Link>
        
        <div className="">
          <Link to="/shop">
            <AiOutlineShoppingCart className="w-7 h-7" />
          </Link>
        </div>
      </div>



      {selectedProduct && (
        <div className=" w-full h-auto flex flex-col justify-center items-center p-3 bg-teal-600">
          <img src={selectedProduct.image} alt="" className="w-40 h-30 rounded-md" />
          <h2>{selectedProduct.title}</h2>
          <p>Price: {selectedProduct.price}</p>
        </div>
      )}
      <div className="w-full h-auto flex flex-col items-center  ">
         <h1 className="text-2xl p-5 font-extrabold">Related product</h1>

        <ul className="w-full p-5 flex flex-wrap items-start mt-2 gap-y-20 gap-x-20 "> 
          {relateditems.map((product) => (
            <Link to="/shop" key={product.id}>
              <li
                className="w-full h-full  flex justify-center gap-6 "
                onClick={() => dispatch(selectItem(product))}
              >
                <img className="w-20 h-20 rounded-lg" src={product.image} alt="" />
                {product.title.slice(0, 18)}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shoplist;
