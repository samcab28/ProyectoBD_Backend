import {getConnection} from "../../database/connection.js";

// Controlador para borrar un Expediente existente por ID
export const deleteExpediente = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdExpediente', id)
            .query('exec ExpedienteEliminar @IdExpediente'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al borrar un solo Expediente:", error);
        res.status(500).send("Error al borrar un solo Expediente");
    }
}
