import React from 'react'
import { getMonedas } from '../../../../../services/crypto'
import { useRef, useEffect } from 'react'
import { setMoneda } from '../../../../../app/slices/monedaSlice'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../../../UI/Button/Button'
import Select from '../../../../UI/Select/Select'


const CreateTrans = () => {
const selTrans = useRef()
const monedas = useSelector(state => state.moneda.moneda)
const user = useSelector(state => state.user.user)
const inputCantidad = useRef()
const dispatch = useDispatch()
console.log(user)
  useEffect(() => {
    try {
      ;(async () => {
        const { monedas } = await getMonedas(user.apiKey)
        dispatch(setMoneda(monedas))
      })()
    } catch (error) {}
  }, [dispatch])
  const valorActual = () => {
    return(
      monedas.map()
    )
  }
  const onHandle= async e => {
    e.preventDefault()
    const trans = selTrans.current.value
    

    if (trans !== ''  ) {
      try {
        console.log(trans)
        
        
    
        dispatch()
        
      } catch (error) {
        alert('Ha ocurrido un error', error)
      }
    } else {
      alert('Por favor complete los campos')
    }
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
        <Select options={monedas}/>
        <br />
        <label>Cantidad:</label>
        <br />
        <input className='form-control' type='text' ref={inputCantidad} />
        <br />
        <label>Valor actual:</label>
        <p className='card-text'>
                <span className='badge bg-danger'>
                  {valorActual()}
                </span>
              </p>
        <Button
          cta='crearTrans'
          classColor={'btn-primary'}
          onHandleClick={onHandle}
        />
    </form>

  </div>
}

export default CreateTrans