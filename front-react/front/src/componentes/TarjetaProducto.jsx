import React from "react";
import "antd/dist/antd.css";
import { Card, Avatar } from "antd";
import "../estilos/tarjetaproducto.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default function TarjetaProducto({ props }) {
  return (
    <Card
      className="custom-card"
      cover={<img alt="example" src={props.foto}  height={250} />}
      bordered={false}
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis"  />,
        
      // ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={props.nombre}
        description={props.descripcion}
      />
    </Card>
  );
}
