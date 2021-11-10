import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "../../estilos/tablero.css";
import { Layout, List } from "antd";
import TarjetaProducto from "../../componentes/TarjetaProducto";
import ConexionesProducto from "../../conexiones/api/ConexionesProducto";
import { ActualizarCategoria } from "../../Dominio/actions/actionProducto";
import Cabecera from "../../componentes/Cabecera";
import BarraLateral from "../../componentes/BarraLateral";


const {  Content } = Layout;


export default function Tablero() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(ActualizarCategoria(await ConexionesProducto.getListProducts()));
  }, [dispatch]);

  
  return (
    <Layout>
      <Cabecera />
      <Layout>
        <BarraLateral/>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={state}
              renderItem={(item) => (
                <List.Item>
                  <TarjetaProducto
                    props={{ nombre: item.nombre, foto: item.foto, descripcion: item.descripcion }}
                  />
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
