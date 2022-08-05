import 'bootstrap-css-only'
import { useSelector } from 'react-redux'
import { Route, Routes} from 'react-router-dom'
import Dashboard from '../Screens/Dashboard'
import Layout from '../Screens/Layout'
import Login from '../Screens/Login'
import PrivateRoute from '../Screens/PrivateRoute'
import Registro from '../Screens/Registro'
import React from 'react'


const App = () => {
  const userLogged = useSelector(state => state.user.user)

  return (
    <div className='App'>
      
      <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path='/dashboard' element={
            <PrivateRoute user={userLogged}>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path='' element={<Dashboard />} />
      
        </Route>
      </Routes>
    
    </div>
  )
  
}

export default App
