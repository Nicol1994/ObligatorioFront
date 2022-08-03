import React from 'react'
import '../Dashboard'
import Header from './Header'
import Main from './Main'

const Dashboard = () => {

  return (
    <div className='container-fluid dashboard'>
      <Header />
      <div>
        <div className='col-9 mx-auto'>
          <div className='card'>
            <div className='card-header'>
              <h5 className='card-header'></h5>
            </div>
            <div className='card-body'>
              <Main />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
