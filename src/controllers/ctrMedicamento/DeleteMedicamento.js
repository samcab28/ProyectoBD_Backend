// Controlador para borrar un medicamento existente por ID
import {getConnection} from "../../database/connection.js";

export const deleteMedicamento = async (req, res) => {
    try{
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec MedicamentoEliminar @id');
        res.send(result);
    }catch(error){
        console.error("Error al borrado de persona:", error);
        res.status(500).send("Error al borrado de persona");
    }
}

