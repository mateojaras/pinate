import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tarjeta from "../../componentes/Tarjeta";
import ConexionesProducto from "../../conexiones/api/ConexionesProducto";
import NavbarSide from "../../componentes/NavbarSide";
import { useDispatch, useSelector } from "react-redux";
import { ActualizarCategoria } from "../../Dominio/actions/actionProducto";
import { Col, DatePicker, Row } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

export default function Principal() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(ActualizarCategoria(await ConexionesProducto.getListProducts()));
  }, [dispatch]);

  return (
    <Row>
      <Col span={6}>
        <NavbarSide />
      </Col>
      <Col span={8}>
      <div class="cards-list">
        {state.map((prod) => {
          return <Tarjeta props={{ nombre: prod.nombre, foto: prod.foto }} />;
        })}
      </div>
      </Col>
    </Row>
  );
}
