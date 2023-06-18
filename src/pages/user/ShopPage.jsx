import React from 'react'
import Shop from '../../components/Shop/Shop'
import SideMenubar from '../../components/SideMenubar/SideMenubar'
import MainFooter from '../../components/MainFooter/MainFooter'
import Loginform from '../../components/LoginForm/LoginForm'

function ShopPage() {
  return (
    <>
     <Loginform/>
      <Shop />
      <Loginform/>
      <SideMenubar />
      <MainFooter />
    </>
  )
}

export default ShopPage