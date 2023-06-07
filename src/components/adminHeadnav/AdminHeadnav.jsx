import React from 'react'
function AdminHeadnav() {
  return (
    <div className='w-full h-[10%] bg-gray-900 flex justify-between gap-10x text-white'>
      <div className="flex items-center"> <h1 className='text-2xl md:text-4xl text-blue-gray-600 px-2'>RoyalWood</h1></div>
      <div className="flex items-end justify-end w-full"></div>
     <div className=" flex items-center px-3">
     <button className={` font-semibold border shadow-lg  px-5 h-max `} onClick={() => setRotate(!rotate)}>
          Filters
        </button>
        </div>
    </div>
  )
}

export default AdminHeadnav