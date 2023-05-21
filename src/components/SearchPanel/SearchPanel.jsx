import axios from "axios";
import './SearchPanel.scss'
import { related, selectItem, titleName } from "../../redux/Features/searchProducts";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

function SearchPanel() {
  const { titles } = useSelector((state) => state.search);
  const { selectedProduct } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (titles.trim() !== "") {
        try {
          const Apidata = await axios.get("https://fakestoreapi.com/products");
          const filteredSuggestions = Apidata.data.filter((product) =>
            product.title.toLowerCase().includes(titles.toLowerCase())
          );
          setSuggestions(filteredSuggestions.slice(0, 10));
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
    // dispatch(selectItem(null));
  };

  const handleInputMouseLeave = () => {
    setShowSuggestions(false);
  };

  const handleInputMouseEnter = () => {
    setShowSuggestions(true);
  };

  return (

    <div className="w-full relative top-0 sm:order-2 sm:flex " onMouseLeave={handleInputMouseLeave}>

      {/* all using searchpage input sm & lg using */}
      <input
        type="text"
        className=" w-full text-sm rounded-sm h-10 pl-10 sm:block sm:pl-3 sm:pr-10 border  bg-gray-50 text-gray-900 border-gray-300  sm:min-w-[220px] md:min-w-[350px] lg:min-w-[400px]  xl:min-w-[700px] "
        placeholder="Search..."
        onChange={handleTitleChange}
        onMouseEnter={handleInputMouseEnter} />
      <BsSearch className=" hidden w-4 h-4 text-gray-500 absolute right-3 top-3 pointer-events-none sm:block " />

      {/* suggestions showing div  */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="w-full h-auto absolute top-14 sm:top-9 bg-white sm:text-white sm:bg-[#19154cec] rounded-b-lg z-[100]" >
          <ul className="w-full flex flex-col items-center justify-center border-slate-300">

            {/* 1st 3 suggestion list show images & names */}
            {suggestions.slice(0, 3).map((product) => (
              <Link
                to="/productpage"
                key={product.id}
                className="w-full h-full flex justify-start z-[200] "
              >
                <li
                  className="flex gap-3 p-2 text-sm items-center"
                  onClick={() => dispatch(selectItem(product))}
                >
                  <img src={product.image} alt="" className="w-10 h-10" />
                  {product.title.slice(0, 18)}
                </li>
              </Link>
            ))}

            {/* other suggestions show search icon & names  */}
            {suggestions.slice(3, 18).map((product2) => (
              <Link
                to="/productpage"
                key={product2.id}
                className="w-full h-full flex justify-start z-[200]"
              >
                <li
                  className="flex gap-3 p-2 text-sm"
                  onClick={() => dispatch(selectItem(product2))}
                >
                  <RiSearchLine className="w-4 h-4" />
                  {product2.title.slice(0,33)}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default SearchPanel;
