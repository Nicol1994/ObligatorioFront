import React from 'react'
import { getMonedas, addTransaccion} from '../../../../../services/crypto'
import { useRef, useEffect, useState } from 'react'
import { setMonedas, setMonedaCot, setMoneda} from '../../../../../app/slices/monedaSlice'
//import { addNewTrans} from '../../../../../app/slices/transaccionesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setLogoutUser } from '../../../../../app/slices/userSlice'
import Button from '../../../../UI/Button/Button'
import Select from '../../../../UI/Select/Select'


const CreateTrans = () => {
  const [btnDisabled, setDisable] = useState(false)
  const selTrans = useRef()
  const monedas = useSelector(state => state.moneda.monedas)
  const moneda = useSelector(state => state.moneda.moneda)
  const user = useSelector(state => state.user.user)
  const inputCantidad = useRef()
  const valor = useSelector(state => state.moneda.monedaCot)
  const dispatch = useDispatch()
  
  useEffect(() => {
    try {
      ;(async () => {
        const { monedas } = await getMonedas(user.apiKey)
        console.log(monedas)
        dispatch(setMonedas(monedas)) 
      })()
    } catch (error) {}
  }, [dispatch])


  const _onHandleMonedahange = async idMoneda => {
    try {
      console.log(idMoneda)
      const { monedas } = await getMonedas(user.apiKey)
      const mostrar = monedas.filter( moneda => moneda.id === Number(idMoneda))
      dispatch(setMoneda(mostrar[0]));
      dispatch(setMonedaCot(mostrar[0].cotizacion))  
    } catch (error) {}
  }

  const onAddTrans = async (transaccion) => {
    console.log(transaccion)
    try {
      const { idTransaccion, mensaje, codigo} = await addTransaccion(user.apiKey, transaccion)
      console.log(idTransaccion, mensaje, codigo)
      if (codigo === 200) {
        const newTrans = {
          id: idTransaccion,
          idUsuario: transaccion.idUsuario,
          tipoOperacion: transaccion.tipoOperacion,
          moneda: transaccion.moneda,
          cantidad: transaccion.cantidad,
          valorActual: transaccion.valorActual,
        }
        console.log(newTrans)
        
        // 2. Actualizo mi store
        //dispatch(addNewTrans(newTrans))
        
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
    const monedaVal = moneda.id
    const cantidad = inputCantidad.current.value
    const valorActual = valor
    console.log(trans, monedaVal, cantidad, valorActual)
    setDisable(true)
    if(trans !== '' &&  monedaVal !== '' && cantidad !== '' && valorActual !== '') {
      try {
        console.log(trans, monedaVal, cantidad, valorActual)
        onAddTrans( {idUsuario: user.id, tipoOperacion: Number(trans), moneda: monedaVal, cantidad: Number(cantidad), valorActual: valorActual})
  
      } catch (error) {
        alert('4Ha ocurrido un error', error)
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
        <Select options={monedas} onHandleChange={_onHandleMonedahange} />
        <br />
        <label>Cantidad:</label>
        <br />
        <input className='form-control' type='text' ref={inputCantidad} />
        <br />
        <label>Valor actual:</label>
        <input className='form-control' type='text' readOnly value={valor} />
        <br/>
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
