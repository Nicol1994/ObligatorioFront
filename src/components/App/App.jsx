import Dashboard from '../Screens/Dashboard'
import Login from '../Screens/Login'
import React from 'react';
import Chart from 'react-apexcharts'
import 'bootstrap-css-only'
import { useSelector } from 'react-redux'

const App = () => {
  const userLogged = useSelector(state => state.user.user)

  return <div className='App'>{!userLogged ? <Login /> : <Dashboard />}</div>
}

export default App
