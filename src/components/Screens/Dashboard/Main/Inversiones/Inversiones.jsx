import React from 'react'
import { useSelector } from 'react-redux'



const MontoInversiones = () => {
    let trans = useSelector(state => state.trans.trans)
  
    const calcularFondoInversion = () => {
          let transaccion = trans.transacciones;
          let inversionTotalCompras = 0
          let inversionTotalVentas = 0
          let inversionTotal = 0
          if(transaccion !== undefined && transaccion !== null){
              let compras = transaccion.filter(t => t.tipo_operacion == 1);
              let ventas = transaccion.filter(t => t.tipo_operacion == 2);
              
              compras.forEach(t => {
                  inversionTotalCompras += t.cantidad *t.valor_actual;   
              });

              ventas.forEach(t => {
                inversionTotalVentas += t.cantidad *t.valor_actual;   
              }); 

            inversionTotal = inversionTotalCompras - inversionTotalVentas
          }
  


      return inversionTotal;
    }
  
    return (
      <div className='container metrics'>
        <h5>Monto final de inversiones</h5>
          <div className='row'>
              <div className='col-4'>
                  <div className='card'>
                        <div className='card-body'>
                        <input className='form-control' type='text' readOnly value={calcularFondoInversion()} />

                        </div>
                  </div>
              </div>
          </div>
      </div>
  
      
    )
  }
  
  export default MontoInversiones
  

