import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ConexionesProducto from "../../conexiones/api/ConexionesProducto";
import "../../estilos/crearproducto.css";
import Cabecera from "../../componentes/Cabecera";
import {
  Layout,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import BarraLateral from "../../componentes/BarraLateral";
import { useFormik } from "formik";

const { Content } = Layout;

export default function CrearProducto() {
  const [imagen64, setimagen64] = useState();
  const [categoria, setcategoria] = useState("categorias");
  const [dropdown, setdropdown] = useState(false);
  const [visible, setvisible] = useState(true);
  const categorias = ["peluche", "globos", "decoracion"];

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      foto: "",
      descripcion: "",
      precio: "",
      cantidad: "",
    },
    onSubmit: (datos) => {
      console.log(datos);
    },
  });

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const abrircerrarDropdown = () => {
    setdropdown(!dropdown);
  };

  const convertirBase64 = async (archivo) => {
    var reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = function () {
      const base64 = reader.result;
      console.log(base64);
      setimagen64(base64);
    };
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    const { target } = event;
    const nombre = target.nombre.value;
    const precio = target.precio.value;
    const descripcion = target.descripcion.value;
    const cantidad = target.cantidad.value;

    CrearProducto({
      nombre: nombre,
      foto: imagen64,
      descripcion: descripcion,
      precio: precio,
      categoria: categoria,
      visible: visible,
      cantidad: cantidad,
    });
  };

  const CrearProducto = async (producto) => {
    const res = await ConexionesProducto.createProduct(producto);
    console.log(res);
  };

  const categoriaSeleccionada = (event) => {
    setcategoria(event.target.value);
  };

  return (
    <Layout>
      <Cabecera />
      <Layout>
        <BarraLateral />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <>
              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onFinish={formik.handleSubmit}
              >
                <Form.Item label="Form Size" name="size">
                  <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Input">
                  <Input name="nombre" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Select">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                  <TreeSelect
                    treeData={[
                      {
                        title: "Light",
                        value: "light",
                        children: [
                          {
                            title: "Bamboo",
                            value: "bamboo",
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="Cascader">
                  <Cascader
                    options={[
                      {
                        value: "zhejiang",
                        label: "Zhejiang",
                        children: [
                          {
                            value: "hangzhou",
                            label: "Hangzhou",
                          },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="DatePicker">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="InputNumber">
                  <InputNumber />
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                  <Switch />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
