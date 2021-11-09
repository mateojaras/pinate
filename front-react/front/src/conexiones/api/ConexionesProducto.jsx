import axios from "axios"

const ConexionesProducto = {
    
    getListProducts: async (id) => {
        const res = await axios.get("http://localhost:8080/api/productos")
        return res.data
    },

    getListProductsCategory: async (categoria) => {
        const res = await axios.get("http://localhost:8080/api/categoria/"+categoria)
        return res.data
    },
    createProduct: async (producto) => {
        const res = await axios.post("http://localhost:8080/api/producto",producto)
        return res.data
    }
    
}

export default ConexionesProducto;
