import React from 'react'
import UserFooter from '../../components/UserFooter/UserFooter'
import UserCategories from '../../components/UserCategories/UserCategories'
import UserMenubar from '../../components/UserMenubar/UserMenubar'

function CategoriPage() {
  return (
    <>
      <UserCategories />
      <UserMenubar />
      <UserFooter />
    </>
  )
}

export default CategoriPage