import React from 'react'
// import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import NavSection from '../component/NavSection'

const MyLayout = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <NavSection />
        <Outlet />
    </div>
  )
}

export default MyLayout