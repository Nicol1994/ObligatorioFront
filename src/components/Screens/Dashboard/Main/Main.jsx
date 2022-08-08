import React from 'react'
import CreateTrans from './CreateTrans/CreateTrans'
import Transacciones from './Transacciones/Transacciones'


const Main = () => {
  return (
    <main>
      <div className='grid'>
        
        <div className='g-col-6'>
          
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
