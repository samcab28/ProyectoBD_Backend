// Controlador para borrar un producto existente por ID
import {getConnection} from "../../database/connection.js";

export const deleteProducto = async (req, res) => {
    try{
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec ProductoEliminar @id');
        res.send(result);
    }catch(error){
        console.error("Error al borrado de producto:", error);
        res.status(500).send("Error al borrado de producto");
    }
}
