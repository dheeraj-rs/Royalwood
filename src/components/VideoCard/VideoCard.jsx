import React from 'react';
import slide4 from '../../assets/Verandah Collection.mp4';

const VideoCard = () => {
  return (
    <div className="w-full h-[54.5vh] sm:h-screen flex flex-col justify-center relative lg:hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline > <source src={slide4} type="video/mp4" /></video>
      </div>
      {/* <div className="w-full h-full relative">
        <p className='absolute right-5 top-20  text-5xl text-[#202880cc]'>Royal</p> 
      </div> */}
    </div>
  );
};
export default VideoCard;