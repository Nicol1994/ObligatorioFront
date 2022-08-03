import React from 'react'
import Registro from '../Registro'
import './Login.css'
import LoginForm from './LoginForm'
import {Button} from 'react-bootstrap';

const Login = () => {
  
  
  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Login</h3>
          <section className='card-body'>
            <LoginForm />
            <br />
          
          </section>
        </div>
      </section>
    </>
  )
}

export default Login
