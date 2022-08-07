import React from 'react'
const TableItemRow = ({ transaccion }) => {
  
  return (
    <>
      <tr key={transaccion.id}>
          <th scope='row'>{transaccion.id}</th>
          <td>{transaccion.tipo_operacion}</td>
          <td>{transaccion.moneda}</td>
          <td>{transaccion.cantidad}</td> 
          <td>{transaccion.valor_actual}</td> 
      </tr>
        
    </>
    
    
  )
}

export default TableItemRow
