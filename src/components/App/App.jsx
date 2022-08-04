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
//import { useSelector } from 'react-redux'


const App = () => {
  //const userLogged = useSelector(state => state.user.user)

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
      <h1>Hola</h1>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    
    </div>
  )
  
}

export default App
