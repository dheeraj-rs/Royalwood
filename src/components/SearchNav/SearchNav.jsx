import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { related, selectItem, titleName } from "../../redux/Features/searchProducts";
import { BiArrowBack } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

const SearchNavbar = () => {
  const [suggestions, setSuggestions] = useState([]);
  console.log("suggestions:", suggestions)
  const { titles } = useSelector((state) => state.search);
  console.log("titles:", titles)
  const { selectedProduct } = useSelector((state) => state.search);
  console.log("selectedProduct:", selectedProduct)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (titles.trim() !== "") {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          const filteredSuggestions = response.data.filter((product) =>
            product.title.toLowerCase().includes(titles.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(timeoutId);
  }, [titles]);

  useLayoutEffect(() => {
    if (suggestions.length > 0 && !selectedProduct) {
      dispatch(selectItem(suggestions[0]));
    }
    dispatch(related(suggestions));
  }, [suggestions, selectedProduct, dispatch]);

  const handleTitleChange = (event) => {
    const value = event.target.value;
    dispatch(titleName(value));
    dispatch(selectItem(null));
  };

  return (
    <div>
        <div className="w-full h-16 flex justify-center items-center gap-3 bg-gradient-to-r from-teal-200 to-teal-700 fixed top-0 left-0 ">
        <div className="">
          <Link to="/">
            <BiArrowBack className="w-6 h-6" />
          </Link>
        </div>
        <div className="w-[75%] relative">
        <input
          className=" w-full  py-3 pl-10 text-sm rounded-md border text-gray-900  border-gray-300 placeholder:text-base placeholder:text-[#6e6e6e]"
          type="text"
          placeholder="Search products..."
          value={titles}
          onChange={handleTitleChange}
          
        />
        <IoSearchSharp className="w-6 h-6 absolute left-3 top-3 "/>
        </div>
        <div className="">
          <Link to="/shop">
            <AiOutlineShoppingCart className="w-7 h-7" />
          </Link>
        </div>
      </div>




      <ul className="w-full flex flex-col items-center justify-center pl-2 pt-[66px]">
        {suggestions.map((product) => (
          <Link to="/shop" key={product.id} className="w-full h-full flex justify-start  border-b-2">
            <li
              className=" flex gap-3 p-2"
              onClick={() => dispatch(selectItem(product))}
            >
              <RiSearchLine className="w-4 h-4"/>
              {product.title.slice(0, 30)}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchNavbar;
