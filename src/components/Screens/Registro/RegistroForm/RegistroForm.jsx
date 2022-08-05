import { useRef } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setRegistroUser } from '../../../../app/slices/regUserSlice';
import { registro } from '../../../../services/crypto';
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'

const RegistroForm = () => {
  const navigate = useNavigate()
  const inputUserName = useRef()
  const inputPassword = useRef()
  const inputDepartamento = useRef()
  const inputCiudad = useRef()


  const dispatch = useDispatch()

  const onHandleRegistro = async e => {
    e.preventDefault()
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const departamento = Number(inputDepartamento.current.value)
    const ciudad = Number(inputCiudad.current.value)

    if (userName !== '' && password !== '' && departamento !== ''  && ciudad !== '' ) {
      try {
        console.log(userName, password, departamento, ciudad)
        const { apiKey, id } = await registro(userName, password, departamento, ciudad)
        
        const userReg = { apiKey: apiKey, id: id }
        console.log(userReg)
        dispatch(setRegistroUser(userReg))
        navigate('/')
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
        <label>Nombre de Usuario: </label>
        <br />
        <input className='form-control' type='text' ref={inputUserName} />
        <br />
        <label>Contraseña: </label>
        <br />
        <input className='form-control' type='password' ref={inputPassword} />
        <br />
        <label>Seleccionar Departamento:</label>
        <br />
        <input className='form-control' type='number' ref={inputDepartamento} />
        <br />
        <label>Seleccionar Ciudad: </label>
        <br />
        <input className='form-control' type='number' ref={inputCiudad} />
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