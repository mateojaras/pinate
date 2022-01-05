import React, { Fragment } from "react";
import {
	Checkbox,
	Col,
	message,
	Radio,
	Row,
	Select,
	Space,
	Tooltip,
	Tag,
} from "antd";

const { Option } = Select;

const tagRender = (props) => {
	console.log(props);
	const { label, closable } = props;
	const onPreventMouseDown = (event) => {
		event.preventDefault();
		event.stopPropagation();
	};
	return (
		<Tag
			//   color={validateColorTag(props.value)}
			onMouseDown={onPreventMouseDown}
			closable={closable}
			visible={true}
			// onClose={() => {
			//   setIsVisibleModal(true);
			//   setVisibleTag(props.value);
			// }}
		>
			{label}
		</Tag>
	);
};

const listaopciones = [
	{ id: "1", name: "hola" },
	{ id: "2", name: "hola mundo" },
	{ id: "3", name: "hola prueba" },
];

export default function Prueba() {
	return (
		<Fragment>
			<Row>
				<Col span={24}>
					<Select
						mode="multiple"
						placeholder="Seleccionar Area"
						// onChange={(e) => {
						// 	validationAreaField(e);
						// }}
						//value={["1"]}
						tagRender={tagRender}
						style={{ width: "200px" }}
					>
						<Option disabled value={""}>
							Seleccione
						</Option>
						{listaopciones
							? listaopciones.map((option, index) => {
									return (
										<Option value={option.id} key={index}>
											{option.name}
										</Option>
									);
							  })
							: ""}
					</Select>
				</Col>
			</Row>
		</Fragment>
	);
}
