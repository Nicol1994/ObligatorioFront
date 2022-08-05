import React from 'react'
import './Login.css'
import LoginForm from './LoginForm'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Inicios de sesión</h3>
          <section className='card-body'>
            <LoginForm />
            <br />
            <Link to={'/Registro'}>Crear una cuenta nueva</Link>

          </section>
        </div>
      </section>
    </>
  )
}

export default Login
