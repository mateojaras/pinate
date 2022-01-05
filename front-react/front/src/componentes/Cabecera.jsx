import React from "react";
import { Layout, Menu} from "antd";
import { useHistory } from "react-router";
import { auth } from "../conexiones/firebase/firebase";

const { Header } = Layout;

export default function Cabecera() {

    const history = useHistory();
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item
          key="1"
          onClick={() => {
            history.push("/principal");
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => {
            history.push("/crear");
          }}
        >
          Crear Producto
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={() => {
            auth().signOut();
          }}
        >
          Cerrar sesion
        </Menu.Item>
      </Menu>
    </Header>
  );
}
