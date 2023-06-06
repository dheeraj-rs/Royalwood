import React from 'react'
import banner2 from '../../assets/banner2.avif'
function HomeBanner2() {
  return (
    <div className='h-[30vh] w-full md:h-[60vh] p-3 md:p-8  lg:hidden'>
      <img className='w-full h-full rounded-tl-xl rounded-br-xl' src={banner2} alt="" />
    </div>
  )
}

export default HomeBanner2