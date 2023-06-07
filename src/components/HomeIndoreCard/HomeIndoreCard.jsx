import React, { useEffect, useState } from 'react';
import living from '../../assets/living.jpeg';
import bedroom from '../../assets/bedroom.jpeg';
import Dining from '../../assets/dinning.jpg';
import studyroom from '../../assets/studyroom.jpeg';
import { useDispatch} from 'react-redux';
import { Selectedcategorie } from '../../redux/Features/searchProducts';
import { useNavigate } from 'react-router-dom';

function HomeIndoreCard() {
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const handleType = async (key) => {
    await dispatch(Selectedcategorie(key));
    navigate('/shop');
  };
  

  return (
    <div className="flex flex-col p-2 lg:hidden shadow-xl border border-blue-gray-200 mt-2">
      {/* heading Collections */}
      <div className="h-[20%] flex justify-between items-center py-5 px-1">
        <h1 className="text-2xl font-semibold font-[acorn]">In Indore Furniture</h1>
        <button className="block shadow-lg bg-blue-gray-900 hover:bg-blue-gray-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-4 rounded" 
        onClick={() => handleType('Indoor')}>
          View all
        </button>
      </div>

      {/* images container */}
      <div className="h-[80%] flex flex-wrap gap-4 justify-center rounded-sm">
        {/* image cards */}
        <div className="w-[47%] rounded-lg border border-blue-gray-200 shadow-lg" onClick={() => handleType('Living')} >
          <div className="h-[70%]">
            <img className="object-cover w-full h-full rounded-sm p-2" src={living} alt=""  />
          </div>
          <div className="h-[25%] rounded-sm flex flex-col justify-end pl-2">
            <h1 className="text-sm">Living</h1>
            <span className="text-base text-green-900">Min. 70% off</span>
          </div>
        </div>

        {/* image cards */}
        <div className="w-[47%] rounded-sm border border-blue-gray-200 shadow-lg" onClick={() => handleType('Bed')}>
          <div className="h-[70%]">
            <img className="object-cover w-full h-full rounded-sm p-2" src={bedroom} alt="" />
          </div>
          <div className="h-[25%] rounded-sm flex flex-col justify-end pl-2">
            <h1 className="text-sm">Bedroom</h1>
            <span className="text-base text-green-900">Min. 70% off</span>
          </div>
        </div>

        {/* image cards */}
        <div className="w-[47%] rounded-sm border border-blue-gray-200 shadow-lg" onClick={() => handleType('Dining')}>
          <div className="h-[70%]">
            <img className="object-cover w-full h-full rounded-sm p-2" src={Dining} alt="" />
          </div>
          <div className="h-[25%] rounded-sm flex flex-col justify-end pl-2">
            <h1 className="text-sm">Dining</h1>
            <span className="text-base text-green-900">Min. 70% off</span>
          </div>
        </div>

        {/* image cards */}
        <div className="w-[47%] rounded-lg border border-blue-gray-200 shadow-lg" onClick={() => handleType('Studyroom')}>
          <div className="h-[70%]">
            <img className="object-cover w-full h-full rounded-sm p-2" src={studyroom} alt="" />
          </div>
          <div className="h-[25%] rounded-sm flex flex-col justify-end pl-2">
            <h1 className="text-sm">Study Room</h1>
            <span className="text-base text-green-900">Min. 70% off</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIndoreCard;
