import React, { useState, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import ConexionesProducto from '../../conexiones/api/ConexionesProducto';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import "../../estilos/crearproducto.css"

export default function CrearProducto() {

    const [imagen64, setimagen64] = useState()
    const [categoria, setcategoria] = useState("categorias")
    const [dropdown, setdropdown] = useState(false)
    const [visible, setvisible] = useState(true)
    const categorias = ["peluche", "globos", "decoracion"]

    const dispatch = useDispatch()

    const abrircerrarDropdown = () => {
        setdropdown(!dropdown)
    }


    const convertirBase64 = async (archivo) => {
        var reader = new FileReader();
        reader.readAsDataURL(archivo)
        reader.onload = function () {
            const base64 = reader.result;
            console.log(base64)
            setimagen64(base64)
        }
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        const { target } = event;
        const nombre = target.nombre.value;
        const precio = target.precio.value;
        const descripcion = target.descripcion.value;
        const cantidad = target.cantidad.value

        CrearProducto({
            nombre: nombre,
            foto: imagen64,
            descripcion: descripcion,
            precio: precio,
            categoria: categoria,
            visible: visible,
            cantidad: cantidad
        })
    }

    const CrearProducto = async (producto) => {

        const res = await ConexionesProducto.createProduct(producto)
        console.log(res)
    }

    const categoriaSeleccionada = (event) => {
        setcategoria(event.target.value)

    }


    return (
        <>


            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="well well-sm">
                            <form class="form-horizontal" onSubmit={enviarDatos}>
                                <fieldset>
                                    <legend class="text-center header">Registrar Producto</legend>

                                    <div class="form-group">
                                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="fname" name="nombre" type="text" placeholder="Nombre" class="form-control" />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="email" name="precio" type="number" placeholder="Precio" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                        <div class="col-md-8">
                                            <input id="cantidad" name="cantidad" type="number" placeholder="Cantidad" class="form-control" />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                                        <div class="col-md-8">
                                            <textarea class="form-control" id="descripcion" name="message" placeholder="Descripcion sobre el producto" rows="7"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div className="col-md-8">
                                            <input className="form-control" type="file" multiple onChange={(e) => convertirBase64(e.target.files[0])} />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div className="col-md-4">
                                            <Dropdown isOpen={dropdown} toggle={abrircerrarDropdown}>
                                                <DropdownToggle caret>
                                                    {categoria}
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    {
                                                        categorias.map(cat => {
                                                            return <DropdownItem onClick={categoriaSeleccionada} value={cat}>{cat}</DropdownItem>
                                                        })
                                                    }
                                                </DropdownMenu>
                                            </Dropdown>

                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked={visible} onChange={(e)=>{setvisible(e.target.checked)}}/>
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Visible en la pagina</label>
                                        </div>

                                    </div>



                                    <div class="form-group">
                                        <div class="col-md-12 text-center">
                                            <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
                                        </div>
                                    </div>



                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <img src={imagen64} />

        </>

    )
}
