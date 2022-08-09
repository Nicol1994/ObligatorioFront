import { useSelector} from 'react-redux'
import React from 'react'
import Pie from './Pie'


const Charts = () => {
  let trans = useSelector(state => state.trans.trans)

  const _calculateCompras = (tipoOperacion,idMoneda) => {
        let transaccion = trans.transacciones;
        let inversionTotal = 0
        if(transaccion !== undefined && transaccion !== null){
            transaccion = transaccion.filter(t => t.tipo_operacion == tipoOperacion && t.moneda == idMoneda);
            //console.log(transaccion);
            
            transaccion.forEach(t => {
                inversionTotal += t.cantidad *t.valor_actual;   
            });   
    
            //console.log('INVERSION TOTAL: ' +inversionTotal) 
    
        }

    return inversionTotal;
    //return 15;
  }




  return (
    <div className='container metrics'>
      <h5>Compras y Ventas</h5>
        <div className='row'>
            <div className='col-4'>
                <div className='card'>

                    <div className='card-body'>
                <h6>Compras</h6>

                        <Pie
                            Vintereum={_calculateCompras(1,1)}
                            Pesocoin={_calculateCompras(1,2)}
                            Monereum={_calculateCompras(1,3)}
                            Finance_URU={_calculateCompras(1,4)}
                            MvdCoin={_calculateCompras(1,5)}
                            Hexagon={_calculateCompras(1,6)}
                            Guitchain={_calculateCompras(1,7)}
                            Money_Token={_calculateCompras(1,8)}
                            MDG={_calculateCompras(1,9)}
                        />
                    </div>
                    <div className='card-body'>
                <h6>Ventas</h6>

                        <Pie
                            Vintereum={_calculateCompras(2,1)}
                            Pesocoin={_calculateCompras(2,2)}
                            Monereum={_calculateCompras(2,3)}
                            Finance_URU={_calculateCompras(2,4)}
                            MvdCoin={_calculateCompras(2,5)}
                            Hexagon={_calculateCompras(2,6)}
                            Guitchain={_calculateCompras(2,7)}
                            Money_Token={_calculateCompras(2,8)}
                            MDG={_calculateCompras(2,9)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Charts
