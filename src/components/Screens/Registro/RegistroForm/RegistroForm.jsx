import { useRef } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setRegistroUser } from '../../../../app/slices/regUserSlice';
import { registro } from '../../../../services/crypto';
import Button from '../../../UI/Button/Button'

const RegistroForm = () => {
  const inputUserName = useRef()
  const inputPassword = useRef()
  const inputDepartamento = useRef()
  const inputCiudad = useRef()


  const dispatch = useDispatch()

  const onHandleRegistro = async e => {
    e.preventDefault()
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const departamento = inputDepartamento.current.value
    const ciudad = inputCiudad.current.value

    if (userName !== '' && password !== '' && departamento !== ''  && ciudad !== '' ) {
      try {
        const { apiKey, id } = await registro(userName, password, departamento, ciudad)
        const userReg = { apiKey: apiKey, id: id }
        dispatch(setRegistroUser(userReg))
      } catch (error) {
        alert('Ha ocurrido un error', error)
      }
    } else {
      alert('Por favor complete los campos')
    }
  }
  return (
    <>
      <form>
        <label>Username</label>
        <br />
        <input className='form-control' type='text' ref={inputUserName} />
        <br />
        <label>Password</label>
        <br />
        <input className='form-control' type='password' ref={inputPassword} />
        <br />
        <label>Departamento</label>
        <br />
        <input className='form-control' type='text' ref={inputDepartamento} />
        <br />
        <label>Ciudad</label>
        <br />
        <input className='form-control' type='text' ref={inputCiudad} />
        <br />
        <Button
          cta='Registro'
          classColor={'btn-primary'}
          onHandleClick={onHandleRegistro}
        />
      </form>
    </>
  )
}

export default RegistroForm