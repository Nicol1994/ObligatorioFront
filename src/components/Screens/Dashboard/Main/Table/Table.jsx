import { useRef } from 'react'
import React from 'react'
import './Table.css'

const Table = ({transacciones}) => {
  const tablaRef = useRef()
  
  return (
    <>
      <h2> Lista de transacciones</h2>
    <table className='table table-hover' ref={tablaRef}>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Tipo de Operación</th>
          <th scope='col'>Moneda</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Valor Actual</th>
        </tr>
      </thead>
      <tbody>
        {transacciones.map(transacion => (
            <tr  key={transacion.id}>
                <th scope='row'>{transacion.id}</th>
                <td>{(transacion.tipo_operacion) === 1 ? 'Compra' : 'Venta'}</td>
                <td>{transacion.moneda}</td>
                <td>{transacion.cantidad}</td> 
                <td>{transacion.valor_actual}</td> 
            </tr>
        ))}
      </tbody>
    </table>
    </>
    
    
  )
}
Table.defaultProps = {
  transacciones: [],
  
}
export default Table
