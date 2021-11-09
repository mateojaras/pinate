import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConexionesProducto from '../conexiones/api/ConexionesProducto';
import { ActualizarCategoria } from '../Dominio/actions/actionProducto';
import "../estilos/navbarside.css";

export default function NavbarSide() {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const categorias = ["Mostrar Todos","globos","decoracion","peluche"]

    const Ordenar = async(e) =>{
        if(e === "Mostrar Todos"){
            const producto = await ConexionesProducto.getListProducts()
            dispatch(ActualizarCategoria(producto));
        }
        else{
            const producto = await ConexionesProducto.getListProductsCategory(e);
            dispatch(ActualizarCategoria(producto));
        }
        
    }

    return (
        <div class="sidebar">
            <div class="section">
                <div class="item">Categoria</div>
                {
                  categorias.map(categoria =>{
                      return <div className="item2" onClick={()=>Ordenar(categoria)}>{categoria}</div>
                  })  
                }
                
            </div>
            <div class="section">
                <div class="item">Settings</div>
                <div class="item">Question?</div>
            </div>
        </div>
    )
}
