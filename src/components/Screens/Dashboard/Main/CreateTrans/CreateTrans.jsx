import React from 'react'
const CreateTrans = () => {
  return <div>
    <h2>Crear una nueva transacción</h2>
    <form>
        <label>Tipo de operacion: </label>
        <br />
        <select ref={selTrans}>
          <option value="">Seleccionar un opción</option>
          <option value="1">Compra</option>
          <option value="2">Venta</option>
        </select>
        
        <br />
        <label>Moneda: </label>
        <br />
        <input className='form-control' type='text' ref={inputMoneda} />
        <br />
        <br />
        <Button
          cta='crearTrans'
          classColor={'btn-primary'}
          onHandleClick={onHandle}
        />
    </form>

  </div>
}

export default CreateTrans
