import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ConexionesProducto from "../../conexiones/api/ConexionesProducto";
import "../../estilos/crearproducto.css";
import Cabecera from "../../componentes/Cabecera";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Layout,
  Form,
  Upload,
  Input,
  Button,
  Select,
  Switch,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import BarraLateral from "../../componentes/BarraLateral";
import { useFormik } from "formik";

const { Content } = Layout;
const { Option } = Select;

export default function CrearProducto() {
  const categorias = ["peluche", "globos", "decoracion"];
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nombre: null,
      foto: null,
      descripcion: null,
      precio: null,
      cantidad: null,
      categoria: null,
      visual: true,
      prueba:''
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      precio: Yup.number().required("el precio es obligatorio"),
      cantidad: Yup.number().required("La cantidad es obligatoria"),
      descripcion: Yup.string().required("La descripcion es obligatoria"),
      categoria: Yup.string().required("La categoria es requerida"),
      visual: Yup.boolean().required("visual es requerido"),
      foto: Yup.string().required("La foto es requerida"),
    }),
    onSubmit: async (datos,{resetForm}) => {
      const res = await ConexionesProducto.createProduct({
        nombre: datos.nombre,
        foto: datos.foto,
        descripcion: datos.descripcion,
        precio: datos.precio,
        categoria: datos.categoria,
        visible: datos.visible,
        cantidad: datos.cantidad,
      })
        .then(
          message.success("se creo correctamente")
          
        )
        
        resetForm();
    },
    
  });

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const convertirBase64 = async (archivo, setformik) => {
    if (archivo) {
      var reader = new FileReader();
      reader.readAsDataURL(archivo.originFileObj);
      reader.onload = function () {
        const base64 = reader.result;
        setformik("foto", base64);
      };
    }
  };

  const seleccionarCategoria = (e, setformik) => {
    setformik("categoria", e);
  };

  const hola = (event,setfiel) =>{
      console.log(event)
      setfiel("prueba",event)

  }

  const numThousands = (num) => {
    return Intl.NumberFormat('es-CO').format(num);
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
              <Formik />
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
                <Form.Item label="Nombre">
                  <Input name="nombre" onChange={formik.handleChange}  />
                  
                </Form.Item>
                <Form.Item label="Descripcion">
                  <Input.TextArea
                    name="descripcion"
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Categorias">
                  <Select
                    name="categoria"
                    onChange={(e) =>
                      seleccionarCategoria(e, formik.setFieldValue)
                    }
                  >
                    {categorias.map((categ) => {
                      return <Option value={categ}>{categ}</Option>;
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Precio">
                  <Input
                    min={0}
                    autoComplete="off"
                    style={{ height: "32px", width: "100px" }}
                    type="number"
                    name="precio"
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Cantidad">
                  <Input
                    name="cantidad"
                    onBlur={formik.handleBlur}
                    min={0}
                    autoComplete="off"
                    style={{ height: "32px", width: "100px" }}
                    type="number"
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="prueba">
                  <Input
                    name="cantidad"

                    
                    autoComplete="off"
                    style={{ height: "32px", width: "100px" }}
                    value={numThousands( formik.values.prueba)}
                    type="text"
                    pattern="[0-9]+"
                    onChange={(event)=>{
                      const regex = /^[0-9]*$/;
                      
                      (regex.test(event.target.value.replace(/\./g, ''))) && 
                      //console.log(event.target.value)
                      
                     // console.log(regex.test(event.target.value.replace(/\./g, '')))
                      hola(event.target.value.replace(/\./g, ''),formik.setFieldValue)

                    }}
                  />
                </Form.Item>
                <Form.Item name="foto" label="Imagen">
                  <Upload
                    name="foto"
                    beforeUpload={true}
                    listType="picture"
                    onChange={(e) =>
                      convertirBase64(e.fileList[0], formik.setFieldValue)
                    }
                  >
                    <Button icon={<UploadOutlined />}>
                      Click para seleccionar
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item label="Ver" valuePropName="checked">
                  <Switch
                    name="visual"
                    defaultChecked={formik.values.visual}
                    onChange={(event) => {
                      formik.setFieldValue("visual", event);
                    }}
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Guardar
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
