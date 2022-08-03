import React from 'react'
import RegistroForm from './RegistroForm'

const Registro = () => {
  return (
    <>
      <section className='d-flex flex-md justify-content-center registro'>
        <div className='card'>
          <h3>Registro</h3>
          <section className='card-body'>
            <RegistroForm />
          </section>
        </div>
      </section>
    </>
  )
}

export default Registro
