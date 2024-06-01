import {getConnection} from "../../database/connection.js";


// Controlador para borrar una persona existente por ID
export const deleteMarcaProducto = async (req, res) => {
    try{
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec MarcaProductoEliminar @id');
        res.send(result);
    }catch(error){
        console.error("Error al borrado de Marca producto:", error);
        res.status(500).send("Error al borrado de marca producto");
    }
}
