import React from 'react'
import living from '../../assets/living.jpeg';
import bedroom from '../../assets/bedroom.jpeg';
import Dining from '../../assets/dinning.jpg';
import studyroom from '../../assets/studyroom.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { Selectedcategorie } from '../../redux/Features/searchProducts';
import { useNavigate } from 'react-router-dom';

function HomeLgIndoreCard() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleType = async (key) => {
    await dispatch(Selectedcategorie(key));
    navigate('/shop');
  };
  
  return (

    <div className="h-[35vh] lg:flex hidden px-2 shadow-xl  my-5 mt-10">

      {/* header  */}
      <div className="w-[20vw] bg-gradient-to-r from-gray-100 to-gray-300  flex flex-col items-center text-4xl bg-blue-gray-400 py-16 font-[acorn]  ">
        <h1 className='' >Indoor</h1><span>Furnitures</span>
        <div className=""> <button className=" shadow-sm bg-[#010944c1] hover:bg-blue-gray-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-4 rounded-sm"
          onClick={() => handleType('Indoor')}>View all</button></div>
      </div>
      {/* image container  */}
      <div className="w-[80vw]  flex  gap-5 overflow-y-auto pl-5 py-5  border border-gray-300  ">
        
            {/* image card  */}
          <div  className="flex gap-5 rounded-lg shadow-lg shadow-gray-600" 
           onClick={() => handleType('Living')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={living} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#ffffffd8] uppercase text-sm font-semibold'>living</p>
            </div>
          </div>

            {/* image card  */}
          <div  className="flex gap-5 rounded-lg shadow-lg shadow-gray-600"
           onClick={() => handleType('Bedroom')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={bedroom} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#ffffffd8] uppercase text-sm font-semibold'>bedroom</p>
            </div>
          </div>

            {/* image card  */}
          <div  className="flex gap-5 rounded-lg shadow-lg shadow-gray-600"
           onClick={() => handleType('Dining')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={Dining} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#3f3f3ff9] uppercase text-sm font-semibold'>Dining</p>
            </div>
          </div>

            {/* image card  */}
          <div  className="flex gap-5 rounded-lg shadow-lg shadow-gray-600"
          onClick={() => handleType('Studyroom')}>
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={studyroom} alt="img"
                className="object-cover w-full  h-full rounded-lg " />
              <p className='absolute bottom-3 left-5 text-[#ffffffd8] uppercase text-sm font-semibold' >studyroom</p>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default HomeLgIndoreCard