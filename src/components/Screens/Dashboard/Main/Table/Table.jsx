import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrans } from '../../../../../app/slices/transaccionesSlice'
import { getTransacciones } from '../../../../../services/crypto'
import './Table.css'
import TableItemRow from './TableItemRow'
import React from 'react'

const Table = () => {
  const dispatch = useDispatch()
  const trans = useSelector(state => state.trans.trans)
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    try {
      ;(async () => {
        const transacciones = await getTransacciones(user.apiKey,user.id)
        dispatch(setTrans(transacciones))
        console.log(transacciones)
      })()
    } catch (error) {
      console.error(error)
    }
  }, [user, dispatch])
  console.log(trans)
  
  return (
    
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>Tipo de Operación</th>
          <th scope='col'>Moneda</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Valor Actual</th>
        </tr>
      </thead>
      <tbody>
        {
          trans.map(t => (<TableItemRow t={t}/>)) 
        }
      </tbody>
    </table>
  )
}
export default Table
