export const ProductoReducer = (state = [], action) => {
	switch (action.type) {
		case "ACTUALIZARCATEGORIA":
			return action.payload;
		case "ACTUALIZARVISIBLE":
			const producto = action.payload.producto.map((item) => {
				if (item.categoria === action.payload.visible) {
					return {
						...item,
						visual: true,
					};
				}
				return {
					...item,
					visual: false,
				};
			});
			return producto;
		case "DESMONTARPRODUCTOS":
			return [];
		default:
			return state;
	}
};
