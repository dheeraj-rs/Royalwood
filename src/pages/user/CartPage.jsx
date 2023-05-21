import React from 'react'
import UserFooter from '../../components/UserFooter/UserFooter'
import UserCart from '../../components/UserCart/UserCart'
import UserMenubar from '../../components/UserMenubar/UserMenubar'

function CartPage() {
  return (
    <>
      <UserCart />
      <UserMenubar />
      <UserFooter />
    </>
  )
}

export default CartPage