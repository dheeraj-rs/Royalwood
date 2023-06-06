import React from 'react'
import UserCart from '../../components/UserCart/UserCart'
import SideMenubar from '../../components/SideMenubar/SideMenubar'
import MainFooter from '../../components/MainFooter/MainFooter'

function CartPage() {
  return (
    <>
      <UserCart />
      <SideMenubar/>
      <MainFooter />
    </>
  )
}

export default CartPage