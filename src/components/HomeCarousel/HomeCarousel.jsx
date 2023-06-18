import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function HomeCarousel() {
  const images = [
    'https://png.pngtree.com/background/20210712/original/pngtree-fashion-furniture-banner-background-picture-image_1186187.jpg',
   'https://cdn.shopify.com/s/files/1/0258/3475/0045/files/NIDO_SOFA_RANGE-min_1471x578_crop_center.png?v=1651659963',
    'https://images.urbndata.com/is/image/Anthropologie/83056069-2100-SU0045_b?$a15-mto-carousel$&fit=constrain&hei=640&qlt=80',
    'https://cdn11.bigcommerce.com/s-1u1m3wn/images/stencil/1280x1280/o/ceramic%20range%20hero%20image-web__94349.original.jpg',
  ];

  

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
    <div className="px-2 md:px-5 hidden lg:block   ">
      <article className="relative w-full h-[70vh] flex flex-shrink-0 overflow-hidden ">
        <div className="rounded-full text-white absolute top-5 right-5 text-sm px-2 text-center z-10 ">
          <span>{currentIndex}</span>/
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (

         <div
  key={index}
  className={`w-full h-full ${currentIndex === index + 1 ? 'block' : 'hidden'}`}
>
  <div className="w-full h-full rounded-sm aspect-video">
    <img
      src={image}
      alt="Image"
      className="object-cover object-center w-full h-full"
    />
  </div>
</div>
))}
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
