import React, { useState } from 'react'
import AdminHeadnav from '../../components/adminHeadnav/AdminHeadnav'
import AdminAddproducts from '../../components/AdminAddproducts/AdminAddproducts'
import AdminCustomers from '../../components/AdminCustomers/AdminCustomers'
import AdminOrder from '../../components/AdminOrder/AdminOrder'
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard'
import AdminFooter from '../../components/AdminFooter/AdminFooter'
import 'react-toastify/dist/ReactToastify.css';
import AdminEditproducts from '../../components/AdminEditproducts/AdminEditproducts'

function AdminHome() {

    const [activeTab, setActiveTab] = useState()
    console.log(activeTab);

    const loadTab = () => {
        switch (activeTab) {
            case 'addproduct':
                return <AdminAddproducts />

            case 'editproduct':
                return <AdminEditproducts />  // return <AdminEditproducts />
               

            case 'customers':
                return <AdminCustomers />

            case 'order':
                return <AdminOrder />

            case 'dashboard':
                return <AdminDashboard />

            default: return  <AdminDashboard />
        }

    }

    return (

        <div className='w-screen h-screen flex flex-col '>

            <AdminHeadnav />
            <div className=" w-full h-[82%]">
                <div className=" w-full h-full overflow-y-scroll bg-blue-gray-600">
                    {loadTab()}
                </div>
            </div>
            <AdminFooter tab={setActiveTab} />
        </div>
    )
}

export default AdminHome