import React from 'react'
import { getMonedas, addTransaccion} from '../../../../../services/crypto'
import { useRef, useEffect, useState } from 'react'
import { setMoneda, setMonedaCot} from '../../../../../app/slices/monedaSlice'
import { addNewTrans} from '../../../../../app/slices/transaccionesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setLogoutUser } from '../../../../../app/slices/userSlice'
import Button from '../../../../UI/Button/Button'
import Select from '../../../../UI/Select/Select'


const CreateTrans = () => {
  const [btnDisabled, setDisable] = useState(false)
  const selTrans = useRef()
  const monedas = useSelector(state => state.moneda.moneda)
  const user = useSelector(state => state.user.user)
  const inputCantidad = useRef()
  const valor = useSelector(state => state.moneda.monedaCot)

  const dispatch = useDispatch()
  console.log(user)
  useEffect(() => {
    try {
      ;(async () => {
        const { monedas } = await getMonedas(user.apiKey)
        console.log(monedas)
        dispatch(setMoneda(monedas))
      })()
    } catch (error) {}
  }, [dispatch])
  const _onHandleMonedahange = async idMoneda => {
    try {
      console.log(idMoneda)
      const { monedas } = await getMonedas(user.apiKey)
      const mostrar = monedas.filter( moneda => moneda.id === Number(idMoneda))
      console.log(mostrar[0].cotizacion)
      dispatch(setMonedaCot(mostrar[0].cotizacion)) 
      
      
    } catch (error) {}
  }
  const onAddTrans = async transaccion => {
  console.log(transaccion)
    try {
      const { codigo, id } = await addTransaccion(transaccion)
      if (codigo === 200) {
        const newTrans = {
          id: id,
          tipoOperacion: transaccion.tipoOperacion,
          moneda: transaccion.moneda,
          cantidad: transaccion.cantidad,
          valorActual:transaccion.valorActual,
        }
        // 2. Actualizo mi store
        dispatch(addNewTrans(newTrans))
        
      } else {
        alert('Ha ocurrido un error')
      }
    } catch (error) {
      const { codigo } = error
      if (codigo === 401) {
        dispatch(setLogoutUser())
      } else {
        alert('Ha ocurrido un error')
      }
    }
  }
  const onHandle= async e => {
    e.preventDefault()
    const trans = selTrans.current.value
    const monedaVal = monedas.value
    const cantidad = inputCantidad.current.value
    const valorActual = valor.valor
    setDisable(true)
    if(trans !== '' &&  monedaVal !== '' && cantidad !== '' && valorActual !== '') {
      try {
        console.log(trans)
        onAddTrans({ idUsuario: user.id, tipoOperacion: trans, moneda: monedaVal, cantidad: cantidad, valorActual: valorActual})
        
    
        
        
      } catch (error) {
        alert('Ha ocurrido un error', error)
      }
    } else {
      alert('Por favor complete los campos')
    }
    setDisable(false)
  }
  return <div>
    <h2>Crear una nueva transacción</h2>
    <form>
        <label>Tipo de operacion: </label>
        <br />
        <select ref={selTrans}>
          <option value="">Seleccionar un opción</option>
          <option value="1">Compra</option>
          <option value="2">Venta</option>
        </select>
        <br />
        <label>Seleccionar Moneda:</label>
        <Select options={monedas}  onHandleChange={_onHandleMonedahange} />
        <br />
        <label>Cantidad:</label>
        <br />
        <input className='form-control' type='text' ref={inputCantidad} />
        <br />
        <label>Valor actual:</label>
        <input className='form-control' type='text' readOnly value={valor} />
        <Button
          cta='crearTrans'
          classColor={'btn-primary'}
          onHandleClick={onHandle}
          disabled={btnDisabled}
        ></Button>
    </form>

  </div>
}

export default CreateTrans
