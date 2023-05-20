import React, { useState } from 'react'
import AdminHeadnav from '../../components/adminHeadnav/AdminHeadnav'
import AdminSidenav from '../../components/adminSidenav/AdminSidenav'
import ShoplistContainer from '../../components/homeShoplist/ShoplistContainer' 
import HomeBanner from '../../components/homeBanner/HomeBanner'
import { useNavigate } from 'react-router-dom'

function AdminPage() {

    const navigate = useNavigate();

    const [activeTab, setactiveTab] = useState('profile')

   const loadTab = ()=>{
        switch (activeTab) {
            case 'profile': 
                return <ShoplistContainer /> 
            
            case 'settings':
                return  <HomeBanner/>
        
            default: null
        }

    }

  return (
 
    <div className='w-screen h-screen flex flex-col '>
        <a onClick={()=>{setactiveTab('profile')}}  >aaa</a>
                <a onClick={()=>{setactiveTab('settings')}} aria-current="location">bbb</a>
                <a onClick={()=>{navigate('/shop')}}>back</a>
        <AdminHeadnav/>
        <div className=" w-full h-[90%] flex flex-row ">
            <div className="w-1/5">
                
            <AdminSidenav/>
            </div>
            <div className="w-4/5 overflow-y-scroll"> 
            {loadTab()}
                
            </div>
        </div>
    </div>
  )
}

export default AdminPage