import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel1 from '../../assets/Carousel/carousel1.jpg'
import Carousel2 from '../../assets/Carousel/carousel2.jpg'
import Carousel3 from '../../assets/Carousel/carousel3.jpg'

function HomeCarousel() {
  const images = [Carousel1, Carousel2, Carousel3];

  const [currentIndex, setCurrentIndex] = useState(1);

  const goBack = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 1));
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length ? prevIndex + 1 : 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goNext, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="px-2 py-4 hidden lg:block  bg-blue-gray-100 lg:bg-white">
      <article className="relative w-full h-[70vh] flex flex-shrink-0 overflow-hidden shadow-2xl p-2">
        <div className="rounded-full text-white absolute top-5 right-5 text-sm px-2 text-center z-10 ">
          <span>{currentIndex}</span>/
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (

          <div
            key={index}
            className={`w-full h-full ${currentIndex === index + 1 ? 'block' : 'hidden'}`}
          >
            <img
              src={image}
              alt="Image"
              className="w-full h-full object-cover object-center"
            />
          </div>))}
        <button
          onClick={goBack}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-20 flex justify-center items-center rounded-r-lg shadow-md z-10 bg-gray-100 hover:bg-gray-200"
        >
          <IoIosArrowBack className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
          />
        </button>
        <button
          onClick={goNext}
          className="absolute right-0 top-1/2  rounded-l-lg -translate-y-1/2 w-10 h-20 flex justify-center items-center  shadow-md z-10 bg-gray-100 hover:bg-gray-200"
        >
          <IoIosArrowForward className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
          />
        </button>
      </article>
    </div>
  );
}

export default HomeCarousel;
