import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import * as Yup from "yup";
import { useFormik } from "formik";
import { login } from "../../conexiones/firebase/funcionesfirebase";
import { useHistory } from "react-router";

export default function InicioSesion() {

  const history = useHistory();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formik = useFormik({
    initialValues: {
      usuario: "",
      contraseña: "",
    },
    validationSchema: Yup.object({
      usuario: Yup.string().email("Eimail incorrecto").required("Es requerido"),
      contraseña: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (datos, { resetForm }) => {
      try {
        const res = await login(datos.usuario, datos.contraseña)
        .then((res) => {
          history.push('/principal')
        });
      } catch (error) {
        console.log(error);
      }
     
    },
  });

  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={24} style={{ height: "150px" }}></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}></Col>
        <Col span={8}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={formik.handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Usuario"
              name="usu"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input name="usuario" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="contra"
              onChange={formik.handleChange}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                name="contraseña"
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
