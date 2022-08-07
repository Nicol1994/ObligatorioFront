import React from 'react'
import CreateTrans from './CreateTrans/CreateTrans'
import Table from './Table/Table'


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
      <Table />
    </main>
  )
}

export default Main
