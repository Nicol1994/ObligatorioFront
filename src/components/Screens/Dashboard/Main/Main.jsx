import React from 'react'
import CreateTrans from './CreateTrans/CreateTrans'



const Main = () => {
  return (
    <main>
      <div className='grid'>
        <div className='g-col-6'>
          <p>LLenar con lista</p>
          <CreateTrans />
        </div>
        <br />
      </div>
      <br />
      
    </main>
  )
}

export default Main
