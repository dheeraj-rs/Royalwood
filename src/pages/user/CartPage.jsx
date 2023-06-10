import React from 'react'
import UserCart from '../../components/UserCart/UserCart'
import SideMenubar from '../../components/SideMenubar/SideMenubar'
import MainFooter from '../../components/MainFooter/MainFooter'
import Loginform from '../../components/LoginForm/LoginForm'

function CartPage() {
  return (
    <>
      <UserCart />
      <Loginform/>
      <SideMenubar/>
      <MainFooter />
    </>
  )
}

export default CartPage