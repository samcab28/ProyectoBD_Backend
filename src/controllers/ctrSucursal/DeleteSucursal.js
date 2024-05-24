// Controlador para borrar una sucursal existente por ID
import {getConnection} from "../../database/connection.js";

export const deleteSucursal = async (req, res) => {
    try{
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec SucursalEliminar @id');
        res.send(result);
    }catch(error){
        console.error("Error al borrado de persona:", error);
        res.status(500).send("Error al borrado de persona");
    }
}
