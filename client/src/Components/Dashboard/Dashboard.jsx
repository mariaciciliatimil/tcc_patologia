
/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
       <div className="dashboardContainer flex">
        <Sidebar/>
        <Body/>
       </div>
    </div>
  )
}

export default Dashboard