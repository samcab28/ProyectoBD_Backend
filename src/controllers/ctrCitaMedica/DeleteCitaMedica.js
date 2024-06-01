import {getConnection} from "../../database/connection.js";

// Controlador para borrar una cita existente por ID
export const deleteCitaMedica = async (req, res) => {
    try{
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec CitaMedicaEliminar @id');
        res.send(result);
    }catch(error){
        console.error("Error al borrado de cita médica:", error);
        res.status(500).send("Error al borrado de cita médica");
    }
}
