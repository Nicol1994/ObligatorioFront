import React from 'react'
import CreateTrans from './CreateTrans/CreateTrans'
import Transacciones from './Transacciones/Transacciones'
import MontoInversiones from './Inversiones/Inversiones'
import Charts from './Charts/Charts'


const Main = () => {
  return (
    <main>
      <div className='grid'>
        
        <div className='g-col-6'>
          <Charts />
          <MontoInversiones />
          <CreateTrans /> 
        </div>
        <br />
        <div className='g-col-6'>
          
          <Transacciones/>
        </div>
        
      </div>
      <br />
      
    </main>
  )
}

export default Main
