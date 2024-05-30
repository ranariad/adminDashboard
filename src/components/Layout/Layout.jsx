import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import './layout.css'

export default function Layout() {
  return <>
    <Topbar />
    <div className="container">
        <div className='flex-1'>
            <Sidebar/>
        </div>
        <div className='flex-4' >
            <Outlet></Outlet>
        </div>
    </div>
    
  </>
    
}
