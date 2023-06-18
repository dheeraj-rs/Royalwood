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
  const [isFavorite, setIsFavorite] = useState(false);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const quantityCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Add the selectedProduct to the cart
    // Implement your logic here
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "918086022295";
    const message = `Product: ${selectedProduct.title}\nPrice: ${selectedProduct.price}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex h-screen">
      {/* Product Image */}
      <div className="flex-1 relative">
        <img
          src={selectedProduct.image}
          alt="Product Preview"
          className="w-screen h-screen object-contain rounded-md"
        />
        <button 
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-3xl absolute right-10 top-10
                   ${
                    isFavorite ? "text-red-500 bg-gray-100" : "text-gray-700 bg-gray-200"
                  }`}
                  onClick={handleToggleFavorite}
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>
      </div>

      {/* Product Details */}
      <div className="flex-1 bg-gray-100 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          {/* Navbar */}
          <div className="flex items-center mb-6">
            <BiArrowBack className="w-6 h-6 cursor-pointer text-gray-600" onClick={() => navigate(-1)} />
            <p className="text-sm text-gray-600 ml-2">Home / Shop / Product Details</p>
          </div>

          {selectedProduct && (
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">{selectedProduct.title.slice(0, 10)}</h2>

              <div className="flex items-center mb-2">
                <AiFillStar className="w-6 h-6 text-yellow-500" />
                <AiFillStar className="w-6 h-6 text-yellow-500" />
                <AiFillStar className="w-6 h-6 text-yellow-500" />
                <AiFillStar className="w-6 h-6 text-yellow-500" />
                <AiOutlineStar className="w-6 h-6 text-yellow-500" />
                <p className="text-sm text-gray-700 ml-2">22 reviews</p>
              </div>

              <p className="text-xl font-semibold text-gray-800 mb-4">${selectedProduct.price}</p>

              <p className="text-lg text-gray-600 mb-6">{selectedProduct.title}</p>

              <div className="flex items-center mb-6">
                <p className="font-medium text-base text-gray-600">Select quantity</p>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors duration-300 bg-gray-200 hover:bg-gray-300"
                    onClick={quantityCount}
                  >
                    -
                  </button>
                  <input
                    className="w-16 h-8 border border-gray-300 text-center"
                    type="number"
                    min="0"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                  <button
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors duration-300 bg-gray-200 hover:bg-gray-300"
                    onClick={addCount}
                  >
                    +
                  </button>
                </div>
              </div>

              <hr className="bg-gray-200 my-4" />


              <div className="flex items-center justify-between mb-4 cursor-pointer "
               onClick={() => setRotate(!rotate)}>
                <p className="font-medium text-base text-gray-600 ">Dimensions</p>
                <MdOutlineKeyboardArrowDown
                  className={`w-10 h-10 cursor-pointer transition-transform ${rotate ? "rotate-180" : ""} duration-500`}
                 
                />
              </div>

              {rotate && (
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat pharetra interdum. Donec
                    id justo ut nulla consectetur ornare. Praesent a aliquet libero. Donec sagittis interdum feugiat.
                  </p>
                </div>
              )}

              <hr className="bg-gray-200 mb-4" />

              <div className="flex justify-between items-center">
                <button
                  className="px-6 py-3 text-base font-medium text-white bg-gray-800 hover:bg-black rounded-md"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>

                
              </div>

              <div className="mt-6">
                <button
                  className="px-6 py-3 text-base font-medium text-white bg-gray-800 hover:bg-black rounded-md"
                  onClick={handleWhatsApp}
                >
                  Contact via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
