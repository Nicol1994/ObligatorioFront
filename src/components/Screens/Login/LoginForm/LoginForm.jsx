import { useRef, useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setLoginUser } from '../../../../app/slices/userSlice'
import { login } from '../../../../services/crypto'
import Button from '../../../UI/Button/Button'
import Alert from '../../../UI/Alert/Alert'


function LoginForm() {
  const [message] = useState('')
  const inputUserName = useRef()
  const inputPassword = useRef()

  const dispatch = useDispatch()

  const onHandleLogin = async (e) => {
    e.preventDefault()
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    
    if (userName !== '' && password !== '') {
      try {
        const { apiKey, id } = await login(userName, password)
        const user = { apiKey: apiKey, id: id }
        dispatch(setLoginUser(user))
        alert(`${userName} ingreso exitoso!`)
      } catch (error) {
        alert('Los campos ingresados no son corretos', error)
      }
    } else {
      alert('Por favor complete los campos')
    }
  }
  return (
    <>
      <form>
        {message !== '' ? (
          <Alert message={message} />
        ) : (
          ''
        )}
        <label>Nombre de Usuario: </label>
        <br />
        <input className='form-control' type='text' ref={inputUserName} />
        <br />
        <label>Contraseña: </label>
        <br />
        <input className='form-control' type='password' ref={inputPassword} />
        <br />
        <br />
        <Button
          cta='Login'
          classColor={'btn-primary'}
          onHandleClick={onHandleLogin} />
      </form>
      <br/>
      
      
    </>
  )
}

export default LoginForm
