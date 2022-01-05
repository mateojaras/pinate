import React from "react";
import { Layout, Menu, List } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
	ActualizarCategoria,
	ModificarVisible,
} from "../Dominio/actions/actionProducto";
import ConexionesProducto from "../conexiones/api/ConexionesProducto";

const { SubMenu } = Menu;
const { Sider } = Layout;
const categorias = ["Mostrar Todos", "globos", "decoracion", "peluche"];

export default function BarraLateral() {
	const dispatch = useDispatch();
	const listadoProductos = useSelector((state) => state);

	const Ordenar = async (e) => {
		if (e === "Mostrar Todos") {
			const producto = listadoProductos.map((item) => {
				return {
					...item,
					visual: true,
				};
			});
			dispatch(ActualizarCategoria(producto));
		} else {
			dispatch(ModificarVisible(listadoProductos, e));
		}
	};

	return (
		<Sider width={200} className="site-layout-background">
			<Menu
				mode="inline"
				theme="dark"
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				style={{ height: "100%", borderRight: 0 }}
			>
				<SubMenu key="sub1" icon={<UserOutlined />} title="Categoria">
					{categorias.map((categoria) => {
						return (
							<Menu.Item key={categoria} onClick={() => Ordenar(categoria)}>
								{categoria}
							</Menu.Item>
						);
					})}
				</SubMenu>
			</Menu>
		</Sider>
	);
}
