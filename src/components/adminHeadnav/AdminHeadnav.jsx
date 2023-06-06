import React from 'react'

function AdminHeadnav() {
  return (
    <div className='w-full h-[10%] bg-gray-900 flex justify-between gap-10x text-white'>
      <div className="flex items-center"> <h1 className='text-2xl md:text-4xl text-blue-gray-600 px-2'>RoyalWood</h1></div>
      <div className="flex items-end justify-end w-full"></div>
      <div className="flex flex-col justify-end px-5">
        <h1 className='p-2 border border-b-0'>Filter</h1>
        <ul className='hidden'>
          <li>categorie</li>
        </ul>
      </div>
    </div>
  )
}

export default AdminHeadnav