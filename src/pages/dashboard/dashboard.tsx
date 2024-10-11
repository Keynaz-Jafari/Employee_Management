import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import DashboardCard from '../../components/dashboard/dashboardCard/dashboardCard'
import { LuUser2 } from 'react-icons/lu'

import { useUsers } from '../../context/userContext'

const dashboard = () => {
    const {users} = useUsers()
  return (
    <div id="root">
        <DashboardLayout>
        <main className="py-10 lg:pl-72 font-semibold">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-red text-3xl">Dashboard</h1>
        <DashboardCard title={'Total Employees'} value={users.length} icon={<LuUser2 className='text-white w-full h-full'/>}/>
 
      </div>
    </main>

        </DashboardLayout>


  </div>
  
  )
}

export default dashboard
