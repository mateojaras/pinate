import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tarjeta from '../../componentes/Tarjeta';
import ConexionesProducto from '../../conexiones/api/ConexionesProducto';
import NavbarSide from '../../componentes/NavbarSide';
import { useDispatch, useSelector } from 'react-redux';
import { ActualizarCategoria } from '../../Dominio/actions/actionProducto';


export default function Principal() {

    const state = useSelector(state => state);

    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(ActualizarCategoria(await ConexionesProducto.getListProducts()))
    }, [dispatch])


    return (
        <div>
            
            <div class="cards-list">
            <NavbarSide />
                {
                    state.map(prod => {
                        return <Tarjeta props={{ nombre: prod.nombre, foto: prod.foto }} />
                    }

                    )
                }
            </div >
        </div>

    )
}
