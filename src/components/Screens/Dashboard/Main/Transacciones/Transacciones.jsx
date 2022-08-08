import React from "react";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrans } from '../../../../../app/slices/transaccionesSlice'
import { getTransacciones } from '../../../../../services/crypto'
import Table from "../Table/Table";

const Transacciones = () => {
    const dispatch = useDispatch()
    const trans = useSelector(state => state.trans.trans)
    const user = useSelector(state => state.user.user)
    useEffect(() => {
        try {
          ;(async () => {
            const transacciones = await getTransacciones(user.apiKey,user.id)
            dispatch(setTrans(transacciones))
            console.log(transacciones)
          })()
        } catch (error) {
          console.error(error)
        }
      }, [user, dispatch])
      const transaccion = trans.transacciones;
      console.log(transaccion)
    return(
        <div className="row">
            {
                
                <Table transacciones={transaccion}  />
            }
        </div>
    )
}
export default Transacciones