import React from 'react'

export default function AdminFooter({ tab }) {
  return (
    <>
      <div className="w-full h-[8%]"></div>
      <div className=" fixed bottom-0 left-0 w-full h-[8%] p-1  flex font-bold text-base gap-3 bg-blue-gray-100 ">
        {/* Dashboard  */}
        <button type="button" className="w-1/4 inline-flex flex-col items-center justify-center shadow-black shadow-2xl">
          <p onClick={() => { tab('dashboard') }}>Dash</p>
        </button>

        {/* Customers */}
        <button
          type="button"
          className=" w-1/4 inline-flex flex-col items-center justify-center  shadow-black shadow-2xl ">
          <p onClick={() => { tab('customers') }}>User</p>
        </button>

        {/* Orders  */}
        <button
          type="button"
          className="w-1/4 inline-flex flex-col items-center justify-center shadow-black shadow-2xl ">
          <p onClick={() => { tab('order') }}>Orders</p>
        </button>

        {/* Edit Products  */}
        <button
          type="button"
          className="w-1/4 inline-flex flex-col items-center justify-center shadow-black shadow-2xl ">
          <p onClick={() => { tab('editproduct') }}>Edit</p>
        </button>

        {/* Add products */}
        <button
          type="button"
          className="w-1/4 inline-flex flex-col items-center justify-center  shadow-black shadow-2xl">
          <p onClick={() => { tab('addproduct') }} >Add</p>
        </button>

      </div>
    </>
  )
}
