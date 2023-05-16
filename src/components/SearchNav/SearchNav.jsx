import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { related, selectItem, titleName } from "../../redux/Features/searchProducts";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const SearchNavbar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { titles } = useSelector((state) => state.search);
  const { selectedProduct } = useSelector((state) => state.search);

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
      <div className="w-full h-16 flex justify-center items-center gap-2 bg-gradient-to-r from-teal-200 to-teal-700 ">
        <div className="">
          <Link to="/">
            <HiOutlineArrowSmLeft className="w-10 h-10" />
          </Link>
        </div>
        <input
          className="w-[80%] p-2"
          type="text"
          placeholder="Search products..."
          value={titles}
          onChange={handleTitleChange}
        />
        <div className="">
          <Link to="/shop">
            <FaShopify className="w-10 h-10" />
          </Link>
        </div>
      </div>
      <ul className="w-full flex flex-col items-start p-2 mt-10">
        {suggestions.map((product) => (
          <Link to="/shop" key={product.id}>
            <li
              className="flex justify-center items-center"
              onClick={() => dispatch(selectItem(product))}
            >
              <img className="w-5 h-5" src={product.image} alt="" />
              {product.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchNavbar;
