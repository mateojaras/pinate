export const ActualizarCategoria = (categoria) => {
	return {
		type: "ACTUALIZARCATEGORIA",
		payload: categoria,
	};
};

export const ModificarVisible = (producto, visible) => {
	return {
		type: "ACTUALIZARVISIBLE",
		payload: {
			producto: producto,
			visible: visible,
		},
	};
};

export const DesmontarProductos = () => {
	return {
		type: "DESMONTARPRODUCTOS",
	};
};
