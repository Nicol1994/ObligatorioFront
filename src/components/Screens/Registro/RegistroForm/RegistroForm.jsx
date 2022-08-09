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
import Alert from '../../../UI/Alert/Alert'


const RegistroForm = () => {
  const [message, setMessage] = useState('')
  const [messageClass, setClass] = useState('')
  const [btnDisabled] = useState(false);
  const [btnCta] = useState('Registro');
  const [idDepto, setDepto] = useState(null);
  const [idCiudad, setCiudad] = useState(null);
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
  
 
  const _onHandleDptoChange = async id => {
    setDepto(id);
    console.log(idDepto)
    try {
      const { ciudades } = await getCiudades(id)
      dispatch(setCiudades(ciudades))
    } catch (error) {}
  }
  const _onHandleCiudChange = async id => {
    setCiudad(id)
    console.log(idCiudad)
  }


  const onHandleRegistro = async e => {
    e.preventDefault()
    console.log(e)
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const depto = idDepto;
    const ciudad = idCiudad;
   console.log(userName, password,depto, ciudad)
    if (userName !== '' && password !== '' && depto !== ''  && ciudad !== '' ) {
      try {
        console.log(userName, password, depto, ciudad)
        const { apiKey, id } = await registro(userName, password, depto, ciudad)
        
        const userReg = { apiKey: apiKey, id: id }
        console.log(userReg)
        dispatch(setRegistroUser(userReg))
        setClass('danger');
        setMessage(`Usuario ${userName} inicio de sesión correcto !`);
        
        
        console.log(message)
        navigate('/')
      } catch (error) {
        setClass('danger');
        setMessage('Ha ocurrido un error');
        _resetMessage()
        //alert('Ha ocurrido un error', error)
      }
    } else {
      setClass('danger');
      setMessage('Ha ocurrido un error');
      _resetMessage()
      //alert('Por favor complete los campos')
    }
  }

  const _resetMessage = () => {
    setTimeout(() => {
      setClass('')
      setMessage('')
    }, 3000)
  }
  return (
    <>
      <form>
        
        <Alert classColor={messageClass} message={message} />
        
        <label>Nombre de Usuario: </label>
        <br />
        <input className='form-control' type='text' ref={inputUserName} />
        <br />
        <label>Contraseña: </label>
        <br />
        <input className='form-control' type='password' ref={inputPassword} />
        <br />
        <label>Seleccionar Departamento</label>
        <Select options={departamento}  onHandleChange={_onHandleDptoChange} />
        <br />
        <label>Seleccionar Ciudad</label>
        <Select options={ciudad} onHandleChange={_onHandleCiudChange} />
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