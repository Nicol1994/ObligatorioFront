import Dashboard from '../Screens/Dashboard'
import Login from '../Screens/Login'
import Registro from '../Screens/Registro'
import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap-css-only'



const App = () => {
  

  return (
    <div className='App'>
      <header>
          <ul>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Registro">Registro</Link>
            </li>
          </ul>
      </header>
      
      <Routes>
        <Route index element={<App/>} />
        <Route path="/Login"  element={<Login/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
      </Routes>
    
    </div>
  )
  
}

export default App
