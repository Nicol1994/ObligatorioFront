import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <div className='container-fluid dashboard'>
      <div className='col-9 mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
