import { Navigate } from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to='/login' replace={true} />
  }
  return children
}

export default PrivateRoute
