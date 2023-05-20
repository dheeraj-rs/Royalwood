import React, { } from 'react'


function AdminSidenav() {
  return (
    <div className='w-full h-full bg-slate-900 p-3'>
      <ul className='flex  flex-col gap-y-8 text-black text-xl'>
      <li className="w-full h-20 bg-gray-300 rounded-lg flex justify-center items-center">Dashboard</li>
      <li className="w-full h-20 bg-gray-300 rounded-lg flex justify-center items-center">Customers</li>
      <li className="w-full h-20 bg-gray-300 rounded-lg flex justify-center items-center">Orders</li>

      <li className="w-full h-20 bg-gray-300 rounded-lg flex justify-center items-center">Products</li>

      <li className="w-full h-20 bg-gray-300 rounded-lg flex justify-center items-center">Add products</li>
      <li className="w-full h-20 bg-gray-300 rounded-lg flex justify-center items-center">Coupon</li>
      </ul>
    </div>
  )
}

export default AdminSidenav