import { useEffect, useRef } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setRegistroUser } from '../../../../app/slices/regUserSlice';
import { registro } from '../../../../services/crypto';
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import { setCiudades, setDptos } from '../../../../app/slices/ubicacionSlice'
import { getCiudades, getDptos } from '../../../../services/crypto'
import Select from '../../../UI/Select'

const RegistroForm = () => {
  const navigate = useNavigate()
  const inputUserName = useRef()
  const inputPassword = useRef()
  const selDepartamento = useRef()
  const selCiudad = useRef()


  const dispatch = useDispatch()
  useEffect(() => {
    try {
      ;(async () => {
        const { selDepartamento } = await getDptos()
        console.log(selDepartamento)
        dispatch(setDptos(selDepartamento))
      })()
    } catch (error) {}
  }, [dispatch])
  const _onHandleDptoChange = async idDpto => {
    try {
      console.log(idDpto)
      const { selCiudad } = await getCiudades(idDpto)
      dispatch(setCiudades(selCiudad))
    } catch (error) {}
  }


  const onHandleRegistro = async e => {
    e.preventDefault()
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const departamento = Number(selDepartamento.current.value)
    const ciudad = Number(selCiudad.current.value)

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
        <br />
        <label>Seleccionar Departamento</label>
        <Select options={selDepartamento} onHandleChange={_onHandleDptoChange} />
        <br />
        <label>Seleccionar Ciudad</label>
        <Select options={selCiudad} />
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