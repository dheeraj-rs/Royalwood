import React from 'react'
import SideMenubar from '../../components/SideMenubar/SideMenubar'
import MainFooter from '../../components/MainFooter/MainFooter'
import Gallery from '../../components/Gallery/Gallery'

function GalleryPage() {
  return (
    <>
      <Gallery/>
      <SideMenubar/>
      <MainFooter/>
    </>
  )
}

export default GalleryPage