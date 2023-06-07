import React from 'react'

export default function AdminFooter({ tab }) {
  return (
    <>
      <div className="w-full h-[8%]"></div>
      <div className=" fixed bottom-0 left-0 w-full h-[8%] p-1  flex font-bold text-base gap-3 bg-blue-gray-100 ">
        {/* Dashboard  */}
        <button 
        onClick={() => { tab('dashboard') }}
        type="button" className="w-1/4 inline-flex flex-col items-center justify-center shadow-black shadow-2xl">
          <p >Dash</p>
        </button>

        {/* Customers */}
        <button
        onClick={() => { tab('customers') }}
          type="button"
          className=" w-1/4 inline-flex flex-col items-center justify-center  shadow-black shadow-2xl ">
          <p >User</p>
        </button>

        {/* Orders  */}
        <button
        onClick={() => { tab('order') }}
          type="button"
          className="w-1/4 inline-flex flex-col items-center justify-center shadow-black shadow-2xl ">
          <p >Orders</p>
        </button>

        {/* Edit Products  */}
        <button
        onClick={() => { tab('editproduct') }}
          type="button"
          className="w-1/4 inline-flex flex-col items-center justify-center shadow-black shadow-2xl ">
          <p >Edit</p>
        </button>

        {/* Add products */}
        <button
         onClick={() => { tab('addproduct') }} 
          type="button"
          className="w-1/4 inline-flex flex-col items-center justify-center  shadow-black shadow-2xl">
          <p>Add</p>
        </button>

      </div>
    </>
  )
}
