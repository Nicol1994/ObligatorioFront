import { useSelector} from 'react-redux'
import React from 'react'
import Pie from './Pie'


const Charts = () => {
  let trans = useSelector(state => state.trans.trans)

  const _calculateCompleted = async () => {
    //const transaccion = trans.transacciones.filter(t => t.tipo_operacion == 1).length;
    const transaccion = trans.transacciones;
    if(transaccion !== undefined && transaccion !== null){
        console.log(transaccion);

    }

    return transaccion;
    //return 15;
  }

  const _calculateIncomplete = () => {
    //return todos.filter(todo => todo.completed).length
    return 45;
  }
  return (
    <div className='container metrics'>
      <h5>METRICS</h5>
        <div className='row'>
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>
                        <Pie
                            compras={_calculateCompleted()}
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Charts
