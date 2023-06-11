// import axios from "axios";
import './SearchPanel.scss'
import { related, selectItem, titleName } from "../../redux/Features/searchProducts";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { getDocs, collection, } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function SearchPanel() {
  const dispatch = useDispatch();
  const firebaseData = collection(db, "furnitures");
  const { titles } = useSelector((state) => state.search);
  const { selectedProduct } = useSelector((state) => state.search);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (titles.trim() !== "") {
        try {
          const copyFirebaseData = await getDocs(firebaseData);
          const filteredSuggestions = copyFirebaseData.docs.map((doc) => doc.data()).filter((product) =>
            product.title.toLowerCase().includes(titles.toLowerCase()));
          setSuggestions(filteredSuggestions);
        } catch (error) {
          console.error("Error getting documents:", error);
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
  };

  const handleInputMouseLeave = () => {
    setShowSuggestions(false);
  };

  const handleInputMouseEnter = () => {
    if(titles.length > 0 )
    {
      setShowSuggestions(true);
    }
    
  };

  return (
    <div className="w-full relative top-0 sm:order-2 sm:flex " onMouseLeave={handleInputMouseLeave}>

      {/* all using searchpage input sm & lg using */}
      <div className="w-full backdrop-blur-sm z-10">
        <input
          type="text"
          className=" w-full outline-none text-sm rounded-sm h-9 pl-10 sm:block sm:pl-3 sm:pr-10 border-[.5px] bg-transparent  border-black placeholder:text-black  "
          // sm:min-w-[220px] md:min-w-[350px] lg:min-w-[400px]  xl:min-w-[700px]
          placeholder="Search..."
          onChange={handleTitleChange}
          onMouseEnter={handleInputMouseEnter} />
        <BsSearch className=" hidden w-4 h-4 absolute right-3 top-2 pointer-events-none sm:block " />
      </div>

      {/* suggestions showing div  */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="w-full h-auto absolute top-14 sm:top-8 rounded-b-lg z-[100] border  border-black backdrop-blur-xl " >
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
                  {product2.title.slice(0, 33)}
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
