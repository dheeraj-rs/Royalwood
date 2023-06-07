import React from 'react'
import Swingchairs from '../../assets/swingchair.jpeg'
import Window from '../../assets/window.jpeg'
import Staircase from '../../assets/Staircase2.jpeg'
import door from '../../assets/door.jpeg'
import { useDispatch } from 'react-redux'
import { Selectedcategorie } from '../../redux/Features/searchProducts'
import { useNavigate } from 'react-router-dom'

function HomeOutdoorCard() {  
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleType = async (key) => {
        await dispatch(Selectedcategorie(key));
        navigate('/shop');
      };
      
    return (
        <div className='h-max flex flex-col pb-5 lg:hidden border border-blue-gray-200 shadow-lg'>

            {/* heading Collections  */}
            <div className="h-[20%] flex justify-between items-center py-5 px-4">
                <h1 className='text-xl font-semibold font-[acorn] '>Outdore Furniture</h1>
                <button className="block shadow-lg bg-blue-gray-900 hover:bg-blue-gray-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-4 rounded"
                  onClick={() => handleType('Outdoor')}>View all</button>
            </div>
            {/* images container  */}
            <div className="h-[80%] flex flex-wrap px-2 gap-x-4 gap-y-4 justify-center ">

                {/* image cards  */}
                <div className="h-[25vh] w-[46%] rounded-sm border border-blue-gray-200 shadow-lg"
                onClick={() => handleType('Swingchair')}>
                    <div className="h-[80%]">
                        <img className='object-cover w-full h-full ' src={Swingchairs} alt="" />
                    </div>
                    <div className="h-[20%] p-2 flex">
                        <h1 className='text-sm m-auto'>Swing Chairs</h1>
                    </div>
                </div>
                {/* image cards  */}
                <div className="h-[25vh] w-[46%] rounded-sm border border-blue-gray-200 shadow-lg"
                onClick={() => handleType('Window')}>
                    <div className="h-[80%]">
                        <img className='object-cover w-full h-full ' src={Window} alt="" />
                    </div>
                    <div className="h-[20%] p-2 flex">
                        <h1 className='text-sm m-auto'>Wooden Window</h1>
                    </div>
                </div>

                {/* image cards  */}
                <div className="h-[25vh] w-[46%] rounded-sm border border-blue-gray-200 shadow-lg"
               onClick={() => handleType('Door')}>
                    <div className="h-[80%]">
                        <img className='object-cover w-full h-full' src={door} alt="" />
                    </div>
                    <div className="h-[20%] p-2 flex">
                        <h1 className='text-sm m-auto'>Door</h1>
                    </div>
                </div>

                {/* image cards  */}
                <div className="h-[25vh] w-[46%] rounded-sm border border-blue-gray-200 shadow-lg"
                 onClick={() => handleType('staircase')}>
                    <div className="h-[80%]">
                        <img className='object-cover w-full h-full' src={Staircase} alt="" />
                    </div>
                    <div className="h-[20%] p-2 flex">
                        <h1 className='text-sm m-auto'>Staircase</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeOutdoorCard