import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectItem } from "../../redux/Features/searchProducts";
import { FaShopify } from "react-icons/fa";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

function Shoplist() {
  const { selectedProduct } = useSelector((state) => state.search);
  const { relateditems } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  console.log("relateditems:", relateditems);
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-16 flex justify-center items-center gap-2 bg-gradient-to-r from-teal-200 to-teal-700">
        <div className="">
          <Link to="/">
            <HiOutlineArrowSmLeft className="w-10 h-10" />
          </Link>
        </div>
        <Link to="/search" className="w-[80%] p-2">
          <input
            className="w-full h-full p-2"
            type="text"
            placeholder="Search products..."
          />
        </Link>
        <div className="">
          <Link to="/shop">
            <FaShopify className="w-10 h-10" />
          </Link>
        </div>
      </div>
      {selectedProduct && (
        <div className="bg-cyan-400 w-full h-auto flex flex-col justify-center items-center">
          <img src={selectedProduct.image} alt="" className="w-40 h-30" />
          <h2>{selectedProduct.title}</h2>
          <p>Price: {selectedProduct.price}</p>
        </div>
      )}
      <div className="w-full h-auto ">
        <ul className="w-full flex flex-wrap items-start p-2 mt-10">
          {relateditems.map((product) => (
            <Link to="/shop" key={product.id}>
              <li
                className="w-[200px] h-[200px] flex justify-center items-center"
                onClick={() => dispatch(selectItem(product))}
              >
                <img className="w-20 h-20" src={product.image} alt="" />
                {product.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shoplist;
