import React, { useState, useEffect } from 'react';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/logo.png';
import slide3 from '../../assets/slide2.png';

const slides = [
  {
    imageUrl: slide1,
    label: 'Slide 1 label',
    content: 'Some content for slide 1',
  },
  {
    imageUrl: slide2,
    label: 'Slide 2 label',
    content: 'Some content for slide 2',
  },
  {
    imageUrl: slide3,
    label: 'Slide 3 label',
    content: 'Some content for slide 3',
  },
];

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[54.5vh] sm:h-[100vh] lg:h-[54.5vh] flex justify-center">
      <div className="w-full h-full bg-[#9292921f] flex flex-col justify-center items-center ">
        <div className="w-full h-[65%] flex items-center justify-center transition-transform duration-1000">
          <img src={slides[currentSlide].imageUrl} alt="" className="w-56 h-56 " />
        </div>
        <div className="w-full h-[35%] flex flex-col items-center justify-center p-6 transition-transform duration-1000">
          <p className="text-2xl leading-3 tracking-widest">
            THINK DIFFERENT.
          </p>
          <p className="pt-5 text-[#929292cb]">
            Royal is a unique & captivating theme designed
          </p>
          <p className="text-[#929292cb]">
            specifically for all types of shops and online stores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;