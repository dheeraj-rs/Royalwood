import React from 'react'
import Swingchairs from '../../assets/swingchair.jpeg'
import Window from '../../assets/window.jpeg'
import Staircase from '../../assets/Staircase2.jpeg'
import door from '../../assets/door.jpeg'
import { useDispatch } from 'react-redux';
import { Selectedcategorie } from '../../redux/Features/searchProducts';
import { useNavigate } from 'react-router-dom'

function HomeLgOutdoreCard() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleType = async (key) => {
    await dispatch(Selectedcategorie(key));
    navigate('/shop');
  };
  
  return (
    <div className="h-[35vh] lg:flex hidden px-2 shadow-xl  mt-10">

      {/* header  */}
      <div className="w-[20vw] bg-gradient-to-r from-gray-100 to-gray-300  flex flex-col items-center text-4xl bg-blue-gray-400 py-16 font-[acorn]   ">
        <h1 className='' >Outdoor</h1><span>furnitures</span>
        <div className=""> <button className=" shadow-sm bg-[#010944c1] hover:bg-blue-gray-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-4 rounded-sm"
         onClick={() => handleType('Outdoor')}>View all</button></div>
      </div>
      {/* image container  */}
      <div className="w-[80vw]  border border-gray-300    flex  gap-5 overflow-y-auto pl-5 py-5  ">
        
        {/* image card */}
          <div className="flex gap-5 rounded-lg  shadow-lg shadow-gray-600 " onClick={() => handleType('Swingchair')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={Swingchairs} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#ffffffd8] uppercase text-sm font-semibold'>Swingchairs</p>
            </div>
          </div>

        {/* image card */}
          <div className="flex gap-5 rounded-lg  shadow-lg shadow-gray-600 "  onClick={() => handleType('Window')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={Window} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#ffffffd8] uppercase text-sm font-semibold'>Window</p>
            </div>
          </div>
          
        {/* image card */}
          <div className="flex gap-5 rounded-lg  shadow-lg shadow-gray-600 "  onClick={() => handleType('staircase')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={Staircase} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#323232d8] uppercase text-sm font-semibold'>Staircase</p>
            </div>
          </div>

        {/* image card */}
          <div className="flex gap-5 rounded-lg  shadow-lg shadow-gray-600 "  onClick={() => handleType('Door')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={door} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#ffffffd8] uppercase text-sm font-semibold'>door</p>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default HomeLgOutdoreCard