import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import LoginForm from './LoginForm'
import Registro from '../Registro';


const Login = () => {
  
  
  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Login </h3>
          <section className='card-body'>
            <LoginForm />
            <br />
            <Link to={<Registro/>}>Crear una cuenta nueva</Link>

          </section>
        </div>
      </section>
    </>
  )
}

export default Login
