import React from 'react'

import { GrHomeRounded } from 'react-icons/gr'
import { FiUser } from 'react-icons/fi'
import {TbBoxMultiple } from 'react-icons/tb'
import { MdAddShoppingCart } from 'react-icons/md'
import { BiMenu} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { toggleon } from '../../redux/Features/usersidebarToggle'


function BottomNavbar() {
  const dispatch = useDispatch()
  return (
    <div className='w-screen h-12 fixed bottom-0 z-50 flex flex-row items-center gap-3 justify-evenly bg-white'>
        <GrHomeRounded className='w-5 h-5'/>
        <FiUser  className='w-6 h-6'/>
        <TbBoxMultiple  className='w-5 h-5 -rotate-45'/>
        <MdAddShoppingCart className='w-6 h-6'/>
        <BiMenu className='w-7 h-7' onClick={() => dispatch(toggleon())}/>
    </div>
  )
}

export default BottomNavbar