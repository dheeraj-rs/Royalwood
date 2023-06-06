import React from 'react'
import banner from '../../assets/bannner.avif'
function HomeBanner() {
  return (
    <div className='h-[30vh] w-full md:h-[60vh] p-3 md:p-8 lg:hidden'>
      <img className='w-full h-full rounded-sm' src={banner} alt="" />
    </div>
  )
}

export default HomeBanner