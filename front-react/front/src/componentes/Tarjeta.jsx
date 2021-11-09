import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/tarjeta.css"

export default function Tarjeta({props}) {


    return (
        
            <div class="card 1">
                <div class="card_image"> <img src={props.foto} /> </div>
                <div class="card_title title-white">
                    <p>{props.nombre}</p>
                </div>
            </div>
        
    )
}
