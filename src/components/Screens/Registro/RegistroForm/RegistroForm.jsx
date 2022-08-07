import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRegistroUser } from '../../../../app/slices/regUserSlice';
import { registro } from '../../../../services/crypto';
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import { setCiudades, setDepartamentos } from '../../../../app/slices/ubicacionSlice'
import { getDepartamentos, getCiudades } from '../../../../services/crypto'
import Select from '../../../UI/Select'
import Alert from '../../../UI/Alert'

const RegistroForm = () => {
  const [message] = useState('')
  const [btnDisabled] = useState(false)
  const [btnCta] = useState('Registro')
  const navigate = useNavigate()
  const inputUserName = useRef()
  const inputPassword = useRef()
  const departamento = useSelector(state => state.ubicacion.departamentos)
  const ciudad = useSelector(state => state.ubicacion.ciudades)
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      ;(async () => {
        const { departamentos } = await getDepartamentos()
        
        dispatch(setDepartamentos(departamentos))
      })()
    } catch (error) {}
  }, [dispatch])
  
 
  const _onHandleDptoChange = async idDpto => {
    
    try {
      const { ciudades } = await getCiudades(idDpto)
      dispatch(setCiudades(ciudades))
    } catch (error) {}
  }


  const onHandleRegistro = async e => {
    e.preventDefault()
    console.log(e)
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const depto = departamento.value
    const ciudadN = ciudad.value
   
    if (userName !== '' && password !== '' && depto !== ''  && ciudadN !== '' ) {
      try {
        console.log(userName, password, depto, ciudad)
        const { apiKey, id } = await registro(userName, password, depto, ciudadN)
        
        const userReg = { apiKey: apiKey, id: id }
        console.log(userReg)
        dispatch(setRegistroUser(userReg))
        alert(`Usuario ${userName}, Departamento ${depto} - Ciudad ${ciudadN} credo con exito!`)
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
      {message !== '' ? (
          <Alert  message={message} />
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
        <label>Seleccionar Departamento</label>
        <Select options={departamento} onHandleChange={_onHandleDptoChange} />
        <br />
        <label>Seleccionar Ciudad</label>
        <Select options={ciudad} />
        <br />
        <Button
          cta={btnCta}
          classColor={'btn-primary'}
          onHandleClick={onHandleRegistro}
          disabled={btnDisabled}
          
        />
      </form>
    </>
  )
}

export default RegistroForm